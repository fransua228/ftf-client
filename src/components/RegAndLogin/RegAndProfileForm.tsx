import React,{ReactElement, useContext,useState} from 'react'
import {observer} from 'mobx-react'
import Context from '../../index'

export default observer(function ButtonRegForm() {
    const {registrationInfo} = useContext(Context)
    const [logForm,switchlogForm] = useState(true)
    function LoginForm() {
        return <div className="form login" onClick={e => e.stopPropagation()}>
            <span className="login-head" onClick={() => switchlogForm(!logForm)}>{logForm ? 'Вход' : 'Регистрация'}</span>
            <input type="email" className='login-mail' placeholder='Почта'/>
            {!logForm && <input type="text" className='login-name' placeholder='Логин'/>}
            <input type="password" className='login-password' placeholder='Пароль'/>
            {!logForm && <input type="password" className='login-password' placeholder='Пароль'/>}
            <button>{logForm ? 'Войти' : 'Зарегистрироваться'}</button>
        </div>
    }
    
    function ProfileForm() {
        return <div className="form profile" onClick={e => e.stopPropagation()}>
    
        </div>
    }

    function Background(props:React.ComponentProps<'div'>):ReactElement {
        return <div className='form-back' onClick={() => registrationInfo.switchRegMenu()}>
            {props.children}
        </div>
    }
    return <>
        {registrationInfo.regMenu && (registrationInfo.registration ? <Background><ProfileForm/></Background> : <Background><LoginForm/></Background>)}
    </>    
})


