import React,{useState} from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import { RxHamburgerMenu } from 'react-icons/rx'


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
	const [mobileNavBg, setMobileNavBg] = useState(false)

	const toggle = () => {
		setMobileNavbar(!mobileNavbar)
		console.log(mobileNavbar)
	}

	const mobileBackground = () => {
		if(window.scrollY >= 300){
			setMobileNavBg(true)
		} else {
			setMobileNavBg(false)
		}
	}
	window.addEventListener('scroll', mobileBackground)

    return(	

		<div id=''className='transparent absolute z-50'>
			<nav id="mobile-nav" className={mobileNavbar ? "bg-gray-100 opacity-75 w-screen fixed " : "hidden fixed w-screen transparent"}>
				<div className={mobileNavBg ? "flex flex-wrap justify-between items-center p-4 bg-gray-100 opacity-75 w-screen": "flex flex-wrap justify-between items-center p-4 w-screen"}>
					<h1> michaelPortfolio()</h1>
					<RxHamburgerMenu className='mr-2 text-gray-600' onClick={toggle} size='2em' cursor='pointer'/>

    <div className={mobileNavbar ? "flex w-screen z-50 bg-gray-100" : "hidden"} id="navbar-hamburger">
      <ul className="flex flex-col rounded-lg">
        <li className='mt-5 hover:text-black text-gray-800 transition delay-150 hover:underline hover:decoration-4 hover:underline-offset-8'>
          <Link onClick={toggle} to="#about" smooth aria-current="page">About</Link>
        </li>
        <li className='mt-5 mb-5 hover:text-black text-gray-800 transition delay-150 hover:underline hover:decoration-4 hover:underline-offset-8'>
          <Link onClick={toggle} to="#projects" smooth >Projects</Link>
        </li>
        <li>
		<a onClick={toggle} className=' hover:text-black text-gray-800 transition delay-150 hover:underline hover:decoration-4 hover:underline-offset-8' 
			href='src/resume/michaelGaynorResume.pdf'
			target="_blank" rel="noopener noreferrer">Resume</a>
        </li>
        <li className='mt-5 hover:text-black text-gray-800 transition delay-150 hover:underline hover:decoration-4 hover:underline-offset-8'>
          <Link onClick={toggle} to="#contact" smooth >Contact</Link>
        </li>
      </ul>
    </div>

  </div>					
</nav>

	<nav id='bigNavbar' className='transparent '>
		<ul id={navbar ? 'navbar-active' : 'navbar'} className="w-full h-20 flex fixed items-center text-white ">
			<h1 className='text-black ml-5'> michaelPortfolio() </h1>
			<Link className=' uppercase mx-4 hover:text-black text-gray-600 transition delay-150 hover:underline hover:decoration-4 hover:underline-offset-8' to="#about" smooth >About</Link>
				<li>
					<Link className=' uppercase mx-4 hover:text-black text-gray-600 transition delay-150 hover:underline hover:decoration-4 hover:underline-offset-8' to="#projects" smooth >Projects</Link>
				</li>
				<li>
					<a className=' uppercase mx-4 hover:text-black text-gray-600 transition delay-150 hover:underline hover:decoration-4 hover:underline-offset-8' 
						href='src/resume/michaelGaynorResume.pdf'
						target="_blank" rel="noopener noreferrer">Resume
					</a>
					</li>
						<li>
						</li>
						<Link className=' uppercase mx-4 hover:text-black text-gray-600 transition delay-150 hover:underline hover:decoration-4 hover:underline-offset-8' to="#contact" smooth >Contact</Link>
					</ul>
				</nav>
			</div>
		
		
		
		
        
        
    )
}