import React,{ReactElement, useContext, useEffect, useState,useRef} from 'react'
import {observer} from 'mobx-react'
import Context from '../../index'
import MusicElement from './MusicELement'
import MusicPlayer from './MusicPlayer'

export default observer(function Music():ReactElement {
    const {musicInfo} = useContext(Context)
    const [musicNumber,setMusicNumber] = useState(0)
    const notInitialRender = useRef(false)
    const audio = React.useRef<HTMLAudioElement>(null)
    const miniUrl = [
        process.env.REACT_APP_SERVER_URL,
        process.env.REACT_APP_PUBLIC_URL,
        process.env.REACT_APP_MUSIC_URL
    ].join('/')
    const checkNaN = (value:string,check:number):string => {
        if(isNaN(check)) return ''
        return value
    }
    useEffect(()=>{
        if(notInitialRender.current) {
            audio.current!.src = [miniUrl,musicInfo.music[musicNumber].src].join('/')
            audio.current!.play()
        } else {
            notInitialRender.current = true
        }
    },[musicNumber])
    return <div className='music'>
        <audio ref={audio} controls src={[miniUrl,musicInfo.music[musicNumber].src].join('/')}></audio>
        <MusicPlayer 
            audio={audio} 
            title={musicInfo.music[musicNumber].title}
            author={musicInfo.music[musicNumber].author}
        />
        {musicInfo.music.map((music,index) => 
            <MusicElement 
                src={[miniUrl,musicInfo.music[index].src].join('/')}
                title={music.title}
                author={music.author}
                album={music.album}
                genre={music.genre}
                year={music.year}
                duration={music.duration}
                idx={index}
                value={musicNumber}
                setValue={setMusicNumber}
                key={'music' + index}
            />
        )}    
    </div>
})