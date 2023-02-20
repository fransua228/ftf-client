import React,{ReactElement, useContext} from 'react'
import renderHTML from 'html-react-parser';
import DOMPurify from 'dompurify'
import {observer} from 'mobx-react'
import Context from '../../index'
import Background from '../universal/Background';

export default observer(function Politic():ReactElement {
    const {defaultInfo} = useContext(Context)
    let dirtyHtmlString = defaultInfo.userPolitic[0]
    let clean = DOMPurify.sanitize(dirtyHtmlString, {USE_PROFILES: {html: true}});
    
    return <>
        {defaultInfo.politicVisible && <Background classDiv='politic' onDoubleClick={() => defaultInfo.switchPoliticMenu()}>
            <div className='politic' onDoubleClick={e => e.stopPropagation()}>
                {renderHTML(clean)}
                <div className="close-button-wrapper">
                    <div className="close-button" onClick={() => defaultInfo.switchPoliticMenu()}></div>
                </div>
                
            </div>
        </Background>}
    </>  
})