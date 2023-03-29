import React,{ReactElement} from 'react'
import { Link } from 'react-router-dom'

export default function NotFoundRout():ReactElement {
    return <div className="notfound">
        <div className="notfound-block">
            <span className='number-error'>
                <span>4</span>
                <span>0</span>
                <span>4</span>
            </span>
            <span className='error'>
                <span>Page</span>
                <span>Not</span>
                <span>Found</span>
            </span>
            <Link to='/' className='return'>Вернуться</Link>
        </div>
    </div>
}