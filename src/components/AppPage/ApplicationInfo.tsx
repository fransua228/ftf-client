import React,{ReactElement} from 'react'
import { IappInfo } from '../../functions/interfaces'
type props = {info:IappInfo;appType:string}
export default function ApplicationInfo({info,appType}:props):ReactElement {
    return <ul className='app-page-info'>
        <li>Платформы: <span>{info.platform.join(' ')}</span></li>
        <li>{appType == 'app' ? 'Специализация' : 'Жанры'}:<span>{' ' + info.genre.join(', ')}</span></li>
        <li>Цена: <span className='ruble'>{info.price}</span></li>
        <li>Автор: <span>{info.author}</span></li>
        <li>Издатель: <span>{info.publisher}</span></li>
        <li>Возрастное ограничение: <span className='audithory'>{info.audithory}</span></li>
        <li>Статус: <span>{info.status}</span></li>
    </ul>
}