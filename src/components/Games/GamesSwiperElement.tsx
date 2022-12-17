import React,{ReactElement} from 'react'
import { NavLink } from 'react-router-dom'
import {IgameSE} from '../../types/interfaces'

export default function GamesParagraph({name,image,id}:IgameSE) {
    const joinUrl = (urls: Array<string | undefined>) => urls.join('/')
    return <>
        <img 
            src={joinUrl([
                    process.env.REACT_APP_SERVER_URL,
                    process.env.REACT_APP_PUBLIC_URL,
                    process.env.REACT_APP_GAMES_URL,
                    image]
                )} 
            alt={`Icon ${name}`} 
        />
        <h2>{name}</h2>
        <NavLink to={`/games/${id}`} className='games-url'>К игре</NavLink>
    </>
}