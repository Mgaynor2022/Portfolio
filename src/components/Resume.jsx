import React from 'react'


export default function Resume(){
    return(
        <div>
            <div class="flex justify-center items-center p-2">
                <img src="https://docs.google.com/document/d/15NvFdyR56a26Sb60HiY_pxhKZyrkvot3eps2LSqunA4/edit?usp=sharing" class="w-1/2"  />
            </div>

                <a href='src/resume/VSchool Resume.pdf' download={"Michael Gaynor Resume"} target="_blank" rel="noopener noreferrer">
                    <button type="button" class="mt-5 text-white bg-black hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 ">Download Resume</button>
                </a>

        </div>
    )
}