import React,{ReactElement} from 'react'
import {IgameP} from '../../functions/interfaces'

export default function GamesParagraph({head,paragraph,author}:IgameP) {
    return <div className="games-paragraph">
        <h1>{head}</h1>
        <p>{paragraph}</p>
        <span className="author">{author}</span>
    </div>
}