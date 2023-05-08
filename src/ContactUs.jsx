import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactUs() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

	emailjs.sendForm('service_6bwrf9o', 'template_4rdye58', form.current, '0p2qA0FakMQnG4i0O')

      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
	  e.target.reset()
  };
	  
	  return(
		  <form id='contact'
		  className="bg-white mt-20" ref={form}onSubmit={sendEmail}>
				<div id='contactContainer' className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
					<h2 className="text-5xl text-center mb-6 tracking-wider">Get In Touch With Me</h2>
					<p id='contactText' className="font-normal text-lg text-center mb-6">I'm currently looking for full-time Software Engineering or Frontend Developer opportunities! 
						If you know of any positions available, if you have any questions, or if you just want to say hi, 
						please feel free to email me.</p>
						<div>
							<label for="email" className="block mb-2 text-sm font-light ">Your email</label>
							<input type="email" name='user_email' className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 " required/>
						</div>
						<div>
							<label for="subject" className="block mb-2 text-sm  text-gray-900 dark:text-gray-300 font-light">Subject</label>
							<input type="text" name="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 " required/>
						</div>
						<div className="sm:col-span-2">
							<label for="message" className="block mb-2 text-sm  text-gray-900 dark:text-gray-400 font-light">Your message</label>
							<textarea name="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 " ></textarea>
						</div>
						<button className="py-3 px-5 mt-5 text-sm text-center text-white bg-black rounded-lg  sm:w-fit hover:bg-gray-500 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button>
				</div>
			  </form>
			  
			  )
			  
			}


		
		  