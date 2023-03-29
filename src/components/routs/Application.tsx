import React,{ReactElement, useContext, useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import {observer} from 'mobx-react'
import Context from '../../index'
import ApplicationParagraph from '../AppPage/ApplicationParagraph'
import ApplicationInfo from '../AppPage/ApplicationInfo'
type Ipage = {typePage:string}
export default observer(function AppRout({typePage}:Ipage):ReactElement { 
    const {gamesInfo} = useContext(Context)
    const [pageInfo,setPageInfo] = useState( {
        id:'',
        image:'',
        name:'',
        description:'',
        information : {
            platform:[''],
            genre:[''],
            price:0,
            author:'',
            publisher:'',
            audithory:0,
            status:'',
        },
        trailer:{
            video:'',
            pictures:[],
        },
    })
    const {appId} = useParams()
    useEffect(()=>{
        if(typePage == 'app') {
            if(gamesInfo.appFull.id === appId) setPageInfo(gamesInfo.appFull)
        }
        if(typePage == 'game') {
            if(gamesInfo.gameFull.id === appId) setPageInfo(gamesInfo.gameFull)
        }
    },[appId])

    return <div className='app-page'>
        <ApplicationParagraph 
            appType={typePage} 
            name={pageInfo.name} 
            description={pageInfo.description} 
            image={pageInfo.image}
        />
        <ApplicationInfo info={pageInfo.information} appType={typePage}/>
    </div>
})