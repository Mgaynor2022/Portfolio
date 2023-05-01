import React from 'react'
import {TfiLinkedin} from 'react-icons/tfi'
import {FaGithub} from 'react-icons/fa'
import {FiDownload} from 'react-icons/fi'




export default function Footer() {
    return(
        <div id='' className='w-screen h-full bg-gray-100 p-10'>
            <footer className="flex mb-10 justify-center bg-neutral-900 text-center text-white">
            <div className='bg-teal-500 flex justify-between'>
                <a href='https://www.linkedin.com/in/mgaynor228/' rel="noopener noreferrer nofollow" target='_blank'> <TfiLinkedin color='black' size='2.5em'/> </a>
                <a className='ml-5' href='https://github.com/Mgaynor2022' rel="noopener noreferrer nofollow" target='_blank'> <FaGithub  color='black' size='2.5em'/> </a>
                <a className='mx-4 hover:text-gray-600' 
                    href='src/resume/michaelGaynorResume.pdf'
                    target="_blank" rel="noopener noreferrer nofollow">  <FiDownload color='black' size='2.5em'/></a>
                    
            </div>
            </footer>

            <div className='flex justify-center tracking-wider '>
            <p>Coded by Michael Gaynor using React, along with Love and Coffee.  </p>
               
            </div> 
        </div>
    )
        



}