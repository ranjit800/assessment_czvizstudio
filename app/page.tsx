import React from 'react'
import HeroSection from '@/components/HomePageComponents/HeroSection'
import Navbar from '@/components/WraperComponents/Navbar'
import Footer from '@/components/WraperComponents/Footer'

const Page: React.FC = () => {
  return ( 
    <div className='w-full pt-16 sm:pt-20'>
      <Navbar/>
      <HeroSection/>
      <Footer/>
    </div>
  )
}

export default Page
