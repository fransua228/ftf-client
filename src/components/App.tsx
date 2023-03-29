import React,{ReactElement} from 'react'
import {Route,Routes,BrowserRouter as Router} from 'react-router-dom'
import 'swiper/scss';
import 'swiper/scss/pagination';
import '../styles/main.scss'
import Default from './routs/Default'
import Main from './routs/Main'
import Galery from './routs/Galery';
import Music from './routs/Music';
import AppRout from './routs/Application';
import NotFoundRout from './routs/NotFound';

export default function App():ReactElement {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Default/>}>
            <Route path='/' element={<Main/>}/>
            <Route path='galery' element={<Galery/>}/>
            <Route path='music' element={<Music/>}/>
            <Route path='etc'/>
            <Route path='app/:appId' element={<AppRout typePage='app'/>}/>
            <Route path='game/:appId' element={<AppRout typePage='game'/>}/>
          </Route>
          <Route path='*' element={<NotFoundRout/>}></Route>
        </Routes> 
      </Router>
    </>
  );
}
