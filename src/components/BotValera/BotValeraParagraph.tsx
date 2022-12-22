import React,{ReactElement, useContext} from 'react'
import {observer} from 'mobx-react'
import Context from '../../index'

export default observer(function BotValeraParagraph():ReactElement {
    const {defaultInfo} = useContext(Context)
    return <div className='bot-valera-paragraph'>
        <h2>Нечем заняться?</h2>
        <p>Послушай робота Валеру! Робот Валера фигни не скажет.</p>
        <button onClick={() => defaultInfo.switchBotVisible()} className='activate-bot'>{!defaultInfo.botVisible ? 'Вызвать' : 'Отозвать'} бота Валеру</button>
    </div>
})