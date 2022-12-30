import React,{ReactElement, useContext} from 'react'
import {observer} from 'mobx-react'
import Context from '../../index'
import GaleryImage from './GaleryImage'
export default observer(function Galery():ReactElement {
    const {galeryInfo} = useContext(Context)
    return <div className='galery'>
        {galeryInfo.images.map(image => <GaleryImage name={image} url={[
            process.env.REACT_APP_SERVER_URL,
            process.env.REACT_APP_PUBLIC_URL,
            process.env.REACT_APP_GALERY_URL,
            image].join('/')}
        />)}
    </div>
})