import React from 'react'
import {FaNode} from 'react-icons/fa'
import { FaReact } from 'react-icons/fa'
import {SiTailwindcss, SiTypescript} from 'react-icons/si'


export default function Home(){

	return (
		<div id='projects' className='bg-gray-100 pt-40 pb-20'>
			<h1 id='featured-projects' className="text-5xl text-center mb-20 tracking-wider">Featured Projects</h1>

        <div id='project3' className="flex items-center px-12 lg:px-24 mb-24">
				<div className="items-center">
					<h1 className="text-3xl text-center mb-6 tracking-wider">sneakerBlog App</h1>
					<p className="font-normal mr-2 text-lg text-center mb-6">
					Built a sneaker blog web application to create a community for sneaker enthusiasts to share their thoughts
					and engage with other members. Users can leave comments, like or dislike posts and start meaningful conversations. 
					  </p>

					<div className='icons flex justify-center' >
						<SiTypescript className='mr-4' size='2.5em' />
						<FaReact className='mr-4' size='2.5em' />
						<SiTailwindcss className='mr-4' size='2.5em'/>
						<FaNode size='2.5em'/>
					</div>
					<div className='buttons flex justify-center'>
						<a href='https://github.com/Mgaynor2022/sneakerBlog--React-TypeScript' 
							target="_blank" 
							rel="noopener noreferrer">
							<button type="button"
							 class="mt-5 text-white bg-black hover:bg-gray-500 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">GitHub </button>
						</a>
						<a href='https://sneakerblog.onrender.com' 
							target="_blank" 
							rel="noopener noreferrer">
							<button type="button" class="mt-5 text-white bg-black hover:bg-gray-500 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">Live</button>
						</a>
					</div>

				</div>
					<img id='infoMovie' className="p-10 w-3/4 rounded-md"
					src='https://github.com/Mgaynor2022/Portfolio/blob/main/src/images/sneakerBlog.png'
					// src="https://github.com/Mgaynor2022/Portfolio/blob/main/src/images/infoMovie.jpeg?raw=true"
					 />									
				</div>
{/* 
				<div id='project2'className="flex items-center px-12 lg:px-24 mb-24">
				
					<img id='dogBreed' className="p-10 w-3/4 rounded-md "
					src="src/images/fitnessApp.png" 
					/>					
				
				<div className="items-center">
					<h1 className="text-3xl text-center mb-6 tracking-wider">theFitness App</h1>
					<p className="font-normal text-lg text-center mb-6 ml-2">
					The fitness app enables users to create accounts to access a wide range of exercises with demonstrations. Users can
					 filter exercises by muscle groups, like/dislike exercises, save favorites, and learn correct exercise techniques.
					  This comprehensive approach addresses the need for guidance in fitness routines.  </p>

					<div className='icons flex justify-center' >
						<FaReact className='mr-4' size='2.5em' />
						<SiTailwindcss className='mr-4' size='2.5em'/>
						<FaNode size='2.5em'/>
					</div>
					<div className='buttons flex justify-center'>
						<a href='https://github.com/Mgaynor2022/fitnessApp' 
							target="_blank" 
							rel="noopener noreferrer">
							<button type="button" class="mt-5 text-white bg-black hover:bg-gray-500 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">GitHub</button>
						</a>
						<a href='https://fitnessapp-wc7c.onrender.com' 
							target="_blank" 
							rel="noopener noreferrer"
							>
							<button type="button" class="mt-5 text-white bg-black hover:bg-gray-500 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">Live </button>
						</a>
					</div>
				</div>	
			</div> */}

			<div id='project2'className="flex items-center px-12 lg:px-24 mb-24">
				
				
				<div className="items-center">
					<h1 className="text-3xl text-center mb-6 tracking-wider">dogBreed App</h1>
					<p className="font-normal text-lg text-center mb-6 ml-2">
					The DogBreed App enables users to search for and explore dog breeds worldwide,
					 providing information on characteristics, temperament, exercise needs, grooming
					  requirements, and health considerations. It includes a selection of the top 20 
					  dog breeds for browsing.</p>

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
						<a href='https://dogbreedapp.onrender.com' 
							target="_blank" 
							rel="noopener noreferrer"
							>
							<button type="button" class="mt-5 text-white bg-black hover:bg-gray-500 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">Live </button>
						</a>
					</div>
				</div>	
					<img id='dogBreed' className="p-10 w-3/4 rounded-md "
					src="https://github.com/Mgaynor2022/Portfolio/blob/main/src/images/dogBreed.jpeg?raw=true" 
					/>					
			</div>
			
					
			<div id='project1' className="flex items-center px-12 lg:px-24 mb-24">
						<img 
						id='infoMovie' className="p-10 w-3/4 rounded-md"
						src="https://github.com/Mgaynor2022/Portfolio/blob/main/src/images/infoMovie.jpeg?raw=true" 
						/>									
				<div className="items-center">
					<h1 className="text-3xl text-center mb-6 tracking-wider">infoMovie App</h1>
					<p className="font-normal mr-2 text-lg text-center mb-6">
					The infoMovie app provides a centralized platform where users can easily search for information about movies
					 and TV shows. This addresses the problem of scattered and fragmented information across various sources
					  </p>

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
							<button type="button" class="mt-5 text-white bg-black hover:bg-gray-500 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">Live</button>
						</a>
					</div>

				</div>
				</div>
	</div>
    )
}

