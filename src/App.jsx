import React, { useState } from 'react'
import {Routes, Route, Link} from "react-router-dom"
import Project from './Project'
import ContactUs from './ContactUs'
import Footer from './Footer'
import Resume from './Resume'
import Home from './Home'



import './App.css'

function App() {

  return (
    <div>
      <div>
            <header class="  mx-auto max-w-xl py-20 text-center">
			<h1 href="#" class="block text-2xl mb-12 font-semibold">Michael Gaynor's Portfolio</h1>

			<ul class="flex justify-center uppercase text-xs font-normal">
				{/* <li>
					<Link to="/Home" class="mx-4 hover:text-gray-600">Home</Link>
				</li> */}
				<li>
					<Link to="/Project" class="mx-4 hover:text-gray-600">Home</Link>
				</li>
				<li>
					<Link to="/Resume" class="mx-4 hover:text-gray-600">Resume</Link>
				</li>
				<li>
					<Link to="/ContactUs" class="mx-4 hover:text-gray-600">Contact </Link>
				</li>
			</ul>
		</header>
  </div>


    <div>
      <Routes>
      {/* <Route index element ={<Home/>}/> */}
         <Route index element ={<Project/>}/>
        {/* <Route path="/Home" element={<Home/>}/>  */}
        <Route path="/Project" element={<Project/>}/>
        <Route path="/Resume" element={<Resume/>}/>
        <Route path="/ContactUs" element={<ContactUs/>}/>
        {/* <Route path="/Footer" element={<Footer/>}/> */}
      </Routes>
    </div>
    <footer>
				<Footer/>
			</footer>
  </div>
  )
}

export default App


