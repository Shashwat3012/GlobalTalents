import React from 'react'
import { Header } from '../Components/Header'
import { Homecontent } from '../Components/Homecontent'
import { Service } from '../Components/Service'
import { Footer } from '../Components/Footer'

export const Home = () => {
  return (
    <>
    <Header />
    <Homecontent />
    <Service />
    <Footer />
    </>
  )
}
