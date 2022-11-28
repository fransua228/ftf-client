import { makeAutoObservable } from "mobx"
import {Iurls} from '../types/interfaces'

export default class DefaultInfo {
    urls : Iurls = {
        galery:"Галерея",
        music:'Музыка',
        etc:'Прочее',
    }
    authors : Array<string> = ['Fransua','TheDarkKing','Fredere1',]
    groups = {
        steam:'https://steamcommunity.com/groups/FTF-plus',
        discord:'https://discord.com',
    }
    constructor() {
        makeAutoObservable(this)
    }
}