import React from 'react'
import Header from '../components/HEADER/header'
import Search from '../components/SEARCH/search'
import Main from '../components/MAIN/main'
import Footer from '../components/FOOTER/footer'
import data from '../database/data'

const Home = () => {
  return (
    <>
        <Header/>
        <Search/>
        <Main data={data}/>
        <Footer/>
    </>
  )
}

export default Home