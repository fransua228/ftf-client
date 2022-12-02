import defaultStore from './default'
import registrationStore from './registration'
import newsStore from './news'

const mainStore = {
    defaultInfo:new defaultStore(),
    registrationInfo:new registrationStore(),
    newsInfo:new newsStore(),
}
export default mainStore