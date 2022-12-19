import React,{ReactElement, useContext} from 'react'
import {Swiper,SwiperSlide} from 'swiper/react'
import {Pagination,A11y,Autoplay } from 'swiper';
import {observer} from 'mobx-react'
import Context from '../../index'
import NewsElement from './NewsElement';



export default observer(function News():ReactElement {
    const {newsInfo} = useContext(Context)
    const toSecond = (x:number):number => x*1000
    return <Swiper 
        modules={[Pagination,A11y,Autoplay]}
        loop
        autoplay={{
            delay: toSecond(10),
            disableOnInteraction: false,
        }}
        pagination={{clickable: true,}}
        spaceBetween={50}
        slidesPerView={3}
        className='news'
    >
        {newsInfo.lastNews.map((news,index) => <SwiperSlide  key={'newselement' + news.date + index}><NewsElement image={news.image} paragraph={news.paragraph} head={news.head} date = {news.date}/></SwiperSlide>)}
    </Swiper>   
})
