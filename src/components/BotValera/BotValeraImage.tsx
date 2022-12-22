import React,{ReactElement,useContext, useState} from 'react'
import {observer} from 'mobx-react'
import Context from '../../index'
import { arrayBuffer } from 'stream/consumers'

export default observer(function BotValeraImage():ReactElement {   
    const {defaultInfo} = useContext(Context)
    const randomDialog = ():string => defaultInfo.botQuotes[Math.floor(Math.random() * defaultInfo.botQuotes.length)]
    const [dialog,setDialog] = useState(randomDialog()) 
    return <div className='bot-valera-image'>
        <div className="grass"></div>
        <div className={"valera" + (defaultInfo.botVisible ? ' active' : '')}></div>
        <div className={"dialog" + (defaultInfo.botVisible ? ' active' : '')} onClick={() => {setDialog(randomDialog())}}>{dialog}</div>
        <div className="stone"></div>
    </div>
})