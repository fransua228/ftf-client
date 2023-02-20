import React,{ReactElement, useContext, useEffect, useState} from 'react'
import {observer} from 'mobx-react'
import Context from '../../index'
import Background from '../universal/Background'

export default observer(function RandomizerResult():ReactElement {
    const {randomInfo} = useContext(Context)
    return <>
       {randomInfo.resultCheck && 
        <Background classDiv='random-result' onDoubleClick={() => {randomInfo.setResultCheck(false);randomInfo.setCheckCLick(false)}}>
                <div className='random-result' style={{background:randomInfo.result.color}}>
                        {randomInfo.result.name.trim().split(' ').length > 1 ? <>
                        <span>{randomInfo.result.name.trim().split(' ')[0][0].toUpperCase()}</span>
                        <span className='hide'>{randomInfo.result.name.trim().split(' ')[0].slice(1,randomInfo.result.name.length)}</span> 
                        <span className='space'>{randomInfo.result.name.trim().split(' ')[1][0].toUpperCase()}</span> 
                        <span className='hide'>{randomInfo.result.name.trim().split(' ')[1].slice(1,randomInfo.result.name.length)}</span> 
                        </> :
                        <>   
                                <span>{randomInfo.result.name[0].toUpperCase()}</span>
                                <span className='hide'>{randomInfo.result.name.slice(1,randomInfo.result.name.length-1)}</span> 
                                <span>{randomInfo.result.name[randomInfo.result.name.length - 1]}</span>
                        </>  
                        }
                        
                                  
                </div>
            </Background>}
    </>
    
    
    
})