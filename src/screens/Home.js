import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Card from '../components/card'
import ImpCaraosal from '../components/ImpCaraosal'
import Search from '../components/Search'
const Home = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <ImpCaraosal/>
      </div>
      <div>
        <Search/>
      </div>
      <div className='m-3'>
        <Card/>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default Home;