import React from "react";
import Slider from "react-slick";
import TestimonialCard from "./TestimonialCard/TestimonialCard";

import styles from "./Testimonial.module.scss";

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1224,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapper__testimonial}>
        <div className={styles.wrapper__testimonial__title}>
          <h3>Properties</h3>
          <h1>testimonial Properties</h1>
        </div>
        <div className={styles.wrapper__testimonial__slider}>
          <Slider {...settings}>
            <TestimonialCard />
            <TestimonialCard />
            <TestimonialCard />
            <TestimonialCard />
          </Slider>
        </div>
        <div className={styles.wrapper__testimonial__card}></div>
        <div className={styles.wrapper__testimonial__see}>
          <button>See All</button>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
