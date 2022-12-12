import React,{ReactElement} from 'react'
import { SwiperSlide } from 'swiper/react'
import { NavLink } from 'react-router-dom'
import {IgameSE} from '../../types/interfaces'

export default function GamesParagraph({name,image,id}:IgameSE) {
    return <SwiperSlide>
        <img src={image} alt={`Icon ${name}`} />
        <h2>{name}</h2>
        <NavLink to={`/games/${id}`}>К игре</NavLink>
    </SwiperSlide>
}