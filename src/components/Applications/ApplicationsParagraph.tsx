import React,{ReactElement} from 'react'
import {IgameP} from '../../types/interfaces'

export default function ApplicationsParagraph({head,paragraph,author}:IgameP) {
    return <div className="applications-paragraph">
        <h1>{head}</h1>
        <p>{paragraph}</p>
        <span className="author">{author}</span>
    </div>
}