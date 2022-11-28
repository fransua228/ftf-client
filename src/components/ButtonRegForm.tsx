import React,{ReactElement,useContext} from 'react'
import {observer} from 'mobx-react'
import Context from '../index'

export default observer(function ButtonRegForm() {
    const {registrationInfo} = useContext(Context)
    return <button onClick={() => registrationInfo.switchRegMenu()}>
        <i className='icon-SpriteLogin'></i>
    </button>
})