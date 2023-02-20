import React,{ReactElement} from 'react'
import { Iimage } from '../../functions/interfaces'
export default function GaleryImage({name,url}:Iimage):ReactElement {
    return <div className='galery-image'>
        <img src={url} alt={`galery ${name}`} />
         <a className='galery-image-button' href={url} target='_blank'>Открыть</a>
    </div>
}