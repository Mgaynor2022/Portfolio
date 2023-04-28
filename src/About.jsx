import {SiJavascript} from 'react-icons/si'
import {TbHtml} from 'react-icons/tb'
import {MdCss} from 'react-icons/md'
import {SiMysql} from 'react-icons/si'


export default function About(){

    return (
        <div id='about'className="flex bg-gray-50 items-center px-12 lg:px-24 p-10 ">
				<div className="">
					<img 
					src= "https://raw.githubusercontent.com/Mgaynor2022/Mgaynor2022.github.io/main/images/me.jpeg" 
					className="rounded-full p-10 w-8/12"/>					
				</div>

				<div className="items-center">
					<h1 className="text-5xl text-center mb-6 tracking-wider">About Me</h1>
					<p className="font-normal text-lg text-center mb-6">
					As a skilled Software Engineer, I have expertise in programming languages such as JavaScript, HTML/CSS, SQL, and
					libraries/frameworks including React, Node JS/Express, and Tailwind CSS. My proficiency 
					extends to database technologies such as MongoDB and Mongoose, RESTful APIs, and tools like Postman, Git/GitHub, and 
					Slack. With experience in developing Full Stack Applications, I have shown my capability to build scalable code that is optimized for 
					performance, accessibility, and usability while utilizing Agile methodologies. </p>

					<div className='icons flex items-center justify-between px-40' >
						<SiJavascript size='2.5em' />
						<TbHtml size='2.5em'/>
						<MdCss size='2.5em'/>
						<SiMysql size='2.5em'/>
					</div>

				</div>
			
			</div>
    )
}