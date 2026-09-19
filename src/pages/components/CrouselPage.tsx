import ComponentDemo from "../ComponentsDemo";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const CrouselPage = () => {
  const basicCrousel = `
  import ComponentDemo from "../ComponentsDemo";
  import { Swiper, SwiperSlide } from "swiper/react";
  import { Pagination } from "swiper/modules";
  import "swiper/css"

  <Swiper className="mySwiper bg-blue-200 text-center">
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      <SwiperSlide>Slide 5</SwiperSlide>
      <SwiperSlide>Slide 6</SwiperSlide>
      <SwiperSlide>Slide 7</SwiperSlide>
      <SwiperSlide>Slide 8</SwiperSlide>
      <SwiperSlide>Slide 9</SwiperSlide>
  </Swiper>
  `;

  const slidePerView = `
    import ComponentDemo from "../ComponentsDemo";
    import { Swiper, SwiperSlide } from "swiper/react";
    import { Pagination } from "swiper/modules";
    import "swiper/css";

    <Swiper
      slidesPerView={3}
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper slidePerView bg-blue-200"
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      <SwiperSlide>Slide 5</SwiperSlide>
      <SwiperSlide>Slide 6</SwiperSlide>
      <SwiperSlide>Slide 7</SwiperSlide>
      <SwiperSlide>Slide 8</SwiperSlide>
      <SwiperSlide>Slide 9</SwiperSlide>
    </Swiper>
  `;

  const cssView = `
  import React, { useRef, useState } from 'react';
  // Import Swiper React components
  import { Swiper, SwiperSlide } from 'swiper/react';

  // Import Swiper styles
  import 'swiper/css';
  import 'swiper/css/navigation';
  import 'swiper/css/pagination';

  import './styles.css';

  // import required modules
  import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

  export default function App() {
    return (
      <>
        <Swiper
          cssMode={true}
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className="mySwiper"
        >
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
          <SwiperSlide>Slide 8</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide>
        </Swiper>
      </>
    );
  }
  `;

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-12">
      <header className="space-y-2">
        <p
          className="text-4xl font-bold tracking-tight"
          style={{ color: "var(--text-color)" }}
        >
          Crousel
        </p>
        <p className="text-lg text-gray-600">
          Tooltips display informative text when users hover over, focus on, or
          tap an element.
        </p>
      </header>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Basic Tooltip</h2>
        <ComponentDemo code={basicCrousel}>
          <Swiper className="mySwiper bg-blue-200 text-center">
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            <SwiperSlide>Slide 5</SwiperSlide>
            <SwiperSlide>Slide 6</SwiperSlide>
            <SwiperSlide>Slide 7</SwiperSlide>
            <SwiperSlide>Slide 8</SwiperSlide>
            <SwiperSlide>Slide 9</SwiperSlide>
          </Swiper>
        </ComponentDemo>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Slides per view</h2>
        <ComponentDemo code={slidePerView}>
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper slidePerView rounded  "
          >
            <SwiperSlide className="swiper-child bg-red-200 rounded">
              Slide 1
            </SwiperSlide>
            <SwiperSlide className="swiper-child bg-red-200 rounded">
              Slide 2
            </SwiperSlide>
            <SwiperSlide className="swiper-child bg-red-200 rounded">
              Slide 3
            </SwiperSlide>
            <SwiperSlide className="swiper-child bg-red-200 rounded">
              Slide 4
            </SwiperSlide>
            <SwiperSlide className="swiper-child bg-red-200 rounded">
              Slide 5
            </SwiperSlide>
            <SwiperSlide className="swiper-child bg-red-200 rounded">
              Slide 6
            </SwiperSlide>
            <SwiperSlide className="swiper-child bg-red-200 rounded">
              Slide 7
            </SwiperSlide>
            <SwiperSlide className="swiper-child bg-red-200 rounded">
              Slide 8
            </SwiperSlide>
            <SwiperSlide className="swiper-child bg-red-200 rounded">
              Slide 9
            </SwiperSlide>
          </Swiper>
        </ComponentDemo>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Slides per view</h2>
        <ComponentDemo code={cssView}>
          <Swiper
            cssMode={true}
            navigation={true}
            pagination={true}
            mousewheel={true}
            keyboard={true}
            modules={[Navigation, Mousewheel, Keyboard]}
            className="mySwiper cssView bg-blue-200"
          >
            <SwiperSlide className="swiper-child bg-green-200">
              Slide 1
            </SwiperSlide>
            <SwiperSlide className="swiper-child bg-blue-200">
              Slide 2
            </SwiperSlide>
            <SwiperSlide className="swiper-child bg-purple-200">
              Slide 3
            </SwiperSlide>
            <SwiperSlide className="swiper-child bg-red-200">
              Slide 4
            </SwiperSlide>
            <SwiperSlide className="swiper-child bg-yellow-200">
              Slide 5
            </SwiperSlide>
            <SwiperSlide className="swiper-child bg-orange-200">
              Slide 6
            </SwiperSlide>
            <SwiperSlide className="swiper-child bg-pink-200">
              Slide 7
            </SwiperSlide>
            <SwiperSlide className="swiper-child bg-gray-400">
              Slide 8
            </SwiperSlide>
          </Swiper>
        </ComponentDemo>
      </section>
    </div>
  );
};

export default CrouselPage;
