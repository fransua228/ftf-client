import React,{createContext} from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App'
import reportWebVitals from './reportWebVitals'
import mainStore from './store/main'

const Context = createContext(mainStore)

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <Context.Provider value={mainStore}>
        <App />
    </Context.Provider>
);
export default Context
reportWebVitals();

