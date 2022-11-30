import defaultStore from './default'
import registrationStore from './registration'
import newsStore from './news'

const mainStore = {
    defaultInfo:new defaultStore(),
    registrationInfo:new registrationStore(),
    newsInf:new newsStore(),
}
export default mainStore