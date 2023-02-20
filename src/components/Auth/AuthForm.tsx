import React,{ReactElement, useContext,useEffect,useState} from 'react'
import {observer} from 'mobx-react'
import Context from '../../index'
import AuthInput from './AuthInput'
import Background from '../universal/Background'

export default observer(function ButtonRegForm():ReactElement {
    const {registrationInfo} = useContext(Context)
    const [logForm,switchlogForm] = useState(true)

    function LoginForm() {
        return <div className="form login" onDoubleClick={e => e.stopPropagation()}>
            <div className="close-button" onClick={() => registrationInfo.switchRegMenu()}></div>
            <span className="login-head" onClick={() => switchlogForm(!logForm)}>{logForm ? 'Вход' : 'Регистрация'}</span>
            <AuthInput typeName='email' typeRu='Почта'/>
            {!logForm && <AuthInput typeName='login' typeRu='Никнейм'/>}
            <AuthInput typeName='password' typeRu='Пароль'/>
            {!logForm && <AuthInput typeName='password2' typeRu='Подтвердите Пароль'/>}
            <button>{logForm ? 'Войти' : 'Зарегистрироваться'}</button>
        </div>
    }
    
    function ProfileForm() {
        return <div className="form profile" onDoubleClick={e => e.stopPropagation()}>
    
        </div>
    }
    return <>
        {registrationInfo.regMenu && 
            (registrationInfo.registration ? 
                <Background classDiv='form' onDoubleClick={() => registrationInfo.switchRegMenu()}>
                    <ProfileForm/>
                </Background> : 
                <Background classDiv='form' onDoubleClick={() => registrationInfo.switchRegMenu()}>
                    <LoginForm/>
                </Background>
            )}
    </>    
})


