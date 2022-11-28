import React,{ReactElement,useContext} from 'react'
import FooterLogo from './FooterLogo'
import {observer} from 'mobx-react'
import Context from '../index'

export default observer(function Header() {
    const {defaultInfo} = useContext(Context)
    return <footer>
        <span>Другие способы связать с нами:</span>
        <menu>
            {(Object.keys(defaultInfo.groups) as Array<keyof typeof defaultInfo.groups>)
                .map(key => 
                    <FooterLogo name={key} key={'menu_' + key} url={defaultInfo.groups[key]} />)}
        </menu>
    </footer>
})