import React,{useState} from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import {FaReact} from 'react-icons/fa'


export default function Navbar(){

	const [navbar, setNavbar] = useState(false)

	const changeNavbar = () => {
		console.log(window.scrollY)
		if(window.scrollY >= 300){
			setNavbar(true)
		} else {
			setNavbar(false)
		}
		
	}
	window.addEventListener('scroll', changeNavbar)

	const [mobileNavbar,setMobileNavbar] = useState(false)

	function toggle(){
		setMobileNavbar(true)
	}

    return(
		
		
			<div  className='transparent absolute  z-50 text-center '>
				<nav id='' className=' transparent '>

				<ul id={navbar ? 'navbar-active' : 'navbar'} className="w-full h-20 flex fixed items-center uppercase text-white  ">
					<FaReact className='ml-5 hover:text-black text-gray-600' size='2.5em' />
					<Link className='mx-4 hover:text-black text-gray-600 transition delay-150' to="#about" smooth >About</Link>
					
					<li>
					<Link className='mx-4 hover:text-black text-gray-600 transition delay-150' to="#projects" smooth >Projects</Link>
					</li>

					<li>
					<a className='mx-4 hover:text-black text-gray-600 transition delay-150' 
					href='src/resume/michaelGaynorResume.pdf'
					target="_blank" rel="noopener noreferrer">Resume</a>
					</li>

					<li>
					</li>
					<Link className='mx-4 hover:text-black text-gray-600 transition delay-150' to="#contact" smooth >Contact</Link>
					
				</ul>
			</nav>
			</div>
		
		
		
		
        
        
    )
}