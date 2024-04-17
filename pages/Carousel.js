import Image from 'next/image';
import React from 'react';

const Carousel = ({ cards }) => {
  return (
    <div className="overflow-x-auto whitespace-nowrap" style={{ '-ms-overflow-style': 'none', 'scrollbar-width': 'none' }}>
    {cards.map((card, index) => (
      <div key={index} className="inline-block mr-4 w-2/5 py-6 h-4/5">
        <div className={`bg-${card.background} shadow-lg p-4 rounded-2xl hover:scale-115 px-4 hover:mx-2`} >
          {/* Render your card content here */}
          <p className={`text-lg mt-4 text-${card.text} w-ful h-auto ml-2 text-wrap`}>{card.title}</p>
          <p className={`text-${card.text} mt-4 text-xl text-wrap ml-2`} >{card.description}</p>
          <Image src={card.img} className='mt-16 mb-8'/>
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
      <div key={index} className="inline-block mr-4 w-2/5 py-6">
        <div className={`bg-${card.background} shadow-lg p-4 rounded-2xl hover:scale-105`} >
          {/* Render your card content here */}
          <p className={`text-lg mt-4 text-${card.text} text-wrap`}>{card.title}</p>
          <h2 className={`text-2xl mt-4 font-bold text-${card.text} text-wrap`}>{card.heading}</h2>
          <p className={`text-${card.text} mt-4 text-2xl text-wrap`}>{card.description}</p>
          <Image src={card.img} className='mt-16 mb-8'/>
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
      <div key={index} className="inline-block mr-4 w-2/5 py-6 mb-8 "style={{minheight: '70%'}}>
        <div className={`bg-white shadow-lg p-4 rounded-2xl hover:scale-105`}  >
          {/* Render your card content here */}
          <Image src={card.img} className='mt-4 mb-8 w-32 h-auto text-wrap'/>
          <p className={`text-xl mt-4 text-${card.titleclr}-600 text-wrap`}>{card.title}</p>
          <p className={`text-${card.desclr}-600 text-xl text-wrap `}>{card.description}</p>
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
        <div className={`bg-slate-50 shadow-lg p-4 rounded-2xl hover:scale-115 px-4 hover:mx-2 text-center`} >
          {/* Render your card content here */}
          <p className={`text-lg mt-4 text-${card.text} w-ful h-auto ml-2 text-wrap`}>{card.title}</p>
          <p className={`text-${card.text} mt-4 text-xl text-wrap ml-2`} >{card.description}</p>
          <Image src={card.img} className='mt-16 mb-8 mx-auto'/>
        </div>
      </div>
    ))}
  </div>

  );
};
export  {Carousel, Carousel_second, Carousel_third, Carousel_mainpage};

