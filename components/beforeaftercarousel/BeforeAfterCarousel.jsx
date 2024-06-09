"use client";

import React from 'react';
import Slider from "react-slick";
import BeforeAfterSliderComponent from 'react-before-after-slider-component';
import 'react-before-after-slider-component/dist/build.css';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa'; // Using react-icons for arrow icons
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="absolute top-1/2 right-0 z-10 transform -translate-y-1/2 cursor-pointer" onClick={onClick}>
      <IoIosArrowForward size={40} className="text-black hover:text-gray-700 transition-colors duration-200" />
    </div>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="absolute top-1/2 left-0 z-10 transform -translate-y-1/2 cursor-pointer" onClick={onClick}>
      <IoIosArrowBack size={40} className="text-black hover:text-gray-700 transition-colors duration-200" />
    </div>
  );
};

const BeforeAfterCarousel = () => {
  const beforeAfterImages = [
    {
      before: {imageUrl: 'https://bez-prowizji.pl/wp-content/uploads/2023/10/zlota59_dawniej.jpg'},
      after: {imageUrl: 'https://bez-prowizji.pl/wp-content/uploads/2023/10/zlota59_teraz.jpg'},
    },
    {
      before: {imageUrl: 'https://bez-prowizji.pl/wp-content/uploads/2023/10/pulawska2_dawniej.jpg'},
      after: {imageUrl: 'https://bez-prowizji.pl/wp-content/uploads/2023/10/pulawska2_teraz.jpg'}
    },
    {
      before: {imageUrl: 'https://bez-prowizji.pl/wp-content/uploads/2023/11/domaniewska48_dawniej.png'},
      after: {imageUrl: 'https://bez-prowizji.pl/wp-content/uploads/2023/11/domaniewska48_obecnie.jpg'}
    },
    {
      before: {imageUrl: 'https://bez-prowizji.pl/wp-content/uploads/2023/11/warynskiego3a_dawniej.png'},
      after: {imageUrl: 'https://bez-prowizji.pl/wp-content/uploads/2023/11/warynskiego3a_obecnie.png'}
    },
    {
      before: {imageUrl: 'https://bez-prowizji.pl/wp-content/uploads/2023/11/emilii-plater49_dawniej.jpg'},
      after: {imageUrl: 'https://bez-prowizji.pl/wp-content/uploads/2023/11/emilii-plater49_obecnie.jpg'}
    },
    {
      before: {imageUrl: 'https://bez-prowizji.pl/wp-content/uploads/2023/11/poniatowskiego1_dawniej.png'},
      after: {imageUrl: 'https://bez-prowizji.pl/wp-content/uploads/2023/11/poniatowskiego1_obecnie.jpg'}
    },
    {
      before: {imageUrl: 'https://bez-prowizji.pl/wp-content/uploads/2023/11/zelazna32_dawniej.jpg'},
      after: {imageUrl: 'https://bez-prowizji.pl/wp-content/uploads/2023/11/zelazna32_obecnie.jpg'}
    },
    {
      before: {imageUrl: 'https://bez-prowizji.pl/wp-content/uploads/2023/10/jana-pawla-ii_dawniej.jpg'},
      after: {imageUrl: 'https://bez-prowizji.pl/wp-content/uploads/2023/10/jana-pawla-ii_teraz.jpg'}
    },

  ];

  const settings = {
    draggable: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,

        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },

    ]
  };

  return (
    <div className='max-w-screen-3xl mx-auto p-8 px-10'>
      <h2 className="text-2xl mb-4">Warszawa dawniej i dziś</h2>
      <Slider {...settings} className='px-8'>
        {beforeAfterImages.map((item, index) => (
          <div key={index} className="p-2">
            <div className="block shadow-sm overflow-hidden hover:shadow-lg transition-shadow duration-300 relative group ">
              <div className="relative w-full ">
                <BeforeAfterSliderComponent
                  firstImage={item.before}
                  secondImage={item.after}
                />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BeforeAfterCarousel;
