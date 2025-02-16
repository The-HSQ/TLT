import { useRef, useState } from "react";
import { carouselData } from './company';

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import { ArrowLeft, ArrowRight } from "lucide-react";

const Carousel = () => {
  const swiperRef = useRef(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  return (
    <div className=' px-[1rem] sm:px-[2rem] lg:px-[2.5rem] pb-10 '>
      {/* Main Container */}
      <div className=" custom-container mx-auto bg-black text-white w-full h-full rounded-2xl md:rounded-4xl py-6 2md:py-20 ">
        {/* topPart */}
        <div className=" px-4 2md:px-10 flex flex-col 2md:flex-row gap-4 mb-5 ">
          {/* headings */}
          <div className=" w-[100%] md:w-[80%] 2md:w-[50%] ">
            <h3 className=' text-center xs:text-left text-xl font-medium mb-4 ' >Our Executive Leadership Team</h3>
            <h2 className=' tracking-[-2px] 2md:tracking-[-3px] text-pretty text-5xl md:text-6xl font-semibold ' >Leading the way to marketing excellence</h2>
          </div>

          {/* Custom Navigation Buttons */}
          <div className=" w-[100%] 2md:w-[50%] flex justify-end items-end ">
            <button
              onClick={handlePrev}
              disabled={isBeginning}
              className={` text-white p-2 rounded-full transition-opacity ${isBeginning ? "opacity-50 cursor-not-allowed" : "cursor-pointer opacity-100"}`}
            >
              <ArrowLeft size={30} />
            </button>
            <button
              onClick={handleNext}
              disabled={isEnd}
              className={` text-white p-2 rounded-full transition-opacity ${isEnd ? "opacity-50 cursor-not-allowed" : "cursor-pointer opacity-100"}`}
            >
              <ArrowRight size={30} />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div className=" w-full px-4 2md:px-10 ">
          <Swiper
            className="w-full h-[350px] xs:h-[400px] md:h-[450px] "
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={20}
            slidesPerView={1.3} // Default for mobile
            breakpoints={{
              480: { slidesPerView: 2.3 }, // Mobile
              768: { slidesPerView: 3.3 }, // Tablet
              992: { slidesPerView: 4 }, // Desktop
            }}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
              setIsBeginning(swiper.isBeginning);
              setIsEnd(swiper.isEnd);
              swiper.on("slideChange", () => {
                setIsBeginning(swiper.isBeginning);
                setIsEnd(swiper.isEnd);
              });
            }}
          >
            {carouselData.map((data, index) => (
              <SwiperSlide key={index} className="group cursor-pointer w-full h-full overflow-hidden rounded-xl relative">
                {/* Image */}
                <img className=" transition-all duration-500 group-hover:scale-110 w-full h-full object-cover object-center absolute inset-0" src={data.image} alt={data.name} />

                {/* Overlay with Name, Position & LinkedIn Button */}
                <div className="absolute tracking-[-.5px] bottom-0 left-0 w-full bg-black/50 text-white h-18 flex items-center px-4 backdrop-blur-md">
                  <div className=" duration-500 transition-all group-hover:-translate-y-16 group-hover:opacity-0 block  ">
                    <h3 className="text-lg font-semibold">{data.name}</h3>
                    <p className="text-sm">{data.position}</p>
                  </div>
                  <button className=" absolute opacity-0 transition-all translate-y-20 group-hover:translate-y-0 duration-500 group-hover:opacity-100 rounded-md flex justify-center items-center gap-1 ">
                    See in LinkedIn <ArrowRight size={15} />
                  </button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

        </div>
      </div>
    </div>
  )
}

export default Carousel





