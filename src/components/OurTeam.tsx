import React from 'react';

const OurTeam: React.FC = () => {
    return (
    <>
        {/* <div className="w-full  bg-white ">

<div className="p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800" id="stats" role="tabpanel" aria-labelledby="stats-tab">
    <dl className="grid max-w-screen-xl grid-cols-1 p-4 mx-auto text-gray-900 xl:grid-cols-3 dark:text-white sm:p-8">
        
        <div className="bg-white dark:bg-gray-800 dark:border-gray-700 mx-auto">
            <a href="#">
                <img className="rounded-lg object-cover" src="../side-view-smiley-man-holding-laptop.svg" alt="" />
            </a>
            <div className="p-5 ">
                <a href="#">
                    <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
                    Leadership</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Promoting thought based Leadership in the Community</p>
                <a href="#" className="inline-flex items-center py-2 text-2xl
                text-center text-green underline text-OurTeam-green
                focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 
                dark:focus:ring-blue-800">
                    Read more
                   
                </a>
            </div>
        </div>

        <div className="max-w-sm bg-white dark:bg-gray-800 dark:border-gray-700 mx-auto">
            <a href="#">
                <img className="rounded-lg object-cover lg:w-[365px] lg:h-[236px]" src="../confident-businessman-working-his-laptop.svg" alt="" />
            </a>
            <div className="p-5 ">
                <a href="#">
                    <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
                    Leadership</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Promoting thought based Leadership in the Community</p>
                <a href="#" className="inline-flex items-center  py-2 text-2xl
                text-center text-green underline text-OurTeam-green
                focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 
                dark:focus:ring-blue-800">
                    Read more
                   
                </a>
            </div>
        </div>
        <div className="bg-white dark:bg-gray-800 dark:border-gray-700 mx-auto">
            <a href="#">
                <img className=" rounded-lg object-cover" src="../pexels-steve-johnson.svg" alt="" />
            </a>
            <div className="p-5 ">
                <a href="#">
                    <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
                    Leadership</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Promoting thought based Leadership in the Community</p>
                <a href="#" className="inline-flex items-center  py-2 text-2xl
                text-center text-green underline text-OurTeam-green
                focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 
                dark:focus:ring-blue-800">
                    Read more
                   
                </a>
            </div>
        </div>
        
    </dl>
</div>  
        </div> */}

<div className="overflow-hidden bg-[#f1f1f1] text-[#14242c] flex flex-col  gap-20 h-[767px] shrink-0 items-center px-24 py-8">
      <div className="text-center text-4xl  font-bold leading-[72px]  w-3/4">
        Featured Programs
      </div>
      <div className="self-stretch flex flex-col ml-3 gap-2">
        <div className="flex flex-row justify-between mb-6 items-start">
          <img
            src="https://file.rendit.io/n/ZIx6gw4skZ1jksZbz1y4.png"
            className=""
          />
          <img
            src="https://file.rendit.io/n/XGewv1ySQMXB2japrpB9.png"
            className=""
          />
          <img
            src="https://file.rendit.io/n/SJBYudhXg3vgLo02ZzTA.png"
            id="Pexelsstevejohnson"
            className=""
          />
        </div>
        <div className="flex flex-row gap-64 items-start mb-8 ">
          <div className="text-center text-2xl  font-bold leading-[28px] mb-2 mr-12">
            Leadership
          </div>
          <div className="text-center text-2xl  font-bold leading-[28px]  mt-2">
            Entrpreneurship
          </div>
          <div className="text-center text-2xl  font-bold leading-[28px]  mt-1">
            Arts
          </div>
        </div>
        <div className="flex flex-row mr-32 gap-10 items-start">
          <div className="text-xl  leading-[22.5px] w-1/3 mb-1 mr-6">
            Promoting thought based Leadership in the Community
          </div>
          <div className="text-xl  leading-[22.5px] mt-1">
            Engage in entrepreneurial activities and learn
            <br />
            the necessary skills to make it
          </div>
          <div className="text-justify text-xl  leading-[22.5px] mt-px">
            We engage the community in
            <br />
            recreational activities....
          </div>
        </div>
        <div className="flex flex-row justify-between mr-64 items-start">
          <div className="text-2xl underline leading-[32px] text-[#00A859]  mb-1">
            Read more
          </div>
          <div className="text-2xl underline leading-[32px] text-[#00A859] mt-1">
            Read more
          </div>
          <div className="text-2xl  underline leading-[32px] text-[#00A859] mt-px">
            Read more
          </div>
        </div>
      </div>
    </div>
    </>
        
    );
};

export default OurTeam;