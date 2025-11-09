
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import watch from "../../../assets/images/banner.png"
import men from "../../../assets/images/men.png"
import book from "../../../assets/images/book.png"


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import CarouselSlide from './CarouselSlide';

const HeroCarousel =() => {

    const slides = [
        {
            title : "Products Are Best.Watch Look Great",
            subtitle : "Quality Metter with Quantity",
            image : watch,

        },
        {
            title : "Good Quality, Premium Book",
            subtitle : "Quality Metter with Quantity",
            image : book

        },
        {
            title : "Perfume Smell Good.Atteractive with other person",
            subtitle : "Quality Metter with Quantity",
            image : men

        },
    ]
  return (
    <>
      <Swiper
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {slides.map((slide,index) => (
            <SwiperSlide key={index}>
                <CarouselSlide 
                    title= {slide.title}
                    subtitle={slide.subtitle}
                    image={slide.image} 
                />
            </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default HeroCarousel;
