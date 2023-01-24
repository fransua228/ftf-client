import React,{ReactElement, useContext} from 'react'
import {observer} from 'mobx-react'
import Context from '../../index'

export default observer(function FooterPolitic():ReactElement {
    const {defaultInfo} = useContext(Context)
    return <button className='footer-politic' onClick={() => defaultInfo.switchPoliticMenu()}>
        <i className="icon-politic"/><span>Пользовательское соглашения</span>    
    </button>
})