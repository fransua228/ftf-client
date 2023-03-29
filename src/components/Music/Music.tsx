import React,{ReactElement, useContext, useEffect, useState,useRef} from 'react'
import {observer} from 'mobx-react'
import Context from '../../index'
import MusicElement from './MusicELement'
import MusicPlayer from './MusicPlayer'

export default observer(function Music():ReactElement {
    const {musicInfo} = useContext(Context)
    const [playing,setPlaying] = useState<boolean>(false)
    const notInitialRender = useRef<boolean>(false)
    const audio = React.useRef<HTMLAudioElement>(null)
    const useMyCustom = (fn:() => void,args:Array<any>) => useEffect(()=>{notInitialRender.current ? fn() : notInitialRender.current = true},args)
    
    useMyCustom(()=>{
        audio.current!.src = [musicInfo.miniUrl,musicInfo.music[musicInfo.musicNumber].src].join('/')
        audio.current?.play()
    },[musicInfo.musicNumber])
    useMyCustom(()=>{
        if(playing) audio.current!.play()
        else audio.current!.pause()
    },[playing])
    useMyCustom(()=>{audio.current!.currentTime = musicInfo.inputTime},[musicInfo.inputTime])
    useMyCustom(()=>{audio.current!.volume = musicInfo.volume},[musicInfo.volume])
    
    return <div className='music'>
        <audio 
            ref={audio} 
            src={[musicInfo.miniUrl,musicInfo.music[musicInfo.musicNumber].src].join('/')}
            onCanPlay={() => {
                musicInfo.setMaxTime(audio.current!.duration)
                musicInfo.setVolume(audio.current!.volume)
            }}
            onTimeUpdate={() => musicInfo.setTime(audio.current!.currentTime)}
            onEnded={()=>{
                if(musicInfo.auto) {
                    if(musicInfo.musicNumber + 1 < musicInfo.music.length) musicInfo.setMusicNumber(musicInfo.musicNumber + 1)
                    else musicInfo.setMusicNumber(0)
                } else {
                    audio.current!.currentTime = 0
                    audio.current?.play()
                }
            }}
        >
        </audio>
        <MusicPlayer 
            playing={playing}
            setPlaying={setPlaying}
        />
        {musicInfo.music.map((music,index) => 
            <MusicElement 
                music={music}
                playing={playing}
                setPlaying={setPlaying}
                idx={index}
                key={'music' + index}
            />
        )}    
    </div>
})