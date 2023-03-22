import React from 'react'
import Footer from './Footer'



export default function Home(){

   return(
    <div class="mx-auto max-w-6xl bg-white py-20 px-12 lg:px-24 shadow-xl mb-24">

			<div class="mb-12">
				{/* <h1 class="text-3xl lg:text-4xl text-center mb-6 tracking-wider font-semibold">About Me</h1> */}
				<div class="flex justify-center items-center p-2">
					<img src= "https://raw.githubusercontent.com/Mgaynor2022/Mgaynor2022.github.io/main/images/me.jpeg" class=" opacity-75 w-2/5"/>					
				</div>
				<p class="font-normal text-lg tracking-wide m-6 leading-relaxed mx-auto max-w-2xl text-center">
					Hello, my name is Michael Gaynor i'm a Air Force Veteran, College Graduate and now i'm a Software Developer.  <br class="hidden md:block" />
					Find out how I discovered this new passion in my life !</p>

				<p class="font-normal text-lg tracking-wide leading-loose mx-auto max-w-2xl text-center">
					Have you ever felt that you were filled with creativity but didn’t know how to express that to the world?
					I felt that until I became a Full Stack Web Developer. The enjoyment I feel seeing my long hours of coding 
					and research come to life for the world to engage with is what I appreciate the most about Web Development. 
					I could be coding a simple text-based RPG game to a fully functioning web application, it gives me the same 
					fulfillment. My natural eagerness to learn new things, such as different software programs or techniques to 
					obtain the optimal solution, helps me overcome the problems I face as a Software Developer.</p>
			</div>
            
				<h1 class="text-3xl lg:text-4xl text-center mb-6 tracking-wider pt-10 font-semibold">Projects</h1>
			<div class="flex justify-between">
				<div class="w-1/2 m-5">
					<a href="https://github.com/Mgaynor2022/infoMovieApp" class="block mb-8 bg-black hover:bg-gray-700" target="_blank" rel="noopener noreferrer">
						<img src="https://raw.githubusercontent.com/Mgaynor2022/Mgaynor2022.github.io/main/images/movie.jpeg" class="w-full h-auto opacity-75" />
					</a>

					< h1 class="text-xl text-center font-semibold pb-5">Movie App</h1>
					<p class="font-normal">Developed an application to allow users to extract data from RESTful API regarding movies or Tv-shows that was entered
						into the search function, and allows users to add their favorite movies or tv-shows to a database.</p>
                    <a href='https://github.com/Mgaynor2022/infoMovieApp' target="_blank" rel="noopener noreferrer">
                    <button type="button" class="mt-5 text-white bg-black hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2  ">GitHub Link</button>
                    </a>
				</div>
				
				<div class="w-1/2 m-5">
					<a href="https://github.com/Mgaynor2022/petAdoptionApp" class="block mb-8 bg-black hover:bg-gray-700" target="_blank" rel="noopener noreferrer">
						<img src="https://raw.githubusercontent.com/Mgaynor2022/Mgaynor2022.github.io/main/images/pet.jpeg" class="w-full h-auto opacity-75" target="_blank" rel="noopener noreferrer" />
					</a>
					<h1 class="text-xl text-center font-semibold pb-5">Pet Adoption App</h1>
					<p class="font-normal">Launched an application that serves as a centralized location that displays pets information that are available for adoption. All
						from a created database with multiple endpoints that houses the data.</p>

                    <a href='https://github.com/Mgaynor2022/petAdoptionApp' target="_blank" rel="noopener noreferrer">
                    <button type="button" class="mt-5 text-white bg-black hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2  ">GitHub Link</button>
                    </a>
				</div>
						
			</div>
			
        </div>
		
    
   )


    
}