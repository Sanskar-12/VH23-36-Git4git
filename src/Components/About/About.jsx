<<<<<<< HEAD
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/navbar";

function About() {
  return (
    <div>
      <Footer/>
      <Navbar/>
    </div>
  )
}

export default About
=======
import React from 'react'
import Testimonial from '../Testimonial/testimonial'
const About = () => {
  return (
    <>
    <div className='font-mullish flex flex-col justify-between items-center my-12 text-gray-800'>
        <h2 className='text-4xl'>The Team Behind Git4Git</h2>
<p className='line-clamp-2 flex flex-col'><span>There are many variation of passages of Lorem Ipsum available but the</span>
<span className='px-8'>majority have suffered alteration in some injected humour</span></p>  

<Testimonial />  





   

    </div>
    </>
  )
}

export default About
>>>>>>> 6df1bf2c4dd7f4a1724634a19ce2fca344ded7b5
