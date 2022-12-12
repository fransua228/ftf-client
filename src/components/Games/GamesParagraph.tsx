import React,{ReactElement} from 'react'
import {IgameP} from '../../types/interfaces'

export default function GamesParagraph({head,paragraph}:IgameP) {
    return <div className="games-paragraph">
        <h1>{head}</h1>
        <p>{paragraph}</p>
    </div>
}