import React,{ReactElement} from 'react'
import {Irange} from '../../functions/interfaces'

export default function Range({classDiv,width,...props}:Irange):ReactElement {
    return <div className={classDiv + '-range'}>
        <input type="range" {...props}/>
        <div className={classDiv + "-range-progress"} style={{width:`${width * 100}%`}}></div>
    </div>
}