"use client";

import * as React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import * as Popover from "@radix-ui/react-popover";
import { cn } from "@/lib/utils";
import { Calendar } from "./calendar"; // Your original Calendar component
import { buttonVariants } from "../buttons/button";

interface DatePickerProps {
  value?: Date;
  onChange: (date?: Date) => void;
  className?: string;
}

function DatePicker({ value, onChange, className }: DatePickerProps) {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="space-y-2">
      <Popover.Root open={open} onOpenChange={setOpen}>
        <Popover.Trigger asChild>
          <button
            className={cn(
              buttonVariants({ variant: "outline" }),
              "w-full h-10 justify-start text-left font-normal border-input bg-background px-3 py-2 text-sm",
              !value && "text-muted-foreground",
              className
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {value ? format(value, "PPP") : <span>Pick a date</span>}
          </button>
        </Popover.Trigger>
        <Popover.Content
          className="w-auto p-0 bg-background border rounded-md shadow-lg"
          align="start"
        >
          <Calendar
            mode="single"
            selected={value}
            onSelect={(newDate) => {
              onChange(newDate);
              setOpen(false); // Close after selection
            }}
            initialFocus
          />
        </Popover.Content>
      </Popover.Root>
    </div>
  );
}

DatePicker.displayName = "DatePicker";

export { DatePicker };
