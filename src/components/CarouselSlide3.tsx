import { Carousel } from 'flowbite';
import { useEffect } from 'react';
import React from 'react';
import type { CarouselItem, CarouselOptions, CarouselInterface } from "flowbite";



const CarouselSlide3: React.FC = () => {
    useEffect(() => {


        const items: CarouselItem[] = [
            {
                position: 0,
                el: document.getElementById('carousel-item-1') ?? undefined
            },
            {
                position: 1,
                el: document.getElementById('carousel-item-2') ?? undefined
            },
            {
                position: 2,
                el: document.getElementById('carousel-item-3') ?? undefined
            },
            {
                position: 3,
                el: document.getElementById('carousel-item-4') ?? undefined
            },
        ];
        
        const options: CarouselOptions = {
            defaultPosition: 1,
            interval: 3000,
            
            indicators: {
                activeClasses: 'bg-white dark:bg-gray-800',
                inactiveClasses: 'bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800',
                items: [
                    {
                        position: 0,
                        el: document.getElementById('carousel-indicator-1')
                    },
                    {
                        position: 1,
                        el: document.getElementById('carousel-indicator-2')
                    },
                    {
                        position: 2,
                        el: document.getElementById('carousel-indicator-3')
                    },
                    {
                        position: 3,
                        el: document.getElementById('carousel-indicator-4')
                    },
                ]
            },
            
            // callback functions
            onNext: () => {
                console.log('next slider item is shown');
            },
            onPrev: ( ) => {
                console.log('previous slider item is shown');
            },
            onChange: ( ) => {
                console.log('new slider item has been shown');
            }
        };
        
        const carousel: CarouselInterface = new Carousel(items, options);
        
        // carousel.cycle()
        
        // set event listeners for prev and next buttons
        const $prevButton = document.getElementById('data-carousel-prev');
        const $nextButton = document.getElementById('data-carousel-next');
        
        $prevButton.addEventListener('click', () => {
            carousel.prev();
        });
        
        $nextButton.addEventListener('click', () => {
            carousel.next();
        });
    })

  return (


    <div className="overflow-hidden bg-[#f1f1f1] flex flex-col pt-7 gap-10 w-full items-center"
  >
    <div className=" self-stretch relative flex flex-col justify-end pt-12 gap-6 items-start mt-[-23px] ml-24 mr-[-127px]">
      <img
        src="../carousel-pattern.svg" 
        id="Asset"
        className="w-[346px] h-[343px] absolute top-0 left-[1080px]"
      /></div>
    
    <div
      id="ROADMAPRoot"
      className="   bg-carousel-primary flex flex-col pb-10 gap-10 w-[1400px] items-center rounded-[20px]"
    >
    <div className=" self-stretch relative flex flex-col justify-end pt-12 gap-6 items-start mt-[-23px] ml-24 mr-[-127px]">
      {/* <img
        src="../carousel-pattern.svg" 
        id="Asset"
        className="w-[346px] h-[343px] absolute top-0 left-[1080px]"
      /> */}
      {/* line */}
      <div className="relative flex flex-col ml-8 w-[536px] items-start">
        {/* <div
          id="Line"
          className="border-solid border-[#e3b522] w-3/5 h-1 absolute top-24 left-0 border-t-4 border-b-0 border-x-0"
        /> */}
        <div className="text-4xl font-bold leading-[49.5px]  relative">  
        
          OUR VALUE ADDING ROADMAP <br />
          <span className='border-solid border-[#e3b522] border-b-4'>
          (HESS MANDATE)</span>
        </div>
      </div>
  
      {/* carousel */}
      <div id="controls-carousel" 
        className='self-stretch overflow-hidden  relative flex flex-col'
      data-carousel="static">
          {/* <!-- Carousel wrapper --> */}
          <div className='self-stretch h-[572px] w-[1400]  
          overflow-hidden
          relative flex flex-col'>
            {/* Item 1 */}
            <div id="carousel-item-1" 
            className="hidden duration-700 ease-in-out
            flex justify-center items-center"
            data-carousel-item="active">
              <img
                src="../medium-shot-women-posing-outdoors.svg"
                className="w-[532px] h-[572px] bg-black/15 absolute top-0 
                right-[150px]"
              />
              <div className="shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] 
              w-[672px] h-[354px] bg-[#4b4b4b] absolute top-[144px] left-[120px] 
              flex flex-col items-start pl-10 py-10 rounded">
                <div className="text-xl leading-[22.5px] ">
                  Healthy communities: <br />
                  <br />
                  We believe when our communities are healthy and Eco-friendly, people
                  thrive. Consequently, often many of the services that keep people
                  healthy are difficult to access for the people who need them most. We
                  will facilitate enabling environments to promote creativity,
                  innovation and collaboration for healthcare causes and objectives. We
                  will ensure that through our community networks every Hungry Citizen
                  within our reach gets Food Assistance and the Homeless get a clean
                  living environment with access to disease prevention medicine.
                </div>
              </div>      
            </div>
            {/* Item 2 */}
            <div id="carousel-item-2" 
            className=" hidden duration-700 ease-in-out
            relative flex justify-center items-center
            "
            data-carousel-item>
              <img
                src="../confident-businessman-working-his-laptop.svg"
                className="w-[532px] h-[572px] bg-black/15 absolute left-[120px]  top-0"
              />
              <div className="shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] 
              w-[672px] h-[354px] bg-[#4b4b4b] absolute  top-[144px] right-[150px]
              flex flex-col justify-center items-end pl-10 py-10 rounded">
                <div className="text-xl  leading-[22.5px]  w-full">
                  Healthy communities : <br />
                  <br />
                  We believe when our communities are healthy and Eco-friendly, people
                  thrive. Consequently, often many of the services that keep people
                  healthy are difficult to access for the people who need them most. We
                  will facilitate enabling environments to promote creativity,
                  innovation and collaboration for healthcare causes and objectives. We
                  will ensure that through our community networks every Hungry Citizen
                  within our reach gets Food Assistance and the Homeless get a clean
                  living environment with access to disease prevention medicine.
                </div>
              </div>      
            </div>
            {/* Item 3 */}
            <div id="carousel-item-3" 
            className="hidden duration-700 ease-in-out
            flex justify-center items-center"
            data-carousel-item="active">
              <img
                src="../woman-spending-time-with-her-black-baby-boy.svg"
                className="w-[532px] h-[572px] bg-black/15 absolute top-0 
                right-[150px]"
              />
              <div className="shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] 
              w-[672px] h-[354px] bg-[#4b4b4b] absolute top-[144px] left-[120px] 
              flex flex-col items-start pl-10 py-10 rounded">
                <div className="text-xl leading-[22.5px] ">
                  Healthy communities: <br />
                  <br />
                  We believe when our communities are healthy and Eco-friendly, people
                  thrive. Consequently, often many of the services that keep people
                  healthy are difficult to access for the people who need them most. We
                  will facilitate enabling environments to promote creativity,
                  innovation and collaboration for healthcare causes and objectives. We
                  will ensure that through our community networks every Hungry Citizen
                  within our reach gets Food Assistance and the Homeless get a clean
                  living environment with access to disease prevention medicine.
                </div>
              </div>      
            </div>
            {/* Item 4 */}
            <div id="carousel-item-4" 
            className=" hidden duration-700 ease-in-out
            relative flex justify-center items-center
            "
            data-carousel-item>
              <img
                src="../young-students-attending-university-class.svg"
                className="w-[532px] h-[572px] bg-black/15 absolute left-[120px]  top-0"
              />
              <div className="shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] 
              w-[672px] h-[354px] bg-[#4b4b4b] absolute  top-[144px] right-[150px]
              flex flex-col justify-center items-end pl-10 py-10 rounded">
                <div className="text-xl leading-[22.5px] w-full">
                  Healthy communities : <br />
                  <br />
                  We believe when our communities are healthy and Eco-friendly, people
                  thrive. Consequently, often many of the services that keep people
                  healthy are difficult to access for the people who need them most. We
                  will facilitate enabling environments to promote creativity,
                  innovation and collaboration for healthcare causes and objectives. We
                  will ensure that through our community networks every Hungry Citizen
                  within our reach gets Food Assistance and the Homeless get a clean
                  living environment with access to disease prevention medicine.
                </div>
              </div>      
            </div>
          
          </div>

          {/* Slide indicators  */}
          <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
              <button id="carousel-indicator-1" type="button" 
              className="w-3 h-3 rounded-full"
               aria-current="true" aria-label="Slide 1">

              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="6" viewBox="0 0 75 6" fill="none">
                <circle cx="26" cy="3" r="3" fill="#BFB286"/></svg>
              </button>
              <button id="carousel-indicator-2" type="button" 
              className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2">

              </button>
              <button id="carousel-indicator-3" type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3">
                

              </button>
              <button id="carousel-indicator-4" type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4"></button>
          </div>

          {/* <!-- Slider controls --> */}
          <div className=" flex flex-col justify-center items-center ">
          <button id="data-carousel-prev" type="button" 
          className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg xmlns="http://www.w3.org/2000/svg" width="45" height="46" viewBox="0 0 45 46" fill="none">
                <ellipse cx="22.3807" cy="23" rx="22.3807" ry="23" fill="#14BDE3"/>
                <path d="M17.8201 23.0459C17.5197 23.3463 17.5197 23.8334 17.8201 24.1338L22.7154 29.0291C23.0158 29.3295 23.5029 29.3295 23.8033 29.0291C24.1037 28.7287 24.1037 28.2417 23.8033 27.9413L19.4518 23.5898L23.8033 19.2384C24.1037 18.938 24.1037 18.451 23.8033 18.1506C23.5029 17.8502 23.0158 17.8502 22.7154 18.1506L17.8201 23.0459ZM19.5117 22.8206H18.364V24.3591H19.5117V22.8206Z" fill="black"/>
              </svg>
                  <span className="sr-only">Previous</span>
              </span>
          </button>
          <button id="data-carousel-next" type="button" 
          className="absolute top-0 right-[190px] z-30 
          flex items-center justify-center 
          h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
              <span className="inline-flex items-center justify-center 
              w-10 h-10 rounded bg-white/30 
              group-hover:bg-white/50  group-focus:ring-white group-focus:outline-none
              dark:bg-gray-800/30 
              dark:group-hover:bg-gray-800/60 
              dark:group-focus:ring-gray-800/70 ">

                  <svg xmlns="http://www.w3.org/2000/svg" width="45" height="46" viewBox="0 0 45 46" fill="none">
                    <ellipse cx="22.3807" cy="23" rx="22.3807" ry="23" transform="rotate(180 22.3807 23)" fill="#14BDE3"/>
                    <path d="M26.9415 22.9541C27.2419 22.6537 27.2419 22.1666 26.9415 21.8662L22.0462 16.9709C21.7458 16.6705 21.2587 16.6705 20.9583 16.9709C20.6579 17.2713 20.6579 17.7583 20.9583 18.0587L25.3097 22.4102L20.9583 26.7616C20.6579 27.062 20.6579 27.549 20.9583 27.8494C21.2587 28.1498 21.7458 28.1498 22.0462 27.8494L26.9415 22.9541ZM25.2499 23.1794L26.3976 23.1794L26.3976 21.6409L25.2499 21.6409L25.2499 23.1794Z" fill="black"/>
                  </svg>
                  <span className="sr-only">Next</span>
              </span>
          </button></div>
      </div>
      {/* carousel */}
    
    </div>
  
    </div></div>


  );
};

export default CarouselSlide3;