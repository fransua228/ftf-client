import React,{ReactElement} from 'react'
import BotValeraParagraph from './BotValeraParagraph'
import BotValeraImage from './BotValeraImage'
export default function BotValera():ReactElement {
    return <div className='bot-valera'>
        <BotValeraParagraph />
        <BotValeraImage />
    </div>
}