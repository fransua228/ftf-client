import React,{ReactElement} from 'react'
import { NavLink } from 'react-router-dom'
import {IgameSE} from '../../functions/interfaces'

export default function ApplicationsParagraph({name,image,id}:IgameSE) {
    return <>
        <img 
            src={[process.env.REACT_APP_SERVER_URL,
                process.env.REACT_APP_PUBLIC_URL,
                process.env.REACT_APP_APP_URL,
                image].join('/')} 
            alt={`Icon ${name}`} 
        />
        <h2>{name}</h2>
        <NavLink to={`/app/${id}`} className='applications-url'>К приложению</NavLink>
    </>
}