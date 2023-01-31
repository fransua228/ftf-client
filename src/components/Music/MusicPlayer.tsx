import React,{ReactElement, useContext, useState} from 'react'
import MediaQuery from 'react-responsive'
import {observer} from 'mobx-react'
import Context from '../../index'
import { ImusicPlayer,IstateAuto,IstateInput,IstateNumber, IstatePlay, IstateTime, IstateVolume } from '../../functions/interfaces'

type ImusicP = ImusicPlayer & IstateNumber & IstateTime & IstatePlay & IstateInput & IstateVolume & IstateAuto

export default function MusicPlayer({
    audio,title,author,picture,
    value,setValue,time,
    playing,setPlaying,
    maxTime,inputTime,setInputTime,
    volume,setVolume,
    auto,setAuto
    }:ImusicP):ReactElement {
    const {musicInfo} = useContext(Context)
    const [prevVolume,setPrevVolume] = useState(volume)
    const [visibleManage,setVisibleManage] = useState(false)
    function getTime(t:number):string {
        let m=~~(t/60), s=~~(t % 60);
        return (m<10?"0"+m:m)+':'+(s<10?"0"+s:s);
    }
    function toMusic(val:number) {
        if(val == 1) (typeof value === 'number' && value < musicInfo.music.length - 1) ? setValue(value + val) : setValue(0)
        if(val == -1) (typeof value === 'number' && value > 0) ? setValue(value + val) : setValue(musicInfo.music.length - 1)  
    }
    const getVolumeRange =(val:number) => val > 0 ? Math.min(3, Math.max(0, Math.ceil(val / 0.25))) : 0
    const setMuted = (val:number) => {
        if(volume > 0) {
            setPrevVolume(volume)
            setVolume(0)
        } else {
            setVolume(prevVolume)   
        }
    }
    return <div className='music-player'>
        <div className="information-main">
        <img src={`data:image/png;base64,${picture}`} alt="Mini album" />
            <div className="information">
                <span className='title'>{title}</span>
                <span className='author'>{author}</span>
            </div>
        </div>    
        <div className="management">
            <div className="management-up">
                <div className="prev" onClick={() => toMusic(-1)}><i className="icon-music-next"></i></div>
                <div className="pause" onClick={() => setPlaying(!playing)}><i className={`icon-music-${!playing ? 'play2' : 'pause'}`}></i></div>
                <div className="next" onClick={() => toMusic(1)}><i className="icon-music-next"></i></div>
            </div>
            <div className="management-down">
                <span>{getTime(time)}</span>
                <div className="music-range">
                    <input type="range" min={0} max={maxTime} step={1} value={time} onChange={(e) => setInputTime(e.target.value)}/>
                    <div className="music-range-progress" style={{width:`${time / maxTime * 100}%`}}></div>
                </div>
                <span>{getTime(maxTime)}</span>
            </div>
        </div>
        <div className={`management-last ${visibleManage ? 'active' : ''}`}>
        <MediaQuery maxWidth={500}>
            <div className="visible-manage" onClick={() => setVisibleManage(!visibleManage)}>{'<<'}</div>
        </MediaQuery>
            <div className="manage-volume">
                <div className="volume-button" onClick={() => setMuted(volume)}>
                    <i className={`icon-music-volume${getVolumeRange(volume)}`}></i>
                </div>
                <div className="volume-range">
                    <div className="volume-icon"><i className="icon-music-volume"></i></div>
                    <input type="range" min={0} max={1} step={0.05} value={volume} onChange={(e)=> setVolume(e.target.value)}/>
                    <div className="volume-range-progress" style={{width:`${volume * 100}%`}}></div>
                </div>
            </div>
            <div className="manage-etc">
                <div className="play-auto" onClick={() => setAuto(!auto)}>
                    <i className={`icon-music-auto${auto ? 1 : 2}`}></i>
                </div>
            </div>
        </div>
    </div>
}