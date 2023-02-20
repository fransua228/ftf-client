import defaultStore from './default'
import registrationStore from './registration'
import newsStore from './news'
import gamesStore from './games'
import galeryStore from './galery'
import musicStore from './music'
import randomizeStore from './randomize'

export default {
    defaultInfo:new defaultStore(),
    registrationInfo:new registrationStore(),
    newsInfo:new newsStore(),
    gamesInfo:new gamesStore(),
    galeryInfo:new galeryStore(),
    musicInfo:new musicStore(),
    randomInfo:new randomizeStore(),
}
