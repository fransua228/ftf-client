import React,{ReactElement, useContext, useState} from 'react'
import {observer} from 'mobx-react'
import Context from '../../index'

interface IauthIT {
    typeName:string 
    typeRu:string
}

export default observer(function AuthInput({typeName,typeRu}:IauthIT):ReactElement {
    const typeTo = (x:string):string => {
        if(x === 'text') return 'password'
        return 'text'
    }
    const typeHTML =(x:string) => {
        if(x === 'email') return 'email'
        if(x === 'password' || x === 'password2') return 'password'
        return 'text'
    }
    const {registrationInfo} = useContext(Context)
    const [type,setType] = useState(typeHTML(typeName))
    const [value,setValue] = useState('')
    const setData = (str:string) => {
        setValue(str)
        registrationInfo.setLoginData({...registrationInfo.loginData,[typeName]:value})
    }
    const checkValid = (val:string):boolean => 
        (!registrationInfo.testRegs[typeName as keyof typeof registrationInfo.testRegs].test(val) || 
        (typeName === 'password2' && val === registrationInfo.loginData.password))
    return <div className="input-container">
            <input 
                type={type} 
                maxLength={24}
                className={`login-${typeName}  ${!checkValid(value) ? 'valid' : 'invalid'}`} 
                value={value} 
                placeholder={typeRu} 
                onChange={e => setData(e.target.value)}
                onPaste={e => {if(typeName === 'password2') e.preventDefault()}}
            />
            {(typeName === 'password' || typeName === 'password2') && 
                <img src={`./image/eye-${type}.png`} 
                    alt='eye' className='show-input' 
                    onClick={() => setType(typeTo(type))}
                />}
            {checkValid(value) &&
                <div className="error-dialog">
                    <p>{registrationInfo.errorDialogForm[typeName as keyof typeof registrationInfo.errorDialogForm]}</p>
                </div>}
    </div>
})