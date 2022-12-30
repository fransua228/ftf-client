import React,{ReactElement} from 'react'
import {Iimage} from '../../types/interfaces'
export default function Header_logo({name,url}:Iimage) {
    return <a className={'footer-logo ' + name} href={url}>
        <img src={"image/" + name +"-logo.png"} alt={name} />
    </a>
}