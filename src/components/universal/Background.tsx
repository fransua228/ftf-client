import React,{ReactElement} from 'react'
import { Iback } from '../../functions/interfaces'

export default function Background({classDiv,children,...props}:Iback):ReactElement {
    return <div className={`${classDiv}-back`} {...props}>
        {children}
    </div>
}