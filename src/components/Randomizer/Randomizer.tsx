import React,{ReactElement} from 'react'
import RandomizerCase from './RandomizerCase'
import RandomizeChange from './RandomizeChange'
import RandomizerResult from './RandomizerResult'

export default function Randomizer():ReactElement {
    return <div className='random'>
        <h2>FTF Рулетка</h2>
        <RandomizerResult/>
        <RandomizerCase/>
        <RandomizeChange/>
    </div>
}