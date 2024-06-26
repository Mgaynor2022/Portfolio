import React from "react";
import AWS from '../images/AWS.png' 
import CompTIA from '../images/CompTIA.png'
import awsSA from '../images/awsSA.jpeg'

export default function Certifications(){

    return (
      <div>
        <div className="flex justify-center px-40 font-normal text-lg">
          <a
            href="https://www.credly.com/badges/bb9833a6-19e7-4fc0-af1a-7e14f77803cc/linked_in_profile"
            rel="noopener noreferrer nofollow"
            target="_blank"
          >
            <img
              src={AWS}
              width="250"
              height="250"
              className="transition-transform duration-300 transform hover:scale-110"
            ></img>
          </a>
          
            <img
              src={awsSA}
              width="250"
              height="250"
              className="transition-transform duration-300 transform hover:scale-110 "
            ></img>
          <a
            href="https://www.credly.com/badges/c5a091af-c9f1-43cc-bf66-f665ad802722"
            rel="noopener noreferrer nofollow"
            target="_blank"
          >
            <img
              src={CompTIA}
              width="250"
              height="250"
              className="transition-transform duration-300 transform hover:scale-110 mx-10"
            ></img>

          </a>
        </div>
      </div>
    );
}

