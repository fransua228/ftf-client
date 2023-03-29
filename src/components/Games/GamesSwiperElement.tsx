import React,{ReactElement} from 'react'
import { NavLink } from 'react-router-dom'
import {IgameSE} from '../../functions/interfaces'

export default function GamesParagraph({name,image,id}:IgameSE) {
    return <>
        <img 
            src={[  process.env.REACT_APP_SERVER_URL,
                    process.env.REACT_APP_PUBLIC_URL,
                    process.env.REACT_APP_GAMES_URL,
                    image].join('/')} 
            alt={`Icon ${name}`} 
        />
        <h2>{name}</h2>
        <NavLink to={`/game/${id}`} className='games-url'>К игре</NavLink>
    </>
}