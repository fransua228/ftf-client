import React,{ReactElement, useContext} from 'react'
import {Swiper,SwiperSlide} from 'swiper/react'
import {Pagination,A11y } from 'swiper';
import {observer} from 'mobx-react'
import Context from '../../index'
import NewsElement from './NewsElement';



export default observer(function News():ReactElement {
    const {newsInfo} = useContext(Context)
    return <Swiper 
        modules={[Pagination,A11y]}
        loop
        pagination={{ clickable: true,}}
        spaceBetween={50}
        slidesPerView={3}
        className='news'
    >
        {newsInfo.lastNews.map(news => <SwiperSlide><NewsElement image={news.image} paragraph={news.paragraph} head={news.head} date = {news.date}/></SwiperSlide>)}
    </Swiper>   
})
