import React from 'react'
import { FaGithub,FaLinkedin } from "react-icons/fa";


import { MdEmail } from "react-icons/md";
const Footer = () => {
  return (
    <div className='footer'>
      <div className='main-foot'>
        <div className='about-foot'>
            <h1>Abhishek saxena</h1>
            <p className='parachat'>A Frontend focused Web Developer building the Frontend of Websites  and Web Applications <br /> that leads to the success of the overall product.</p>
        </div>
        <div className='social-foot'>
            <h1>Social</h1>
            <div className="social-icons">

            <div className='icons'> <a href="https://www.linkedin.com/in/abhishek-saxena-b95000202/"><FaLinkedin color='black' /></a> </div>
            <div className='icons'> <a href="https://github.com/abhishek2092001"><FaGithub color='black' /></a> </div>
            <div className='icons'> <a href="mailto:abhisheksaxenasep@gmail.com"><MdEmail color='black' /></a> </div>
            </div>
        </div>
      </div>
      <div className='copyright'>
        Copyright2024. Made by Abhishek saxena
      </div>
    </div>
  )
}

export default Footer
