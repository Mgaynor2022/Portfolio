import React from 'react'
import {TfiLinkedin} from 'react-icons/tfi'
import {FaGithub} from 'react-icons/fa'
import {FiDownload} from 'react-icons/fi'




export default function Footer() {
    return(
        <div id='' className='w-screen h-full bg-gray-100 p-10'>
            <footer className="flex mb-10 justify-center text-center text-white">
            <div className=' flex justify-between'>
                <a href='https://www.linkedin.com/in/mgaynor228/' rel="noopener noreferrer nofollow" target='_blank'> <TfiLinkedin className='hover:text-gray-600 transition delay-200' color='black' size='2.5em'/> </a>
                <a className='ml-5' href='https://github.com/Mgaynor2022' rel="noopener noreferrer nofollow" target='_blank'> <FaGithub className='hover:text-gray-600 transition delay-200'  color='black' size='2.5em'/> </a>
                <a className='mx-4' 
                    href='https://github.com/Mgaynor2022/Portfolio/blob/main/src/resume/Michael_Gaynor_Resume_2023.pdf'
                    target="_blank" rel="noopener noreferrer nofollow">  <FiDownload className='hover:text-gray-600 transition delay-200' color='black' size='2.5em'/></a>
                    
            </div>
            </footer>

            <div className='flex justify-center tracking-wider '>
            <p>Coded by Michael Gaynor using React, along with Love and Coffee.  </p>
               
            </div> 
        </div>
    )
        



}