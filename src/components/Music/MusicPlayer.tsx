import React,{ReactElement} from 'react'
import { ImusicPlayer,IstateNumber } from '../../types/interfaces'
type ImusicP = ImusicPlayer & IstateNumber
export default function MusicPlayer({audio,title,author,value,setValue}:ImusicP):ReactElement {
    return <div className='music-player'>
        
    </div>
}