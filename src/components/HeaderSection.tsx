import React from 'react';
import Image from 'next/image';
import NavBar from './NavBar';
import Hero from './Hero';

interface HeaderProps {
  links: { text: string; url: string }[];
}

const Header: React.FC<HeaderProps> = ({ links }) => {
  return (
    <>
      
<div className="relative isolate overflow-hidden bg-gray-900 pb-48 sm:pb-64"> 
<NavBar links={links} />
<Hero />
  <img src="../close-up-community-concept-with-hands.svg" alt="" className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center" />
  
  <div className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl" aria-hidden="true">
    <div className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20" 
        style={{ 
            clipPath:  
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }} ></div>
  </div>
  <div className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu" aria-hidden="true">
    <div className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20" 
    style={{ 
        clipPath: 
        'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'
    }}
        ></div>
  </div>

  <div className="mx-auto max-w-7xl px-6 lg:px-8">

  <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
      <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
        <div className="relative pl-16">
          <dt className="text-base font-semibold leading-7 text-gray-900">
            <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
              <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
              </svg>
            </div>
            Push to deploy
          </dt>
          <dd className="mt-2 text-base leading-7 text-gray-600">Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.</dd>
        </div>
        </dl>
        </div>

    <div className="mx-auto max-w-2xl lg:mx-0">
      <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Work with us</h2>
      <p className="mt-6 text-lg leading-8 text-gray-300">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.</p>
    </div>
    <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
      <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
        <a href="#">Open roles <span aria-hidden="true">&rarr;</span></a>
        <a href="#">Internship program <span aria-hidden="true">&rarr;</span></a>
        <a href="#">Our values <span aria-hidden="true">&rarr;</span></a>
        <a href="#">Meet our leadership <span aria-hidden="true">&rarr;</span></a>
      </div>
      <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col-reverse">
          <dt className="text-base leading-7 text-gray-300">Offices worldwide</dt>
          <dd className="text-2xl font-bold leading-9 tracking-tight text-white">12</dd>
        </div>
        <div className="flex flex-col-reverse">
          <dt className="text-base leading-7 text-gray-300">Full-time colleagues</dt>
          <dd className="text-2xl font-bold leading-9 tracking-tight text-white">300+</dd>
        </div>
        <div className="flex flex-col-reverse">
          <dt className="text-base leading-7 text-gray-300">Hours per week</dt>
          <dd className="text-2xl font-bold leading-9 tracking-tight text-white">40</dd>
        </div>
        <div className="flex flex-col-reverse">
          <dt className="text-base leading-7 text-gray-300">Paid time off</dt>
          <dd className="text-2xl font-bold leading-9 tracking-tight text-white">Unlimited</dd>
        </div>
      </dl>
    </div>
  </div>
</div>
</>

  );
};

export default Header;
