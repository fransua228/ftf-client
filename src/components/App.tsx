import React,{ReactElement} from 'react'
import {Route,Routes,BrowserRouter as Router} from 'react-router-dom'
import '../styles/main.scss'
import Main from './routs/Main'

export default function App():ReactElement {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Main/>}>
            <Route path='galery'></Route>
            <Route path='music'></Route>
            <Route path='etc'></Route>
          </Route>
        </Routes>
      </Router>
    </>
  );
}
