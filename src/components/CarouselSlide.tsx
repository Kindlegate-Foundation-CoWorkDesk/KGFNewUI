import { Carousel } from 'flowbite';
import { useEffect } from 'react';
import React from 'react';
import type { CarouselItem, CarouselOptions, CarouselInterface } from "flowbite";



const CarouselSlide: React.FC = () => {
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
        
        carousel.cycle()
        
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
    <>
    <div className='bg-carousel-primary bg-carousel-pattern bg-no-repeat pg-contain bg-right-top-4 
    rounded-lg mt-9 relative w-full '>

    <div className='px-24'>
        <div className='text-4xl text-white pt-7' >
            <p>OUR VALUE ADDING ROADMAP</p>
            <p>(HESS MANDATE)</p>
        </div>
    
    
        <div id="controls-carousel" className="px-6" data-carousel="static">
            {/* <!-- Carousel wrapper --> */}
            <div className="relative overflow-hidden  md:h-96">
                <div className='container mx-auto'>
                {/* <!-- Item 1 --> */}
                <div id="carousel-item-1" className="hidden duration-700 ease-in-out 
                flex justify-center items-center" data-carousel-item>
                    <img src="../medium-shot-women-posing-outdoors.svg" 
                    className="absolute block -translate-y-1/2 top-1/2 right-0  object-contain h-full" alt="..." />
                    <div className='bg-carousel-secondary text-white
                    absolute block -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 p-6'>
                    <p>Healthy communities:</p> 
                    <p>
                    We believe when our communities are healthy and Eco-friendly, people thrive. 
                    Consequently, often many of the services that keep people healthy are difficult to access 
                    for the people who need them most. We will facilitate enabling environments to promote creativity, 
                    innovation and collaboration for healthcare causes and objectives.
                    We will ensure that through our community networks every Hungry Citizen 
                    within our reach gets Food Assistance and the Homeless get a clean living environment 
                    with access to disease prevention medicine.</p></div>
                </div>
                {/* <!-- Item 2 --> */}
                <div id="carousel-item-2" className="hidden duration-700 ease-in-out
                flex justify-center items-center" data-carousel-item="active">
                    <img src="../confident-businessman-working-his-laptop.svg" 
                    className="absolute block  -translate-y-1/2 top-1/2 left-0 object-contain h-full" alt="..." />
                    <div className='bg-carousel-secondary text-white
                    absolute block -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 p-6'>
                    <p>Healthy communities:</p> 
                    <p>
                    We believe when our communities are healthy and Eco-friendly, people thrive. 
                    Consequently, often many of the services that keep people healthy are difficult to access 
                    for the people who need them most. We will facilitate enabling environments to promote creativity, 
                    innovation and collaboration for healthcare causes and objectives.
                    We will ensure that through our community networks every Hungry Citizen 
                    within our reach gets Food Assistance and the Homeless get a clean living environment 
                    with access to disease prevention medicine.</p></div>
                </div>
                {/* <!-- Item 3 --> */}
                <div id="carousel-item-3" className="hidden duration-700 ease-in-out" data-carousel-item>
                    <img src="../woman-spending-time-with-her-black-baby-boy.svg" 
                    className="absolute block  -translate-y-1/2 top-1/2 right-0 object-contain h-full" alt="..." />
                    <div className='bg-carousel-secondary text-white
                    absolute block -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 p-6'>
                    <p>Healthy communities:</p> 
                    <p>
                    We believe when our communities are healthy and Eco-friendly, people thrive. 
                    Consequently, often many of the services that keep people healthy are difficult to access 
                    for the people who need them most. We will facilitate enabling environments to promote creativity, 
                    innovation and collaboration for healthcare causes and objectives.
                    We will ensure that through our community networks every Hungry Citizen 
                    within our reach gets Food Assistance and the Homeless get a clean living environment 
                    with access to disease prevention medicine.</p></div>
                </div>
                {/* <!-- Item 4 --> */}
                <div id="carousel-item-4" className="hidden duration-700 ease-in-out" data-carousel-item>
                    <img src="../young-students-attending-university-class.svg" 
                    className="absolute block  -translate-y-1/2 top-1/2 left-0 object-contain h-full" alt="..." />
                    <div className='bg-carousel-secondary text-white
                    absolute block -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 p-6'>
                    <p>Healthy communities:</p> 
                    <p>
                    We believe when our communities are healthy and Eco-friendly, people thrive. 
                    Consequently, often many of the services that keep people healthy are difficult to access 
                    for the people who need them most. We will facilitate enabling environments to promote creativity, 
                    innovation and collaboration for healthcare causes and objectives.
                    We will ensure that through our community networks every Hungry Citizen 
                    within our reach gets Food Assistance and the Homeless get a clean living environment 
                    with access to disease prevention medicine.</p></div>
                </div>
                
            </div></div>
            {/* <!-- Slider indicators --> */}
            <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
                <button id="carousel-indicator-1" type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1"></button>
                <button id="carousel-indicator-2" type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2"></button>
                <button id="carousel-indicator-3" type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3"></button>
                <button id="carousel-indicator-4" type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4"></button>
            </div>
            {/* <!-- Slider controls --> */}
            <button id="data-carousel-prev" type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg className="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
                    </svg>
                    <span className="sr-only">Previous</span>
                </span>
            </button>
            <button id="data-carousel-next" type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg className="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                    </svg>
                    <span className="sr-only">Next</span>
                </span>
            </button>
        </div>
    </div>
    </div></>


  );
};

export default CarouselSlide;