import React from 'react'
import Layout from '../component/Layout/Layout'
import { Link } from  'react-router-dom'
import Banner from '../images/banner.jpeg'
import '../styles/HomeStyle.css'
const Home = () => {
  return (
    <Layout>
   <div className='Home' 
   style={{backgroundImage:`url(${Banner})`}}>
    <div className='headerContainer'>
      <h1>Food Website</h1>
      <p>Best food in india</p>
      <Link to='/Menu'>
        <button> ORDER NOW</button>
      </Link>
    </div>


   </div>

    </Layout>
      
    
  )
}

export default Home
