import React,{ReactElement,useContext} from 'react'
import {Swiper,SwiperSlide} from 'swiper/react'
import { EffectCards } from "swiper";
import {observer} from 'mobx-react'
import Context from '../../index'
import GamesSwiperElement from './ApplicationsSwiperElement'

export default observer(function GamesSwiper() {
    const {gamesInfo} = useContext(Context)
    return <Swiper
        effect={'cards'}
        modules={[EffectCards]}
    >
        {gamesInfo.gamesMini.map(game => <SwiperSlide><GamesSwiperElement name={game.name} id={game.id} image={game.image}/></SwiperSlide>)}
    </Swiper>
})