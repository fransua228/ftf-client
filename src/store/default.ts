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
    games = {
        head:'Игры',
        paragraph:'Игры, для некоторых просто слово, для кого-то часть быта,а для нас это целая история и самая настоящая жизнь, которую мы бы хотели вам поведать в наших проектах. От сумбурных диалогов и мыслей из разряда ,а что если, мы дошли до того,что есть сейчас и надеемся что все наши самые неадекватные и глупые идеи реализуются в них, просто наблюдайте) ведьПытаться дать определение игре похоже на попытку описать, что такое юмор. Когда ты проговоришь своё определение, кто-нибудь уже пошутит, что оно не смогло предсказать эту шутку(Джон Ингольд сооснователь компании Inkle)'
    }
    constructor() {
        makeAutoObservable(this)
    }
}