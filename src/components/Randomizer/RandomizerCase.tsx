import React,{ReactElement} from 'react'
import RandomizerElement from './RandomizerElement'

export default function RandomizerCase():ReactElement {
    function setRandElem() {
        let arr = []
        for(let i = 0;i < 100; i++) arr.push(<RandomizerElement/>) 
        return arr
    }
    return <div className='random-box'>
        <div className="wrapper">{setRandElem()}</div>
    </div>
}