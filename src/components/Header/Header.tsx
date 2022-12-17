import React,{ReactElement,useContext} from 'react'
import {NavLink} from 'react-router-dom'
import {observer} from 'mobx-react'
import Context from '../../index'
import HeaderButton from './HeaderButton'
export default observer(function Header():ReactElement {
    const {defaultInfo} = useContext(Context)
    return <header>
        <NavLink to='/' className='logo'>
            {defaultInfo.authors.map(author => 
                <span className='logo-element' key={'logo_' + author}>
                    <span className='first-letter'>{author[0]}</span>{author.substring(1)}
                </span>)}
        </NavLink>
        <menu>
            {(Object.keys(defaultInfo.urls) as Array<keyof typeof defaultInfo.urls>)
                .map(key => 
                    <NavLink to={"/" + key} className='menu-element' key={'menu_' + key}>
                        {defaultInfo.urls[key]}
                    </NavLink>)}
            <HeaderButton />
        </menu>
        
    </header>
})