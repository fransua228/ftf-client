import React,{ReactElement, useContext} from 'react'
import {Swiper,SwiperSlide} from 'swiper/react'
import {Pagination,A11y,Autoplay,Keyboard } from 'swiper';
import {observer} from 'mobx-react'
import Context from '../../index'
import NewsElement from './NewsElement';



export default observer(function News():ReactElement {
    const {newsInfo} = useContext(Context)
    const toSecond = (x:number):number => x*1000
    return <Swiper 
        modules={[Pagination,A11y,Autoplay,Keyboard]}
        loop
        autoplay={{
            delay: toSecond(10),
            disableOnInteraction: false,
        }}
        pagination={{clickable: true,}}
        keyboard={{enabled:true,onlyInViewport:true}}
        spaceBetween={50}
        slidesPerView={3}
        breakpoints={{
            1280 : {
                slidesPerView:3
            },
            1024 : {
                slidesPerView:2
            },
            640 : {
                slidesPerView:1
            },
            0: {
                slidesPerView:1
            }
        }}
        className='news'
    >
        {newsInfo.lastNews.map((news,index) => <SwiperSlide  key={'newselement' + news.date + index}><NewsElement image={news.image} paragraph={news.paragraph} head={news.head} date = {news.date}/></SwiperSlide>)}
    </Swiper>   
})
