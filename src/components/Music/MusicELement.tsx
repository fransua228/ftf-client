import React,{ReactElement,useEffect} from 'react'
import { Imusic,IstateNumber } from '../../functions/interfaces'
type ImusicElement = Imusic & IstateNumber
export default function MusicElement({title,genre,duration,album,author,year,idx,src,value,setValue}:ImusicElement):ReactElement {
    const renderArr = [title,author,album,genre,year,duration]

    return <div className={`music-element ${value == idx ? 'active' : 'passive'}`}>
        <div className='music-element-activate'><i className={`icon-music-play${value == idx ? 2 : 1}`} onClick={() => setValue(idx)}/></div>
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
}