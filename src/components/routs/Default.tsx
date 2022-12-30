import React,{ReactElement} from 'react'
import {Outlet} from 'react-router-dom'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import AuthForm from '../Auth/AuthForm'
import Politic from '../Politic/Politic'
export default function Main():ReactElement {
    return <>
        <Header />
        <AuthForm />
        <Politic/>
        <Outlet />
        <Footer />
    </>
}