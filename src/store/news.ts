import { makeAutoObservable } from "mobx"

export default class RegistrationInfo {
    news = []
    constructor() {
        makeAutoObservable(this)
    }
    
}