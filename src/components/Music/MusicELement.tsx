import React,{ReactElement,useContext} from 'react'
import { Imusic,IstatePlay } from '../../functions/interfaces'
import {observer} from 'mobx-react'
import Context from '../../index'
import IconButton from '../universal/IconButton'

type ImusicElement = Imusic & IstatePlay

export default observer(function MusicElement({idx,playing,setPlaying,music}:ImusicElement):ReactElement {
    const {musicInfo} = useContext(Context)
    const renderArr = [music.title,music.author,music.album,music.genre,music.year,music.duration]
    const src = [musicInfo.miniUrl,music.src].join('/')

    return <div className={`music-element ${musicInfo.musicNumber == idx ? 'active' : 'passive'}`}>
        <IconButton
            classDiv='music-element-activate'
            classI='icon-music-play'
            valueClass={musicInfo.musicNumber == idx ? 2 : 1}
            onClick={() => {musicInfo.setMusicNumber(idx || 0);setPlaying(true)}}
        />
        <div className='music-element-download'>
            <a href={src} className="music-element-download" target='_blank'>
                <i className="icon-music-download"></i>
            </a>
        </div>
        
        {renderArr.map((render,index) => <div className='music-element-text' key={'music-element' + render + index}>
                <span>{render}</span>
            </div>
        )}
    </div>
})