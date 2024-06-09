"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Slider from "react-slick";
import { fetchPropertiesData } from '@/lib/properties';
import Image from 'next/image';
import { BounceLoader } from 'react-spinners';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import './nieruchomosci.css'
const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="absolute top-1/2 right-arrow z-10 transform -translate-y-1/2 cursor-pointer" onClick={onClick}>
      <IoIosArrowForward size={40} className="text-black hover:text-gray-700 transition-colors duration-200" />
    </div>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className='absolute top-1/2 left-arrow z-10 transform -translate-y-1/2 cursor-pointer' onClick={onClick}>
      <IoIosArrowBack size={40} className="text-black hover:text-gray-700 transition-colors duration-200" />
    </div>
  );
};

const NieruchomosciCarousel = () => {
  const [properties, setProperties] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProperties = async () => {
      const propertiesData = await fetchPropertiesData(1); // Fetch the first page
      setProperties(propertiesData.reverse().slice(0, 12)); // Get the latest 12 properties and reverse the order
      setIsLoading(false);
    };

    fetchProperties();
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
      <div className='max-w-screen-3xl mx-auto border-2  py-8 px-10'><h2 className="text-2xl mb-4">NAJNOWSZE OFERTY</h2>
      {isLoading ? (
        <div className="flex justify-center items-center h-80">
        <BounceLoader color="#17488d" />
      </div>
      ) : (
        <Slider {...settings}>
          {properties.map((property, index) => (
            <div key={index} className="p-2 h-80">
              <Link href={`/property/${property.id}`} passHref legacyBehavior>
                <a className="block shadow-sm overflow-hidden hover:shadow-lg transition-shadow duration-300 relative group h-full">
                  <div className="relative w-full h-full">
                    {property.property_images.image.slice(0, 1).map((img, i) => (
                      <Image
                        key={i}
                        src={`https://api.procode.pl/images/${img.url}`}
                        alt={`Property image ${i}`}
                        layout="fill"
                        objectFit="cover"
                        className="transform transition-transform duration-300 ease-in-out group-hover:opacity-0"
                        quality={100}
                      />
                    ))}
                    <div className="absolute inset-0 bg-white bg-opacity-100 p-4 flex flex-col justify-center items-start opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <h3 className="text-lg font-semibold mb-1">{property.property_type}</h3>
                      <p className="text-sm mb-1">Offer Type: {property.offer_type}</p>
                      <p className="text-sm mb-1">Price: {property.rent_price.exact_price} {property.rent_price.price_currency}</p>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
          ))}
        </Slider>
      )}</div>


  );
};

export default NieruchomosciCarousel;
