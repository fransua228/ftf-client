
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
    music:any
    idx?:number
}

export interface IstatePlay {
    playing?:boolean
    setPlaying?:any
}

export interface IbuttonIcon {
    classDiv:string
    classI:string  
    onClick?:any
    valueClass?:string | number
}

export interface Irange {
    classDiv:string
    width:number
    min:number
    max:number
    step:number
    value:number
    onChange:any
}

export interface Itime {
    time:number
}