import { makeAutoObservable } from "mobx"

export default class DefaultInfo {
    musicNumber = 0
    time = 0
    inputTime = 0
    maxTime = 0
    playing = false
    volume = 1
    auto = true
    miniUrl = [
        process.env.REACT_APP_SERVER_URL,
        process.env.REACT_APP_PUBLIC_URL,
        process.env.REACT_APP_MUSIC_URL
    ].join('/')
    music = [
        {
            src:'Miyagi & Andy Panda, Mordbeats, Miyagi, Andy Panda - Atlant.mp3',
            title:'Atlant',
            author:'Miyagi & Andy Panda',
            year:'2020',
            album:'Yamakasi',
            genre:'Dance Pop',
            duration:'3:07',
            picture:''
        },
        {
            src:'Miyagi & Andy Panda, Mordbeats, Miyagi, Andy Panda - Utopia.mp3',
            title:'Utopia',
            author:'Miyagi & Andy Panda',
            year:'2020',
            album:'Yamakasi',
            genre:'Dance Pop',
            duration:'3:29',
            picture:''
        },
        {
            src:'Miyagi & Andy Panda, Mordbeats, Miyagi, Andy Panda - Психопатия.mp3',
            title:'Психопатия',
            author:'Miyagi & Andy Panda',
            year:'2020',
            album:'Yamakasi',
            genre:'Dance Pop',
            duration:'3:28',
            picture:''
        }
    ]
    defaultImage ='iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAABVklEQVRIic1WMY7CMBB0IkSHeEQ6qvsIUNG5Aj5AeT+4T4TKXarLfeBeQEfpv1CsNFqt7c06yqEbpYiz9s5MvOukuX18OQOO97148n3+sSxcGfNeTgcR6ofRwlQkoNRpXgAhYirR5AmO972SOsvUD2OWQxIowmOMuO+6LqXJWmn4JgvhyMjTxRgxzE4QViY2OVWaRrmzFG1JPjTy9Vx+GiVcTgde062SnTQqJkpRztGmYQX6G8uidar82awwUedgBiaqiANng1M7XKD5fTwts/thDD5g6IM3rjK9Isq+WW9xBR+4IQXWPdist8pwAYLZ+B8EovtdzXneXHef9pLglJb5wYeKPrDXPsff70FVUduB1nlLFS1uAvId9mBBDp7dvfW45ibmVSSt5fKd+B4QB02t5cB5Ls5B2WgUrrKSFV4kAA2s0BPl5zcrfILAMSsiHYCQ/m14ATXvt/PlMFCzAAAAAElFTkSuQmCC'

    constructor() {
        makeAutoObservable(this)
    }
    setMusicNumber(value:number) {this.musicNumber = value}
    setTime(value:number) {this.time = value}
    setInputTime(value:number) {this.inputTime = value}
    setMaxTime(value:number) {this.maxTime = value}
    setPlaying(value:boolean) {this.playing = value}
    setVolume(value:number){this.volume = value}
    setAuto(value:boolean) {this.auto = value}
}