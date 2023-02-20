import React,{ReactElement, useContext} from 'react'
import RandomizerElement from './RandomizerElement'
import {observer} from 'mobx-react'
import Context from '../../index'

export default observer(function RandomizerCase():ReactElement {
    const {randomInfo} = useContext(Context)
    function toTwoSimbol(index:number) {
        let str = randomInfo.elemArr[index].trim().split(' ')
        if(str.length > 1) return (str[0][0] +  '' + str[1][0]).toUpperCase()
        return str[0][0].toUpperCase() + '' + str[0][str[0].length - 1].toLowerCase()      
    }
    function setRandElem() {
        let arr = []       
        for(let i = 0;i < 80; i++) {
            let index = Math.random() * (randomInfo.elemArr.length),
            name = toTwoSimbol(index),
            color = randomInfo.colors[index]    
            if(i == 74) {
                randomInfo.result.color = color
                randomInfo.result.name = randomInfo.elemArr[index]  
            }
            arr.push(
                <RandomizerElement 
                    name={name}
                    color={color}
                    key={'randomElem' + i}
                />) 
        }
        return arr
    }
    return <div className='random-box'>
        <div className={`wrapper ${randomInfo.checkClick ? 'active' : ''}`}>{setRandElem()}</div>
    </div>
})