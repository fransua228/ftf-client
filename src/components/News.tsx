import React,{ReactElement} from 'react'
import {Swiper,SwiperSlide,useSwiper} from 'swiper/react'
import { Navigation, Pagination,A11y } from 'swiper';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
export default function News() {
    const swiper = useSwiper()
    return <Swiper 
        modules={[Navigation, Pagination,A11y]}
        loop
        navigation
        pagination={{ clickable: true ,dynamicBullets:true}}
        spaceBetween={50}
        slidesPerView={1}
    >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
    </Swiper>   
}
