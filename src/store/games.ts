import { makeAutoObservable } from "mobx"

export default class DefaultInfo {
    gamesMini = [
        {
            image:'zombie_alive_logo.png',
            name:'Зомби живы(нет)',
            id:'1',
        },
        {
            image:'clicker_logo.png',
            name:'MiniClicker',
            id:'2',
        },
    ]
    appMini = [
        {
            image:'sberfaik_logo.png',
            name:'Сберфейк',
            id:'1',
        },
        {
            image:'timetable_logo.png',
            name:'IРассписание',
            id:'2',
        },
    ]
    constructor() {
        makeAutoObservable(this)
    }
}