import { makeAutoObservable } from "mobx"

export default class GamesInfo {
    images = [
        'image1.jpg',
        'image1.jpg',
        'image1.jpg',
        'image1.jpg',
        'image1.jpg',
        'image1.jpg',
        'image1.jpg',
        'image1.jpg',
        'image1.jpg',
        'image1.jpg',
        'image1.jpg',
        'image1.jpg',
        'image1.jpg',
        'image1.jpg',
        'image1.jpg',
        'image1.jpg',
        'image1.jpg',
        'image1.jpg',
    ]
    constructor() {
        makeAutoObservable(this)
    }
}