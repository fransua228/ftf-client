import React,{ReactElement, useContext, useState} from 'react'
import MediaQuery from 'react-responsive'
import {observer} from 'mobx-react'
import Context from '../../index'
import IconButton from '../universal/IconButton'
import Range from '../universal/Range'
import MusicTime from './MusicTime'
import { IstatePlay } from '../../functions/interfaces'

type ImusicP = IstatePlay

export default observer(function MusicPlayer({playing,setPlaying}:ImusicP):ReactElement {
    const {musicInfo} = useContext(Context)
    const [prevVolume,setPrevVolume] = useState(musicInfo.volume)
    const [visibleManage,setVisibleManage] = useState(false)
    function toMusic(val:number) {
        if(typeof musicInfo.musicNumber === 'number') {
            if(val === 1)  (musicInfo.musicNumber < musicInfo.music.length - 1) ? musicInfo.setMusicNumber(musicInfo.musicNumber + val) : musicInfo.setMusicNumber(0)
            if(val === -1) (musicInfo.musicNumber > 0) ? musicInfo.setMusicNumber(musicInfo.musicNumber + val) : musicInfo.setMusicNumber(musicInfo.music.length - 1)  
        }
    }
    const getVolumeRange =(value:number) => value > 0 ? Math.min(3, Math.max(0, Math.ceil(value / 0.25))) : 0
    const setMuted = () => {
        if(musicInfo.volume > 0) {
            setPrevVolume(musicInfo.volume)
            musicInfo.setVolume(0)
        } else musicInfo.setVolume(prevVolume)    
    }
    return <div className='music-player'>
        <div className="information-main">
            <img 
                src={`data:image/png;base64,${musicInfo.music[musicInfo.musicNumber || 0].picture ? musicInfo.music[musicInfo.musicNumber || 0].picture : musicInfo.defaultImage}`} 
                alt="Mini album" 
            />
            <div className="information">
                <span className='title'>{musicInfo.music[musicInfo.musicNumber || 0].title}</span>
                <span className='author'>{musicInfo.music[musicInfo.musicNumber || 0].author}</span>
            </div>
        </div>    
        <div className="management">
            <div className="management-up">
                <IconButton classDiv='prev' classI='icon-music-next' onClick={() => {toMusic(-1);setPlaying(true)}}/>
                <IconButton 
                    classDiv='pause' 
                    classI='icon-music-' 
                    valueClass={!playing ? 'play2' : 'pause'} 
                    onClick={() => setPlaying(!playing)}
                />
                <IconButton classDiv='next' classI='icon-music-next' onClick={() => {toMusic(1);setPlaying(true)}}/>
            </div>
            <div className="management-down">
                <MusicTime time={musicInfo.time}/>
                <Range 
                    classDiv='music' 
                    width={musicInfo.time / musicInfo.maxTime} value={musicInfo.time}
                    min={0} max={musicInfo.maxTime} step={1}         
                    onChange={(e:any) => musicInfo.setInputTime(e.target.value)}
                />
                <MusicTime time={musicInfo.maxTime}/>
            </div>
        </div>
        <div className={`management-last ${visibleManage ? 'active' : ''}`}>
        <MediaQuery maxWidth={500}>
            <div className="visible-manage" onClick={() => setVisibleManage(!visibleManage)}>{'<<'}</div>
        </MediaQuery>
            <div className="management-volume">
                <IconButton 
                    classDiv='volume-button' 
                    classI='icon-music-volume' 
                    valueClass={getVolumeRange(musicInfo.volume)} 
                    onClick={() => setMuted()}
                />
                <Range 
                    classDiv='volume' 
                    width={musicInfo.volume} value={musicInfo.volume}
                    min={0} max={1} step={0.05}  
                    onChange={(e:any)=> musicInfo.setVolume(e.target.value)}
                />
            </div>
            <div className="management-etc">
                <IconButton 
                    classDiv='play-auto' 
                    classI='icon-music-auto' 
                    valueClass={musicInfo.auto ? 1 : 2} 
                    onClick={() => musicInfo.setAuto(!musicInfo.auto)}
                />
            </div>
        </div>
    </div>
})