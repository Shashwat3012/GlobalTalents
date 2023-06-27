import React from 'react'
import { Clientdash } from '../Components/Clientdash'
import { Header } from '../Components/Header'
import { Footer } from '../Components/Footer'

export const Clientdashboard = () => {
  return (
    <>
    <Header t1={<i className="fa-regular fa-bell"></i>} t2={<i className="fa-solid fa-user"></i>}/>
    <Clientdash />
    <Footer />
    </>
  )
}
