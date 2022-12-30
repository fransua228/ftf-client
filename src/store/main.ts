import defaultStore from './default'
import registrationStore from './registration'
import newsStore from './news'
import gamesStore from './games'
import galeryStore from './galery'

const mainStore = {
    defaultInfo:new defaultStore(),
    registrationInfo:new registrationStore(),
    newsInfo:new newsStore(),
    gamesInfo:new gamesStore(),
    galeryInfo:new galeryStore(),
}

export default mainStore