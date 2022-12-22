import React,{ReactElement} from 'react'
import News from '../News/News'
import Games from '../Games/Games'
import Applications from '../Applications/Applications'
import BotValera from '../BotValera/BotValera'
export default function Main():ReactElement {
    return <>
        <News />
        <Games />
        <Applications />
        <BotValera />
    </>
}