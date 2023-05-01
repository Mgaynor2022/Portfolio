import {SiJavascript} from 'react-icons/si'
import {TbHtml} from 'react-icons/tb'
import {MdCss} from 'react-icons/md'
import {SiMysql} from 'react-icons/si'


export default function About(){

    return (
        <div id='about'className="flex bg-gray-50 items-center px-12 lg:px-24 p-10 ">
				<div className="">
					<img id='picture'
					src= "src/images/IMG_1369.jpeg" 
					className="rounded-full p-10 w-8/12"/>					
				</div>

				<div id='aboutMe' className=" flex flex-col items-center">
					<h1 className="text-5xl text-center mb-6 tracking-wider">About Me</h1>
					<p className=" font-normal text-lg text-center mb-6">My time in the military and all the goals that I have crushed in my fitness journey showed 
						me how disciplined and self motivated I truly am. Web development brings me fulfillment
						 in bringing my ideas to life with coding, this is what makes me put the long hours into learning 
						  as much as possible in a forever growing field. I am motivated to advance and expand my skill set through
						   targeted mentorship and working on challenging projects.</p>
					<div id='icons' className='flex justify-center px-40' >
						<SiJavascript className='mr-4' size='2.5em' />
						<TbHtml className='mr-4' size='2.5em'/>
						<MdCss className='mr-4' size='2.5em'/>
						<SiMysql size='2.5em'/>
					</div>
						<button type="button" class="mt-7 text-black border-2 border-black  hover:bg-gray-200 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">Resume</button>
					

				</div>
			
			</div>
    )
}