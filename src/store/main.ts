import defaultStore from './default'
import registrationStore from './registration'

const mainStore = {
    defaultInfo:new defaultStore(),
    registrationInfo:new registrationStore(),
}
export default mainStore