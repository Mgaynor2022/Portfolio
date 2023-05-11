import React from 'react'
import {FaNode} from 'react-icons/fa'
import {TbHtml} from 'react-icons/tb'
import { FaReact } from 'react-icons/fa'
import {SiTailwindcss} from 'react-icons/si'


export default function Home(){
	return (
		<div id='projects' className='bg-gray-100 pt-40 pb-20'>
			<h1 id='featured-projects' className="text-5xl text-center mb-20 tracking-wider">Featured Projects</h1>

        <div id='project1' className="flex items-center px-12 lg:px-24 mb-24">
				<div className="items-center">
					<h1 className="text-3xl text-center mb-6 tracking-wider">infoMovie App</h1>
					<p className="font-normal text-lg text-center mb-6">
					Developed an application to allow users to extract data from RESTful 
					API regarding movies or Tv-shows that was entered
					into the search function, and allows users to add 
					their favorite movies or tv-shows to a database. </p>

					<div className='icons flex justify-center' >
						<FaReact className='mr-4' size='2.5em' />
						<SiTailwindcss className='mr-4' size='2.5em'/>
						<FaNode size='2.5em'/>
					</div>
					<div className='buttons flex justify-center'>
						<a href='https://github.com/Mgaynor2022/infoMovieApp' 
							target="_blank" 
							rel="noopener noreferrer">
							<button type="button" class="mt-5 text-white bg-black hover:bg-gray-500 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">GitHub </button>
						</a>
						<a href='https://infomovie.onrender.com' 
							target="_blank" 
							rel="noopener noreferrer">
							<button type="button" class="mt-5 text-white bg-black hover:bg-gray-500 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">Website</button>
						</a>
					</div>

				</div>
				<div id='infoMovie-container' className=''>
					<img 
					id='infoMovie'
					src="https://github.com/Mgaynor2022/Portfolio/blob/main/src/images/infoMovie.jpeg?raw=true" 
					className="p-10 w-full"/>					

				</div>
				
				
			</div>

			<div id='project2'className="flex items-center px-12 lg:px-24 mb-24">
				<div className="items-center">
					<img 
					id='adoptApet'
					src="https://github.com/Mgaynor2022/Portfolio/blob/main/src/images/adoptApet.jpeg?raw=true" 
					className="p-10 w-full"/>					
				</div>
				<div className="items-center">
					<h1 className="text-3xl text-center mb-6 tracking-wider">petAdoption App</h1>
					<p className="font-normal text-lg text-center mb-6">
					Launched an application that serves as a centralized location that 
					displays pets information that are available for adoption. All
					from a created database with multiple endpoints that houses the data.</p>

					<div className='icons flex justify-center' >
						<FaReact className='mr-4' size='2.5em' />
						<SiTailwindcss className='mr-4' size='2.5em'/>
						<FaNode size='2.5em'/>
					</div>
					<div className='buttons flex justify-center'>
						<a href='https://github.com/Mgaynor2022/petAdoptionApp' 
							target="_blank" 
							rel="noopener noreferrer">
							<button type="button" class="mt-5 text-white bg-black hover:bg-gray-500 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">GitHub</button>
						</a>
						<a href='' 
							target="_blank" 
							rel="noopener noreferrer">
							<button type="button" class="mt-5 text-white bg-black hover:bg-gray-500 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">Website</button>
						</a>
					</div>

				</div>
			</div>
			
	</div>
    )
}
