import React,{ReactElement} from 'react'
import {SwiperSlide} from 'swiper/react'
import {Inews} from '../../types/interfaces'
export default function NewsElement({image,head,paragraph,date}:Inews):ReactElement {
    function setDate(d:string):string {
        let yourDate = new Date(Number(d))
        const offset = yourDate.getTimezoneOffset()
        yourDate = new Date(yourDate.getTime() - (offset*60*1000))
        return yourDate.toISOString().split('T')[0].split('-').reverse().join('.')
    }
    return <>
        <h2>{head}</h2>
        <p>{paragraph}</p>
        <img src={image} alt="news" />
        <span className="date">{setDate(date)}</span>
    </>
}