import React,{ReactElement} from 'react'
import { IbuttonIcon } from '../../functions/interfaces'
export default function IconButton({classDiv,classI,valueClass = '',...props}:IbuttonIcon):ReactElement {
    return <div className={classDiv} {...props}><i className={classI + valueClass}/></div>
}