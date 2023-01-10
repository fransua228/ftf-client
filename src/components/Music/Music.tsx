import React,{ReactElement, useContext, useEffect, useState,useRef} from 'react'
import {observer} from 'mobx-react'
import Context from '../../index'
import MusicElement from './MusicELement'
import MusicPlayer from './MusicPlayer'

export default observer(function Music():ReactElement {
    const {musicInfo} = useContext(Context)

    const [musicNumber,setMusicNumber] = useState(0)
    const [time,setTime] = useState(0)
    const [inputTime,setInputTime] = useState(0)
    const [maxTime,setMaxTime] = useState(0)
    const [playing,setPlaying] = useState(false)
    const [volume,setVolume] = useState(1)
    const [auto,setAuto] = useState(true)

    const notInitialRender = useRef(false)

    const audio = React.useRef<HTMLAudioElement>(null)

    const miniUrl = [
        process.env.REACT_APP_SERVER_URL,
        process.env.REACT_APP_PUBLIC_URL,
        process.env.REACT_APP_MUSIC_URL
    ].join('/')

    function useMyCustom(fn:() => void,args:Array<any>) {
        useEffect(()=>{
            if(notInitialRender.current) {
                fn()
            } else {
                notInitialRender.current = true
            }
        },args)
    }

    useMyCustom(()=>{
        audio.current!.src = [miniUrl,musicInfo.music[musicNumber].src].join('/')
        audio.current?.play()
    },[musicNumber])

    useMyCustom(()=>{
        if(playing) audio.current!.play()
        else audio.current!.pause()
    },[playing])

    useMyCustom(()=>{audio.current!.currentTime = inputTime},[inputTime])

    useMyCustom(()=>{audio.current!.volume = volume},[volume])
    
    return <div className='music'>
        <audio 
            ref={audio} 
            src={[miniUrl,musicInfo.music[musicNumber].src].join('/')}
            onCanPlay={() => {
                setMaxTime(audio.current!.duration)
                setVolume(audio.current!.volume)
            }}
            onTimeUpdate={() => setTime(audio.current!.currentTime)}
            onEnded={()=>{
                if(auto) {
                    if(musicNumber + 1 < musicInfo.music.length) setMusicNumber(musicNumber + 1)
                    else setMusicNumber(0)
                } else {
                    audio.current!.currentTime = 0
                    audio.current?.play()
                }
            }}
        >
        </audio>
        <MusicPlayer 
            audio={audio} 
            title={musicInfo.music[musicNumber].title}
            author={musicInfo.music[musicNumber].author}
            picture={musicInfo.music[musicNumber].picture ? musicInfo.music[musicNumber].picture : musicInfo.defaultImage}
            time={time}
            setTime={setTime}
            playing={playing}
            setPlaying={setPlaying}
            maxTime={maxTime}
            inputTime={inputTime}
            setInputTime={setInputTime}
            volume={volume}
            setVolume={setVolume}
            auto={auto}
            setAuto={setAuto}
            value={musicNumber}
            setValue={setMusicNumber}
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