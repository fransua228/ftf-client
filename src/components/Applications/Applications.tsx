import React,{ReactElement,useContext} from 'react'
import {observer} from 'mobx-react'
import Context from '../../index'
import ApplicationsParagraph from './ApplicationsParagraph'
import ApplicationsSwiper from './ApplicationsSwiper'

export default observer(function Applications() {
    const {defaultInfo} = useContext(Context)
    return <div className="applications wrapper">
        <ApplicationsParagraph head={defaultInfo.quotes[1].head} paragraph={defaultInfo.quotes[1].paragraph} author={defaultInfo.quotes[1].author}/>
        <ApplicationsSwiper/>
    </div>
})