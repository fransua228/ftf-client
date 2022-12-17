import { makeAutoObservable } from "mobx"

export default class DefaultInfo {
    gamesMini = [
        {
            image:'http://localhost:5000/public/games/zombie_alive_logo.png',
            name:'Зомби живы(нет)',
            id:'1',
        },
        {
            image:'http://localhost:5000/public/games/zombie_alive_logo.png',
            name:'Зомби живы(нет)',
            id:'1',
        },
        {
            image:'http://localhost:5000/public/games/zombie_alive_logo.png',
            name:'Зомби живы(нет)',
            id:'1',
        },
        {
            image:'http://localhost:5000/public/games/zombie_alive_logo.png',
            name:'Зомби живы(нет)',
            id:'1',
        },
    ]
    constructor() {
        makeAutoObservable(this)
    }
}