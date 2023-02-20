import { makeAutoObservable } from "mobx"

export default class Randomize {
    checkClick:boolean = false
    resultCheck:boolean = false
    result = {
        name:'',
        color:''
    }
    colors = [
        'blue',
        'blueviolet',
        'brown',
        'burlywood',
        'cadetblue',
        'chocolate',
        'coral',
        'cornflowerblue',
        'crimson',
        'cyan',
        'darkblue',
        'darkcyan',
        'darkgoldenrod',
        'darkgray	',
        'darkgreen',
        'darkkhaki',
        'darkmagenta',
        'darkolivegreen',
        'darkorange',
        'darkorchid',
        'darkred',
        'darksalmon',
        'darkseagreen',
        'darkslateblue',
        'darkslategray',
        'darkturquoise',
        'darkviolet',
        'deeppink',
        'deepskyblue',
        'dimgray',
        'dodgerblue',
        'firebrick',
        'lightyellow',
        'lime',
        'limegreen',
        'linen',
        'magenta',
        'maroon',
        'mediumaquamarine',
        'mediumblue',
        'mediumorchid',
        'mediumpurple',
        'mediumseagreen	',
        'mediumslateblue',
        'mediumspringgreen',
        'mediumturquoise',
        'mediumvioletred',
        'midnightblue',
        'olive',
        'olivedrab',
        'orange',
        'orangered',
        'orchid	',
        'palegoldenrod',
        'palegreen',
        'paleturquoise',
        'palevioletred'
    ]
    elemArr = [
        'Да',
        'Нет'
    ]
    defaultArr = [
        'Да',
        'Нет'
    ]
    constructor() {
        makeAutoObservable(this)
    }
    setElemArr(value:Array<string>) {this.elemArr = value}
    setResultCheck(value:boolean) {this.resultCheck = value}
    setCheckCLick(value:boolean) {this.checkClick = value}
}