import React,{ReactElement} from 'react'
import { NavLink } from 'react-router-dom'
import {IgameSE} from '../../functions/interfaces'

export default function ApplicationsParagraph({name,image,id}:IgameSE) {
    const joinUrl = (urls: Array<string | undefined>) => urls.join('/')
    return <>
        <img 
            src={joinUrl([
                    process.env.REACT_APP_SERVER_URL,
                    process.env.REACT_APP_PUBLIC_URL,
                    process.env.REACT_APP_APP_URL,
                    image]
                )} 
            alt={`Icon ${name}`} 
        />
        <h2>{name}</h2>
        <NavLink to={`/applications/${id}`} className='applications-url'>К приложению</NavLink>
    </>
}