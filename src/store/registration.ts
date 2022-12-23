import { makeAutoObservable } from "mobx"

export default class RegistrationInfo {
    registration:boolean = false
    regMenu:boolean = false
    testRegs = {
        login:/^[a-z0-9_-]{3,16}$/i,
        email:/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
        password:/^(?=.*[A-Z])(?=.*[!@#$%^&_\-*])(?=.*[0-9])(?=.*[a-z]).{8,}$/,
        password2:/^(?=.*[A-Z])(?=.*[!@#$%^&_\-*])(?=.*[0-9])(?=.*[a-z]).{8,}$/,
    }
    loginData = {
        email:'',
        login:'',
        password:'',
        password2:'',
    }
    errorDialogForm = {
        email:'Введенные данные не соответсвуют формату электронной почты',
        login:'Длинна логина должна быть от 3 до 16 символов. Допустимы только числа и буквы',
        password:'Пароль должен быть длиннее 8 символов,содержать числа буквы верхнего и нижнего регистра,а так же спец.символы(например _ @ $)',
        password2:'Пароль должен совпадать с предыдущим',
    }
    constructor() {
        makeAutoObservable(this)
    }
    switchRegMenu() {this.regMenu = !this.regMenu}
    setLoginData(obj:any) {this.loginData = obj}
}