export interface Iurls {
    galery:string
    music:string
    etc:string
}

export interface Iimage {
    name:string
    url:string
}

export interface Inews{
    image:string
    head:string
    paragraph:string
    date:string
}

export interface IgameP {
    head:string
    paragraph:string
    author:string
}

export interface IgameSE {
    name:string
    id:string
    image:string
}

export interface Imusic {
    src?:string
    title:string
    author:string
    year?:string
    album?:string
    genre?:string
    duration?:string
    idx?:number
}

export interface IstateNumber {
    value?:number
    setValue?:any
}

export interface ImusicPlayer {
    title:string
    author:string
    audio:any
}