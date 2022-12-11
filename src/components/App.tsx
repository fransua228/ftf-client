import React,{ReactElement} from 'react'
import {Route,Routes,BrowserRouter as Router} from 'react-router-dom'
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import '../styles/main.scss'
import Default from './routs/Default'
import Main from './routs/Main'

export default function App():ReactElement {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Default/>}>
            <Route path='/' element={<Main/>}/>
            <Route path='galery'/>
            <Route path='music'/>
            <Route path='etc'/>
          </Route>
        </Routes>
      </Router>
    </>
  );
}
