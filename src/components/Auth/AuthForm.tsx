import React,{ReactElement, useContext,useState} from 'react'
import {observer} from 'mobx-react'
import Context from '../../index'
import AuthInput from './AuthInput'

export default observer(function ButtonRegForm():ReactElement {
    const {registrationInfo} = useContext(Context)
    const [logForm,switchlogForm] = useState(true)
    function LoginForm() {
        return <div className="form login" onDoubleClick={e => e.stopPropagation()}>
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

    function Background(props:React.ComponentProps<'div'>):ReactElement {
        return <div className='form-back' onDoubleClick={() => registrationInfo.switchRegMenu()}>
            {props.children}
        </div>
    }
    return <>
        {registrationInfo.regMenu && (registrationInfo.registration ? <Background><ProfileForm/></Background> : <Background><LoginForm/></Background>)}
    </>    
})


