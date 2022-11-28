import { makeAutoObservable } from "mobx"

export default class RegistrationInfo {
    registration:boolean = false
    regMenu:boolean = false
    constructor() {
        makeAutoObservable(this)
    }
    switchRegMenu() {this.regMenu = !this.regMenu}
}