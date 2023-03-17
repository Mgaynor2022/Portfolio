import React from 'react'



export default function Home(){

   return(
    <div class="mx-auto max-w-6xl bg-white py-20 px-12 lg:px-24 shadow-xl mb-24">

			<div class="mb-12">
				<h1 class="text-3xl lg:text-4xl text-center mb-6 tracking-wider">About Me</h1>
				<div class="flex justify-center items-center p-2">
					<img src= "images/me.jpeg" class=" w-2/5"/>					
				</div>
				<p class="tracking-wide text-sm mb-6 leading-relaxed mx-auto max-w-xl text-center">
					Hello, my name is Michael Gaynor im a Air Force Veteran, College Graduate and now im a  Software Developer.  <br class="hidden md:block" />
					Find out how I discovered this new passion in my life !</p>

				<p class="tracking-wide text-xs text-gray-600 leading-loose mx-auto max-w-xl text-center">
					Have you ever felt that you were filled with creativity but didn’t know how to express that to the world?
					I felt that until I became a Full Stack Web Developer. The enjoyment I feel seeing my long hours of coding 
					and research come to life for the world to engage with is what I appreciate the most about Web Development. 
					I could be coding a simple text-based RPG game to a fully functioning web application, it gives me the same 
					fulfillment. My natural eagerness to learn new things, such as different software programs or techniques to 
					obtain the optimal solution, helps me overcome the problems I face as a Software Developer.</p>
				<h1 class="text-3xl lg:text-4xl text-center mb-6 tracking-wider pt-5">Projects</h1>
			</div>


			<div class="flex justify-between -mx-2">
				
				<div class="w-1/3 p-2">
					<a href="https://github.com/Mgaynor2022/infoMovieApp" class="block mb-8 bg-black hover:bg-gray-700">
						<img src="images/movie.jpeg" class="w-full h-auto opacity-75" />
					</a>
					< h1 class="text-xl text-center">Movie App</h1>
				</div>
				
				<div class="w-1/3 p-2">
					<a href="https://github.com/Mgaynor2022/petAdoptionApp" class="block mb-8 bg-black hover:bg-gray-700">
						<img src="https://raw.githubusercontent.com/Mgaynor2022/Mgaynor2022.github.io/main/images/pet.jpeg" class="w-full h-auto opacity-75" />
					</a>
					<h1 class="text-xl text-center">Pet Adoption App</h1>
				</div>
						
			</div>
        </div>
    
   )


    
}