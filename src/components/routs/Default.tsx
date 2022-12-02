import React,{ReactElement} from 'react'
import {Outlet} from 'react-router-dom'
import Header from '../Header'
import Footer from '../Footer'
import RegAndProfileForm from '../RegAndProfileForm'
export default function Main():ReactElement {
    return <>
        <Header />
        <RegAndProfileForm />
        <Outlet />
        <Footer />
    </>
}