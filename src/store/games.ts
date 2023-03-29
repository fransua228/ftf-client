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

    gameFull = {
        id:'1',
        image:'zombie_alive_logo.png',
        name:'Зомби живы(нет)',
        description:'Зомби апокалипсис. Эх заезженная тема, не думал, что он действительно когда нибудь произойдет. Выбравшись из квартиры я направился в ближайший магазин за провизией и... Меня как ни странно чуть не сьели в первые пару минут. Меня спас какой то парень в костюме кролика (если это вправду костюм), но действительно ли это было спасение или меня отложили как банку тушенки напотом?А вот это дорогой игрок придется выяснить тебе,удачи мясо для... еды.',
        information : {
            platform:['Android','IOS'],
            genre:['ACTION','SHOOTER','BEAT-EM UP','ACTION-ADVENTURE','SURVIVAL','OPEN WORLD'],
            price:100,
            author:'FTF',
            publisher:'FTF company',
            audithory:12,
            status:'В ОЖИДАНИИ',
        },
        trailer:{
            video:'oxRKqbyvXdg',
            pictures:[],
        },
    }

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
    appFull = {
        id:'2',
        image:'timetable_logo.png',
        name:'IРассписание',
        description:'',
        information : {
            platform:['Android','IOS'],
            genre:['PROGRAMM'],
            price:0,
            author:'Fransua',
            publisher:'FTF company',
            audithory:6,
            status:'В ОЖИДАНИИ',
        },
        trailer:{
            video:'oxRKqbyvXdg',
            pictures:[],
        },   
    }
    constructor() {
        makeAutoObservable(this)
    }
}