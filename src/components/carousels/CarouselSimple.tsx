"use client";
import { randomKey } from "@/utils";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

interface IPropCarouselSimple {
    title: string;
    desc: string;
    img: string;
}

export const CarouselSimple = ({ data }: { data: IPropCarouselSimple[] }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? data.length - 1 : currentIndex - 1;
        setDirection(-1);
        setCurrentIndex(newIndex);
    };

    const nextSlide = useCallback(() => {
        const isLastSlide = currentIndex === data.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setDirection(1);
        setCurrentIndex(newIndex);
    }, [currentIndex, data.length]);

    const goToSlide = (slideIndex: number) => {
        setDirection(slideIndex > currentIndex ? 1 : -1);
        setCurrentIndex(slideIndex);
    };

    useEffect(() => {
        const id = setInterval(() => {
            nextSlide();
        }, 5000);
        return () => clearInterval(id);
    }, [currentIndex, nextSlide]);

    return (
        <div className="text-center">
            <div className="container-img text-center relative">
                <div className="overflow-hidden w-[90%] m-auto">
                    <div
                        className="slide-animation"
                        style={{
                            transform: `translateX(${-currentIndex * 100}%)`,
                            display: "flex",
                            transition: "transform 0.5s ease-in-out",
                        }}
                    >
                        {data.map((slide, index) => (
                            <div
                                key={randomKey()}
                                style={{ minWidth: "100%", width: "100%" }}
                            >
                                <Image
                                    src={slide?.img}
                                    alt={slide?.title}
                                    width={100}
                                    height={200}
                                    layout="responsive"
                                />
                            </div>
                        ))}
                    </div>
                </div>
                {/* Left Arrow */}
                <div className="absolute top-[50%] -translate-x-1 translate-y-[-50%] -left-4 text-2xl rounded-full cursor-pointer">
                    <MdArrowBackIos onClick={prevSlide} size={30} />
                </div>
                {/* Right Arrow */}
                <div className="absolute top-[50%] -translate-x-1 translate-y-[-50%] -right-9 text-2xl rounded-full cursor-pointer">
                    <MdArrowForwardIos onClick={nextSlide} size={30} />
                </div>
            </div>
            <div className="container-text w-[100%] m-auto mt-8">
                <h3 className="text-center font-bold text-[--color-primary] line-clamp-1">
                    {data[currentIndex].title}
                </h3>
                <p className="text-center line-clamp-3">
                    {data[currentIndex].desc}
                </p>
            </div>

            <div className="flex mt-3 justify-center py-2">
                {data.map((slide, slideIndex) => (
                    <div
                        key={randomKey()}
                        onClick={() => goToSlide(slideIndex)}
                        className={`h-5 w-5 rounded-full mr-4 ${slideIndex === currentIndex
                            ? "bg-[--color-primary]"
                            : "bg-[--color-grey-400]"
                            } cursor-pointer transition-all duration-500`}
                    ></div>
                ))}
            </div>
        </div>
    );
};
