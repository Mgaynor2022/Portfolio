import React from 'react'
import {TfiLinkedin} from 'react-icons/tfi'
import {FaGithub} from 'react-icons/fa'
import {AiOutlineMail} from 'react-icons/ai'
import {FiDownload} from 'react-icons/fi'
import About from '../../About'

export default function Header(){

    return(
        <div className="w-full h-full absolute flex justify-center items-center text-white">
            <div className="flex justify-center items-center text-center px-12">

              <header>
                <h1 className="text-3xl md:text-6xl leading-tight mb-2">Michael Gaynor</h1>
                <h1 className="text-2xl md:text-4xl leading-tight "> Software Engineer | Frontend Developer</h1>
                <div className='flex justify-center mt-5 '>
                    <a href='https://www.linkedin.com/in/mgaynor228/' target='_blank'> <TfiLinkedin size='2.5em'/> </a>
                    <a className='ml-5' href='https://github.com/Mgaynor2022' target='_blank'> <FaGithub size='2.5em'/> </a>
                    <a className='ml-5' href=''> <AiOutlineMail size='2.5em'/> </a>
                    <a className='ml-5' href='' target='_blank' download> <FiDownload size='2.5em'/> </a>
                </div>
              </header>

            </div>
          </div>
    )
}