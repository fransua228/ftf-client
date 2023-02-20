import React,{ReactElement} from 'react'
import { Irandomizer } from '../../functions/interfaces'
export default function RandomizerElement({name,color}:Irandomizer):ReactElement {
    return <div className='rand-elem' style={{background:color}}>{name}</div>
}