import React,{ReactElement} from 'react'
import { Itime } from '../../functions/interfaces'
export default function MusicTime({time}:Itime):ReactElement {
    function getTime(t:number):string {
        let m=~~(t/60), s=~~(t % 60);
        return (m<10?"0"+m:m)+':'+(s<10?"0"+s:s);
    }
    return <span>{getTime(time)}</span>
}