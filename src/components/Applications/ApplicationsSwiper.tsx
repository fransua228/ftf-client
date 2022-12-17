import React,{ReactElement,useContext} from 'react'
import {Swiper,SwiperSlide} from 'swiper/react'
import { EffectCards } from "swiper";
import {observer} from 'mobx-react'
import Context from '../../index'
import ApplicationsSwiperElement from './ApplicationsSwiperElement'

export default observer(function ApplicationsSwiper() {
    const {gamesInfo} = useContext(Context)
    return <Swiper
        effect={'cards'}
        modules={[EffectCards]}
    >
        {gamesInfo.appMini.map(game => <SwiperSlide><ApplicationsSwiperElement name={game.name} id={game.id} image={game.image}/></SwiperSlide>)}
    </Swiper>
})