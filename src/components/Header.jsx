import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import {TfiLinkedin} from 'react-icons/tfi'
import {FaGithub} from 'react-icons/fa'
import {AiOutlineMail} from 'react-icons/ai'
import {FiDownload} from 'react-icons/fi'

export default function Header(){

    return(
        <div className="w-full h-full absolute flex justify-center items-center text-white">
            <div className="flex justify-center items-center text-center px-12">


              <header >
                <h1 className="text-8xl leading-tight mb-2">Michael Gaynor</h1>
                <h1 className="text-2xl md:text-4xl leading-tight "> Software Engineer | Frontend Developer</h1>
                  <h1 id='headerText' className='text-lg mt-5 leading-tight'>Finds creative coding solutions and has a passion 
                  for creating memorable and engaging web experiences.</h1>
                <div className='flex justify-center mt-12'>

                    <a href='https://www.linkedin.com/in/mgaynor228/' rel="noopener noreferrer nofollow" target='_blank'> <TfiLinkedin className='hover:text-gray-600 transition delay-200'size='3.5em'/> </a>
                    <a className='ml-5' href='https://github.com/Mgaynor2022' rel="noopener noreferrer nofollow" target='_blank'> <FaGithub className='hover:text-gray-600 transition delay-200' size='3.5em'/> </a>
                    <Link className='ml-5' to='#contact'smooth> <AiOutlineMail className='hover:text-gray-600 transition delay-200' size='3.5em'/> </Link>
                    <a className='mx-4 ' 
					              href='https://docs.google.com/document/d/15NvFdyR56a26Sb60HiY_pxhKZyrkvot3eps2LSqunA4/edit?usp=sharing'
					              target="_blank" rel="noopener noreferrer nofollow"> <FiDownload className='hover:text-gray-600 transition delay-200' size='3.5em'/>  </a>
                </div>
              </header>
            </div>
          </div>
    )
}