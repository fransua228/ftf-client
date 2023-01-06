import React,{ReactElement} from 'react'
import { Iimage } from '../../types/interfaces'
export default function GaleryImage({name,url}:Iimage):ReactElement {
    return <div className='galery-image'>
        <img src={url} alt={`galery ${name}`} />
         <a className='galery-image-button' href={url}>Открыть</a>
    </div>
}