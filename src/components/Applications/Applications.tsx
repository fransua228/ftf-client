import React,{ReactElement,useContext} from 'react'
import {observer} from 'mobx-react'
import Context from '../../index'
import GamesParagraph from './ApplicationsParagraph'
import GamesSwiper from './ApplicationsSwiper'

export default observer(function Games() {
    const {defaultInfo} = useContext(Context)
    return <div className="games wrapper">
        <GamesParagraph head={defaultInfo.quotes[0].head} paragraph={defaultInfo.quotes[0].paragraph} author={defaultInfo.quotes[0].author}/>
        <GamesSwiper/>
    </div>
})