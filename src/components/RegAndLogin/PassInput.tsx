import React,{ReactElement} from 'react'

export default function PassInput() {
    return <>
        <div className="input-container">
            <input type="password" className='login-password' placeholder='Пароль'/>
            <div className="show-input"></div>
        </div>
    </>
    
}