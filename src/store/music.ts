import { makeAutoObservable } from "mobx"

export default class DefaultInfo {
    music = [
        {
            src:'Miyagi & Andy Panda, Mordbeats, Miyagi, Andy Panda - Atlant.mp3',
            title:'Atlant',
            author:'Miyagi & Andy Panda',
            year:'2020',
            album:'Yamakasi',
            genre:'Dance Pop',
            duration:'3:07'
        },
        {
            src:'Miyagi & Andy Panda, Mordbeats, Miyagi, Andy Panda - Utopia.mp3',
            title:'Utopia',
            author:'Miyagi & Andy Panda',
            year:'2020',
            album:'Yamakasi',
            genre:'Dance Pop',
            duration:'3:29'
        },
        {
            src:'Miyagi & Andy Panda, Mordbeats, Miyagi, Andy Panda - Психопатия.mp3',
            title:'Психопатия',
            author:'Miyagi & Andy Panda',
            year:'2020',
            album:'Yamakasi',
            genre:'Dance Pop',
            duration:'3:28'
        }
    ]
    constructor() {
        makeAutoObservable(this)
    }
}