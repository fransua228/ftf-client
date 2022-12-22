import React,{ReactElement,useContext} from 'react'
import {Swiper,SwiperSlide} from 'swiper/react'
import { EffectCards } from "swiper";
import {observer} from 'mobx-react'
import Context from '../../index'
import GamesSwiperElement from './GamesSwiperElement'

export default observer(function GamesSwiper():ReactElement {
    const {gamesInfo} = useContext(Context)
    return <Swiper
        effect={'cards'}
        modules={[EffectCards]}
    >
        {gamesInfo.gamesMini.map((game,index) => 
            <SwiperSlide key={'gameselement' + game.id + index}>
                <GamesSwiperElement name={game.name} id={game.id} image={game.image}/>
            </SwiperSlide>)}
    </Swiper>
})