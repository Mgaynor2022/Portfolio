import React from 'react'
import {Link as Scroll} from 'react-scroll' 
import {FaReact} from 'react-icons/fa'

export default function Navbar(){

    return(
		<div className='bg-transparent pl-10 pt-5 absolute text-white text-center'>
            <nav id='Navbar' className='flex justify-between'>
				<FaReact size='2.5em'/>
				
			<ul className="flex justify-center uppercase text-white">
				<li>
				<Scroll className="pl-10 text-gray-600" 
                to="about" spy={true} smooth={true} offset={50} duration={500}>About</Scroll>
					
				</li>
				<li>
					<a href="/Project" className="mx-4 hover:text-gray-600">Projects</a>
				</li>
				<li>
					<a href="#" className="mx-4 hover:text-gray-600">Resume</a>
				</li>
				<li>
					<a href="#" className="mx-4 hover:text-gray-600">Contact</a>
				</li>
			</ul>
		</nav>
		</div>
        
        
    )
}