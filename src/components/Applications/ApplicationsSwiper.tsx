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
        {gamesInfo.appMini.map((app,index) => 
            <SwiperSlide key={'applicationelement' + app.id + index}>
                <ApplicationsSwiperElement name={app.name} id={app.id} image={app.image}/>
            </SwiperSlide>)}
    </Swiper>
})