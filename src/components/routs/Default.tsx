import React,{ReactElement} from 'react'
import {Outlet} from 'react-router-dom'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import RegAndProfileForm from '../RegAndLogin/RegAndProfileForm'
export default function Main():ReactElement {
    return <>
        <Header />
        <RegAndProfileForm />
        <Outlet />
        <Footer />
    </>
}