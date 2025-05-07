"use client";
import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import './style.scss';
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";

export function CustomNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-next-arrow`}
      onClick={onClick}
    >
      <MdNavigateNext style={{ color: "green" }} />
    </div>
  );
}

export function CustomPrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-prev-arrow`}
      onClick={onClick}
    >
      <MdNavigateBefore style={{ color: "green" }} />
    </div>
  );
}

export function Carousel({ children }: any) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: true,
          nextArrow: <CustomNextArrow />,
          prevArrow: <CustomPrevArrow />,
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          nextArrow: <CustomNextArrow />,
          prevArrow: <CustomPrevArrow />,
        }
      }
    ]
  };

  const singleSlideSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  const carouselSettings = React.Children.count(children) > 1 ? settings : singleSlideSettings;

  return (
    <div className="slider-contain">
      <Slider {...carouselSettings}>
        {children}
      </Slider>
    </div>
  );
}
