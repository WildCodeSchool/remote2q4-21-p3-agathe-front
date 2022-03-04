import React from 'react'
import Navbar from '../components/home/Navbar'
import Footer from '../components/home/Footer'
import TextForm from '../components/admin/TextForm'

const TextAdmin = () => {
  return (
    <div>
        <Navbar />
        <div className='LoginContainer'>
            <TextForm/>
        </div>
        <Footer />
    </div>
  )
}

export default TextAdmin