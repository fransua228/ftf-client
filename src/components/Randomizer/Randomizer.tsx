import React,{ReactElement} from 'react'
import RandomizerCase from './RandomizerCase'
import RandomizeChange from './RandomizeChange'

export default function Randomizer():ReactElement {
    return <div className='random'>
        <RandomizerCase/>
        <RandomizeChange/>
    </div>
}