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
    quotes = [
        {
            head:'Игры',
            paragraph:'Игры, для некоторых просто слово, для кого-то часть быта,а для нас это целая история и самая настоящая жизнь, которую мы бы хотели вам поведать в наших проектах. От сумбурных диалогов и мыслей из разряда ,а что если, мы дошли до того,что есть сейчас и надеемся что все наши самые неадекватные и глупые идеи реализуются в них, просто наблюдайте) .Ведь пытаться дать определение игре похоже на попытку описать, что такое юмор. Когда ты проговоришь своё определение, кто-нибудь уже пошутит, что оно не смогло предсказать эту шутку',
            author:'FRANSUA',
        },
        {
            head:'Приложения',
            paragraph:'С некоторых пор, пока лидер нашей пати отсутствовал я решил так же попутно выкладывать приложения для своего удобства и делится ими с вами, не переживай босс на сроки это не повлияет, потому что я все равно хз,когда же выйдет хоть одна наша игра, но я надеюсь, что я переосилю свое безделье, лень и прокрастинацию. Разработка будет вестись парралельно для снижения моего уровня стресса, т.к. усидеть на одном проекте у меня так ни разу не получилось (именно поэтому у нас 4 игры и все в разработке) , короче надеюсь , меня не пристрелят.',
            author:'FRANSUA',
        }
    ]
    constructor() {
        makeAutoObservable(this)
    }
}