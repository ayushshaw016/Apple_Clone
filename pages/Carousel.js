import Image from 'next/image';
import React from 'react';
import { useState, useEffect, useRef } from 'react';

const Carousel = ({ cards }) => {
  return (
    <div className="overflow-x-auto whitespace-nowrap" style={{ '-ms-overflow-style': 'none', 'scrollbar-width': 'none' }}>
    {cards.map((card, index) => (
      <div key={index} className="inline-block mr-6 w-full md:w-2/3 lg:w-2/5 py-6 h-4/5">
        <div className={`bg-${card.background} shadow-lg p-4 rounded-2xl hover:scale-115 `} >
          {/* Render your card content here */}
          <p className={`text-lg mt-4 text-${card.text} w-ful h-auto ml-2 text-wrap`}>{card.title}</p>
          <p className={`text-${card.text} mt-4 text-2xl text-wrap ml-2 font-bold`} >{card.description}</p>
          <div className='h-96'>
          <Image src={card.img} className="mt-4 mb-8 h-80 w-full bg-contain"/>
</div>
        </div>
      </div>
    ))}
  </div>

  );
};




const Carousel_second = ({ cards }) => {
  return (
    <div className="overflow-x-auto whitespace-nowrap ml-8" style={{ '-ms-overflow-style': 'none', 'scrollbar-width': 'none' }}>
    {cards.map((card, index) => (
      <div key={index} className="inline-block mr-4 w-full md:w-2/3 lg:w-2/5  py-4 ml-2 ">
        <div className={`bg-${card.background} shadow-lg p-4 rounded-2xl`} >
          {/* Render your card content here */}
          <p className={`text-lg mt-2 text-${card.text} text-wrap`}>{card.title}</p>
          <h2 className={`text-2xl mt-2 font-bold text-${card.text} text-wrap`}>{card.heading}</h2>
          <p className={`text-${card.text} mt-4 text-2xl text-wrap`}>{card.description}</p>
          <div className='h-96'>
          <Image src={card.img} className='mt-16 mb-8 h-96'/>
          </div>
        </div>
      </div>
    ))}
  </div>

  );
};
const Carousel_third = ({ cards }) => {

  return (
    <div className="overflow-x-auto whitespace-nowrap ml-8" style={{ '-ms-overflow-style': 'none', 'scrollbar-width': 'none' }}>
    {cards.map((card, index) => (
      <div key={index} className="inline-block mr-4 w-full md:w-2/3 lg:w-2/5  py-6 mb-8 ">
        <div className={`bg-white shadow-lg p-4 rounded-2xl hover:scale-105 text-center w-full`}  >
          {/* Render your card content here */}
          <Image src={card.img} className='mt-4 mb-8 w-16 h-auto text-wrap '/>
          
          <p className={`text-xl mt-4 text-${card.titleclr} text-wrap`}>{card.title}</p>
          <p className={`text-${card.dseclr} text-xl text-wrap `}>{card.description}</p>
        </div>
      </div>
    ))}
  </div>

  );
};


const Carousel_fourth = ({ cards }) => {

  return (
    <div className="overflow-x-auto whitespace-nowrap ml-8" style={{ '-ms-overflow-style': 'none', 'scrollbar-width': 'none' }}>
    {cards.map((card, index) => (
      <div key={index} className="inline-block mr-4 w-full md:w-2/3 lg:w-2/5  py-4 md:ml-2">
        <div className={`bg-white shadow-lg p-4 rounded-2xl `} >
          {/* Render your card content here */}
          <p className={`text-2xl  text-${card.text} text-wrap font-bold text-center`}>{card.title}</p>
          <h2 className={`text-2xl mt-2 font-bold text-${card.text} text-wrap`}>{card.heading}</h2>
          <p className={`text-${card.text} mt-4 text-2xl text-wrap`}>{card.description}</p>
          <div className='h-96'>
          <Image src={card.img} className='my-6 h-96'/>
          </div>
          <p className='text-red-500 mt-2'>{card.footerhead}</p>
          <p className='mt-2 text-xl font-bold text-wrap'>{card.footertitle}</p>
          <p className='mt-2'>{card.footertext}</p>
        </div>
      </div>
    ))}
  </div>

  );
};

