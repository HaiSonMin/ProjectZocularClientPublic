"use client";

import {
  useState,
  useRef,
  useEffect,
  useCallback,
  forwardRef,
  useImperativeHandle,
} from "react";
import { ChevronUp } from "lucide-react";

type TimeValue = {
  hour: number;
  minute: number;
  second: number;
  isPM: boolean;
};

export interface TimePickerRef {
  getValue: () => string;
}

export interface TimePickerProps {
  value?: string; // ex: "06:28:55 PM"
  onChange?: (value: string) => void;
}

function useOutsideClick(
  ref: React.RefObject<HTMLElement>,
  onClose: () => void
) {
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        onClose();
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [ref, onClose]);
}

function useWheel(
  ref: React.RefObject<HTMLElement>,
  handler: (increment: boolean) => void,
  isActive: boolean
) {
  useEffect(() => {
    if (!isActive || !ref.current) return;

    const el = ref.current;
    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      handler(e.deltaY < 0);
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, [ref, handler, isActive]);
}

export const TimePicker = forwardRef<TimePickerRef, TimePickerProps>(
  ({ value, onChange }, ref) => {
    const dropdownRef = useRef<HTMLDivElement>(null);
    const refs = {
      hour: useRef<HTMLDivElement>(null),
      minute: useRef<HTMLDivElement>(null),
      second: useRef<HTMLDivElement>(null),
      ampm: useRef<HTMLDivElement>(null),
    };

    const [isOpen, setIsOpen] = useState(false);
    const [time, setTime] = useState<TimeValue>(() => {
      if (value) {
        const [hh, mm, ssWithAmPm] = value.split(":");
        const [ss, period] = ssWithAmPm.split(" ");
        return {
          hour: parseInt(hh),
          minute: parseInt(mm),
          second: parseInt(ss),
          isPM: period === "PM",
        };
      }
      return { hour: 6, minute: 28, second: 55, isPM: true };
    });

    useOutsideClick(dropdownRef, () => setIsOpen(false));

    const changeUnit = useCallback(
      (unit: keyof TimeValue, increment?: boolean) => {
        setTime((prev) => {
          let { hour, minute, second, isPM } = prev;
          switch (unit) {
            case "hour": {
              const nextHour = ((hour - 1 + (increment ? 1 : 11)) % 12) + 1;
              return { ...prev, hour: nextHour };
            }
            case "minute": {
              const nextMin = (minute + (increment ? 1 : 59)) % 60;
              return { ...prev, minute: nextMin };
            }
            case "second": {
              const nextSec = (second + (increment ? 1 : 59)) % 60;
              return { ...prev, second: nextSec };
            }
            case "isPM":
              return { ...prev, isPM: !isPM };
            default:
              return prev;
          }
        });
      },
      []
    );

    // Wheel listeners
    useWheel(refs.hour, (inc) => changeUnit("hour", inc), isOpen);
    useWheel(refs.minute, (inc) => changeUnit("minute", inc), isOpen);
    useWheel(refs.second, (inc) => changeUnit("second", inc), isOpen);
    useWheel(refs.ampm, () => changeUnit("isPM"), isOpen);

    const format = (v: number) => String(v).padStart(2, "0");

    useEffect(() => {
      if (onChange) {
        const timeStr = `${format(time.hour)}:${format(time.minute)}:${format(
          time.second
        )} ${time.isPM ? "PM" : "AM"}`;
        onChange(timeStr);
      }
    }, [time, onChange]);

    useImperativeHandle(ref, () => ({
      getValue: () =>
        `${format(time.hour)}:${format(time.minute)}:${format(time.second)} ${
          time.isPM ? "PM" : "AM"
        }`,
    }));

    const renderUnit = (unit: keyof TimeValue) => {
      const val =
        unit === "isPM"
          ? time.isPM
            ? "PM"
            : "AM"
          : format(time[unit] as number);

      const max = unit === "hour" ? 12 : 59;
      const prev =
        unit === "isPM"
          ? time.isPM
            ? "AM"
            : "PM"
          : format(((time[unit] as number) + max) % (max + 1));
      const next =
        unit === "isPM"
          ? time.isPM
            ? "AM"
            : "PM"
          : format(((time[unit] as number) + 1) % (max + 1));

      return (
        <div key={unit} className="flex flex-col items-center mx-1">
          <div
            className="text-gray-400 cursor-pointer hover:bg-gray-100 rounded px-2"
            onClick={() => changeUnit(unit, false)}
          >
            {prev}
          </div>
          <div
            ref={refs[unit]}
            className="bg-gray-50 font-medium rounded px-2 py-1"
          >
            {val}
          </div>
          <div
            className="text-gray-400 cursor-pointer hover:bg-gray-100 rounded px-2"
            onClick={() => changeUnit(unit, true)}
          >
            {next}
          </div>
        </div>
      );
    };

    return (
      <div className="relative w-full" ref={dropdownRef}>
        <button
          type="button"
          onClick={() => setIsOpen((o) => !o)}
          className="w-full flex items-center justify-between px-4 py-2 border rounded bg-white"
        >
          <span>
            {isOpen
              ? "Select time"
              : `${format(time.hour)}:${format(time.minute)}:${format(
                  time.second
                )} ${time.isPM ? "PM" : "AM"}`}
          </span>
          <ChevronUp
            className={`h-5 w-5 transition-transform ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </button>

        {isOpen && (
          <div className="absolute mt-1 w-full bg-white border rounded shadow z-10">
            <div className="flex justify-center p-2">
              {(
                ["hour", "minute", "second", "isPM"] as (keyof TimeValue)[]
              ).map(renderUnit)}
            </div>
          </div>
        )}
      </div>
    );
  }
);

TimePicker.displayName = "TimePicker";
