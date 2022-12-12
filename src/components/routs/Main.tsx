import React,{ReactElement} from 'react'
import News from '../News/News'
import Games from '../Games/Games'
export default function Main():ReactElement {
    return <>
        <News />
        <Games />
    </>
}