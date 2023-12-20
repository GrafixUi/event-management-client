import React from 'react'
import Header from "../../Component/header/Header"
import EventsList from '../../Component/eventslist/EventsList'
import UpComing from '../../Component/upcoming/UpComing'
import Banner from '../../Component/banner/Banner'
import Comingmovies from "../../Component/comingmovies/Comingmovie"
import Faq from '../../Component/faq/Faq'
import Footer from '../../Component/footer/footer'
const Home = () => {
  return (
    <div>
      <Header />
      <EventsList />
      <UpComing />
      <Banner />
      <Comingmovies />
      <Faq />
      <Footer />
    </div>
  )
}

export default Home
