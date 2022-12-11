import React,{ReactElement} from 'react'
import {Ifooter_logo} from '../../types/interfaces'
export default function Header_logo({name,url}:Ifooter_logo) {
    return <a className={'footer-logo ' + name} href={url}>
        <img src={"image/" + name +"-logo.png"} alt={name} />
    </a>
}