const Carousel_fifth = ({ cards }) => {

  return (
    <div className="overflow-x-auto whitespace-nowrap ml-8" style={{ '-ms-overflow-style': 'none', 'scrollbar-width': 'none' }}>
    {cards.map((card, index) => (
      <div key={index} className="inline-block mr-4 w-full md:w-2/3 lg:w-2/5  py-4 md:ml-2">
        <div className={`bg-white shadow-lg p-4 rounded-2xl `} >
          {/* Render your card content here */}
          <p className={`text-2xl  text-${card.text} text-wrap font-bold text-center`}>{card.title}</p>
          <h2 className={`text-2xl mt-2 font-bold text-${card.text} text-wrap`}>{card.heading}</h2>
          <p className={`text-${card.text} mt-4 text-2xl text-wrap`}>{card.description}</p>
          <div className='h-96'>
          <Image src={card.img} className='my-6 h-96'/>
          </div>
          <p className='text-red-500 mt-2'>{card.footerhead}</p>
          <p className='mt-2 text-xl font-bold text-wrap'>{card.footertitle}</p>
          <p className='mt-2'>{card.footertext}</p>
        </div>
      </div>
    ))}
  </div>

  );
};


const Carousel_sixth = ({ cards }) => {

  return (
    <div className="overflow-x-auto whitespace-nowrap ml-8" style={{ '-ms-overflow-style': 'none', 'scrollbar-width': 'none' }}>
    {cards.map((card, index) => (
      <div key={index} className="inline-block mr-4 w-full md:w-2/3 lg:w-2/5  py-4 md:ml-2">
        <div className={`bg-white shadow-lg p-4 rounded-2xl`} >
          {/* Render your card content here */}
          <p className={`text-xl  text-wrap `}>{card.title}</p>
          <h2 className={`text-2xl mt-2 text-wrap`}>{card.heading}</h2>
          <p className={`text mt-4 text-2xl text-wrap`}>{card.description}</p>
          <div className='h-96'>
          <Image src={card.img} className='my-6 h-96'/>
          </div>
        </div>
      </div>
    ))}
  </div>

  );
};



const Carousel_seventh = ({ cards }) => {

  return (
    <div className="overflow-x-auto whitespace-nowrap ml-8" style={{ '-ms-overflow-style': 'none', 'scrollbar-width': 'none' }}>
    {cards.map((card, index) => (
      <div key={index} className="inline-block mr-4 w-full md:w-1/2 lg:w-1/3 py-4 md:ml-2">
        <div className={`bg-white shadow-lg p-4 rounded-2xl `} >
          {/* Render your card content here */}
          <p className={`textlg  text-wrap`}>{card.title}</p>
          <h2 className={`text-2xl mt-2 text-wrap`}>{card.heading}</h2>
          <div className='h-96 -mx-4'>
          <Image src={card.img} className='my-6 h-80 w-full' alt='Error'/>
          </div>
        </div>
      </div>
    ))}
  </div>

  );
};

const Carousel_mainpage = ({ cards }) => {

  return (
    <div className="overflow-x-auto whitespace-nowrap" style={{ '-ms-overflow-style': 'none', 'scrollbar-width': 'none' }}>
    {cards.map((card, index) => (
      <div key={index} className="inline-block mr-4 w-4/5 py-6 h-4/5">
        <div className={`relative shadow-lg p-4 rounded-2xl  text-center`} >
          {/* Render your card content here */}
          <p className='px-4'>

          <button className='text-lg border border-solid border-black px-4 py-2 rounded-3xl hover:bg-white'>Stream Now</button>

          <span className={`text-${card.text} mt-8 text-2xl text-wrap ml-2 font-bold tex-wrap`} >{card.title}</span>
          <span className={`text-${card.text} mt-8 text-2xl ml-2 text-wrap`} >{card.description}</span>
          </p>
          <div className='mx-auto absolute sm:top-28 sm:left-64 w-full'>
          <Image src={card.img}/>
          </div>
          <Image src={card.img1} className='my-8  mx-auto bg-cover  sm:w-[90%] h-auto'/>
        </div>
      </div>
    ))}
  </div>

  );
};
export  {Carousel, Carousel_second, Carousel_third,Carousel_fourth, Carousel_fifth,Carousel_sixth,Carousel_seventh,Carousel_mainpage};

