import React,{ReactElement, useContext} from 'react'
import {observer} from 'mobx-react'
import Context from '../../index'
import { IappPage } from '../../functions/interfaces'
export default observer(function AppPageParagraph({appType,name,description,image}:IappPage):ReactElement {
    const {gamesInfo} = useContext(Context)

    const getImageType = (type:string):string | undefined => {
        if(type === 'app') return process.env.REACT_APP_APP_URL
        return process.env.REACT_APP_GAMES_URL
    }

    return <div className='app-page-paragraph'>
        <p>
            <img src={[process.env.REACT_APP_SERVER_URL,
                    process.env.REACT_APP_PUBLIC_URL,
                    getImageType(appType),
                    image].join('/')} alt="icon" />
            <span>{name}</span><br />{description}
        </p>
    </div>
})