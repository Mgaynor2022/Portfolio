import React from 'react'


export default function Resume(){
    return(
        <div>
            <div class="flex justify-center items-center p-2">
                <img src="https://github.com/Mgaynor2022/Mgaynor2022.github.io/blob/main/src/resume/SoftwareEngineerResume.pdf" class="w-1/2"  />
            </div>

                <a href='https://github.com/Mgaynor2022/Mgaynor2022.github.io/blob/main/src/resume/SoftwareEngineerResume.pdf' download={"SoftwareEngineerResume.pdf"}>
                    <button type="button" class="mt-5 text-white bg-black hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 ">Download Resume</button>
                </a>

        </div>
    )
}