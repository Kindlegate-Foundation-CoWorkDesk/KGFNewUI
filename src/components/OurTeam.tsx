import React from 'react';

const OurTeam: React.FC = () => {
    return (
        <div className="w-full  bg-white ">

        <div className="p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800" id="stats" role="tabpanel" aria-labelledby="stats-tab">
            <dl className="grid max-w-screen-xl grid-cols-1 p-4 mx-auto text-gray-900 xl:grid-cols-3 dark:text-white sm:p-8">
                {/* width: 365px; max-w-sm: 24rem - 384px
                    height: 236px; */}
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
        </div>
    );
};

export default OurTeam;