

export default function About(){

    return (
      <div id="about" className="flex bg-gray-50 items-center lg:px-24 p-10 ">
        <div id="aboutMe" className=" flex flex-col items-center">
          <h1 className="text-5xl text-center mb-6 tracking-wider">About Me</h1>
          <div className="w-full">
            <p
              id="aboutMe-text"
              className=" font-normal text-lg text-center mb-10  "
            >
              I am an excellent communicator who values effective teamwork to,
              cultivate a positive and collaborative work environment. I believe
              in continuous learning and embrace challenges as opportunities for
              growth. Every project I undertake is approached with a curious
              mindset, creative flair, and an unwavering commitment to
              delivering exceptional results.
            </p>
          </div>

          {/* <h1 className="text-2xl text-center mb-6 tracking-wider">Skills</h1> */}
          <div
            id="icons"
            className="flex justify-center lg:px-40 mb-10  font-normal text-lg  "
          >
            <p className="mr-4 text-black border-2 border-black  hover:bg-gray-200 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2">
              HTML
            </p>

            <p className="mr-4 border-black border-2 hover:bg-gray-200 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-3 py-2.5 mb-2">
              CSS
            </p>
            <p className="mr-4 border-black border-2 hover:bg-gray-200 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-3 py-2.5 mb-2">
              JavaScript
            </p>
            <p className="mr-4 border-black border-2 hover:bg-gray-200 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-3 py-2.5 mb-2">
              TypeScript
            </p>
            <p className="mr-4 border-black border-2 hover:bg-gray-200 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-3 py-2.5 mb-2">
              React
            </p>
            <p className="mr-4 border-black border-2 hover:bg-gray-200 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-3 py-2.5 mb-2">
              Tailwind{" "}
            </p>
            <p className="mr-4 border-black border-2 hover:bg-gray-200 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-3 py-2.5 mb-2">
              Python
            </p>
            <p className="mr-4 border-black border-2 hover:bg-gray-200 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-3 py-2.5 mb-2">
              SQL
            </p>
            <p className="mr-4 border-black border-2 hover:bg-gray-200 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-3 py-2.5 mb-2">
              Git
            </p>
            <p className="mr-4 border-black border-2 hover:bg-gray-200 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-3 py-2.5 mb-2">
              Github
            </p>
          </div>
          <p id="aws" className="font-normal text-2xl mr-4 mt-5 mb-2">AWS</p>
          <div id="aws" className=" flex justify-center px-12 lg:px-24 mb-24  font-normal text-lg">
            <p className="mr-2">S3</p>
            <p className="mr-2">|</p>
            <p className="mr-2">Route53</p>
            <p className="mr-2">|</p>
            <p className="mr-2">CloudFront</p>
              <p className="mr-2">|</p>
              <p className="mr-2">Lambda</p> <p className="mr-2">|</p>
              <p className="mr-2">DynamoDB</p> <p className="mr-2">|</p>
              <p className="mr-2">IAM</p>
          </div>


          <a
            href="https://docs.google.com/document/d/1huQQ0CeLkIBLc7HfL_KeCxpDcLv16NPbJs9Kisd35PI/edit"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              type="button"
              className="mt-7 text-black border-2 border-black  hover:bg-gray-200 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
            >
              Resume
            </button>
          </a>
        </div>
      </div>
    );
}