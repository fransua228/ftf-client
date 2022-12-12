import React,{ReactElement,useContext} from 'react'
import {observer} from 'mobx-react'
import Context from '../../index'
import GamesParagraph from './GamesParagraph'
import GamesSwiper from './GamesSwiper'

export default observer(function Games() {
    const {defaultInfo} = useContext(Context)
    return <div className="games">
        <GamesParagraph head={defaultInfo.games.head} paragraph={defaultInfo.games.paragraph}/>
        <GamesSwiper/>
    </div>
})