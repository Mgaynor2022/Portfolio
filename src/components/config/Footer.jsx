import React from 'react'
import {TfiLinkedin} from 'react-icons/tfi'
import {FaGithub} from 'react-icons/fa'
import {AiOutlineMail} from 'react-icons/ai'
import {FiDownload} from 'react-icons/fi'



export default function Footer() {
    return(
        <footer className=" bg-cyan-700 w-screen h-full flex mb-10 mt-28 justify-center bg-neutral-900 text-center text-white">
          <div className='flex justify-between bg-cyan-700'>
              <a href='https://www.linkedin.com/in/mgaynor228/' target='_blank'> <TfiLinkedin color='black' size='2.5em'/> </a>
              <a className='ml-5' href='https://github.com/Mgaynor2022' target='_blank'> <FaGithub color='black' size='2.5em'/> </a>
              <a className='ml-5' href=''> <AiOutlineMail color='black' size='2.5em'/> </a>
              <a className='ml-5' href='' target='_blank' download> <FiDownload color='black' size='2.5em'/> </a>
          </div>
        </footer>
    )
        



}