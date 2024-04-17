
// This is the page which will be rendered after landing the webpage

import Image from "next/image"
import mac from "../public/Assets/images/mac.png"
import iphone from "../public/Assets/images/iphone.png"
import ipad from "../public/Assets/images/ipad.png"
import applewatch from "../public/Assets/images/applewatch.png"
import airpods from "../public/Assets/images/airpods.png"
import Airtag from "../public/Assets/images/Airtag.png"
import Appletv from "../public/Assets/images/Appletv.png"
import homepod from "../public/Assets/images/Homepod.png"
import student from "../public/Assets/images/student_icon.png"
import location from "../public/Assets/images/location.png"
import Link from "next/link"
import {Carousel, Carousel_second,Carousel_third} from "./Carousel"
export default function Homepage(){
    const appleitems = [
        { img:mac,val :"Mac"},
        { img:iphone,val :"iPhone"},
        { img:ipad,val :"iPad"},
        { img:applewatch,val :"Apple Watch"},
        { img:airpods,val :"Airpods"},
        { img:Airtag,val :"Air Tag"},
        { img:Appletv,val :"Apple TV 4K"},
        { img:homepod,val :"Homepod"}
    ]

    const cards = [
      {
        title: 'IPHONE 15',
        heading:'Newphoria',
        description: 'From ₹3329.00/mo. for 24 mo. with No Cost EMI§ or ₹79900.00‡',
        img:mac,
        background:'white',
      },
      {
        title: 'MACKBOOK AIR',
        heading:'Designed to go places.',
        description: 'From ₹99900.00‡',
        img:mac,
        background:'white',

      },
      {
        title: 'IPHONE 15 PRO',
        heading:'Titanium',
        description: 'From ₹5621.00/mo. for 24 mo. with No Cost EMI§ or ₹134900.00‡',
        img:mac,
        background:'black',
        text:'white'
      },
      {
        title: 'APPLE WATCH SERIES 9',
        heading:'Smarter.BRighter.Mighter',
        description: 'From ₹41900.00‡',
        img:mac,
        background:'black',
        text:'white'


      },
      {
        title: 'IPAD 3',
        heading:'LOVEABLE.DRAWABLE.MAGICAL.',
        description: 'From ₹39900.00‡',
        img:mac,
        background:'white',


      },
      {
        title: 'MACKBOOK PRO',
        heading:'MIND-blowing. Head-turning.',
        description: 'From ₹169900.00‡',
        img:mac,
        background:'white',


      },
      {
        title: 'APPLE WATCH ULTRA 2',
        heading:'Next-level adventure.',
        description: 'From ₹89900.00‡',
        img:mac,
        background:'white',


      },
      {
        title: 'IPAD PRO',
        heading:'SUPERCHARGED by M2',
        description: 'From ₹81900.00‡',
        img:mac,
        background:'black',
        text:'white'


      },
      {
        title: 'APPLE WATCH SE',
        heading:'A great deal to love.',
        description: 'From ₹29900.00‡',
        img:mac,
        background:'white',


      },
      {
        title: 'NEW',
        heading:'Arm candy. In all-new flavours.',
        description: 'Shop the latest strap styles and colours',
        img:mac,
        background:'white',


      }
      // Add more cards as needed
    ];
    const cards_second=[
      {
          title: 'APPLE SPECIALIST',
          heading:'Shop one on one with a Specialist online.',
          description: '',
          img:mac,
          background:'white',
        },
        {
          title: 'BUSINESS',
          heading:"From enterprise to small business, we'll work with you.",
          description: '',
          img:mac,
          background:'black',
          text:'white'
        },
        {
          title: 'TODAY AT APPLE',
          heading:'Join free session at your apple store.',
          description: 'Learn about the latest features and how to go further with your Apple devices.',
          img:mac,
          background:'white',

        },
        {
          title: '',
          heading:'Get help setting up your new device in a free Online Personal Session',
          description: '',
          img:mac,
          background:'white',
  
  
        },
        {
          title: 'ATCH AND LEARN',
          heading:'Need Support? Our Teams are here for you.',
          description: '',
          img:mac,
          background:'white',
        }
    ]





    const cards_third=[
      {
          title: 'Excahnge your Smartphone',
          titleclr:'blue',
          description: 'Get ₹15000.00 - ₹62300.00 in credit towards a new one',
          desclr:'gray',
          
          img:mac,
        },
        {
          title: 'Customize your mac',
          titleclr:'gray',
          description: '',
          desclr:'gray',

          img:mac,
        },
        {
          title: 'Make them yours.',
          titleclr:'gray',
          description: 'Engrave a mix of emoji names and numbers for free.',
          desclr:'purple',
          img:mac,

        },
        {
          title: 'Flexiblw ways to pay.',
          titleclr:'green',
          description: 'plus No Cost EMI.',
          desclr:'gray',
          img:mac,
  
  
        },
        {
          title: 'Enjoy free delivery or easy pickup',
          titleclr:'green',
          description: 'From an Apple store',
          desclr:'gray',

          img:mac,
        }
    ]
    return(<>
    <div className="bg-slate-100">

    <p className="bg-slate-800 text-white p-3 text-center">
                Get up to 24 months No Cost EMI on all iPhone models from most leading banks.‡ <Link href="/Learnmore"><span className="text-blue-600 hover:underline hover:cursor-pointer">Shop now</span></Link>
                </p>
    <div className="mx-6 md:mx-16">

    <div className=" ml-2 md:ml-6">
        <div className="flex flex-col md:flex-row pt-6 md:pt-32">
      <div className="md:w-2/3">
        <p className="text-center text-gray-700 text-6xl items-end"><span className="text-black font-bold">Store.</span> The best way to buy the products you love.</p>
      </div>
      <div className="md:w-1/3 ml-6 md:ml-12 mt-6 md:mt-0">
        <div>
            <Image src={student} className="w-1/12 h-auto rounded-full inline-block"/>
                <div className="mb-6 mr-6">
                <p className="font-bold">Need Shopping Help?</p>
                <p className="text-blue-400 hover:underline hover:cursor-pointer">Ask a Specialist</p>
                </div>
        </div>


        <div>
            <Image src={location} className="w-1/12 h-auto rounded-full inline-block"/>

                <div className="mb-6 mr-6">
                <p className="font-bold">Visit an Apple Store</p>
                <Link className="text-blue-400 hover:underline hover:cursor-pointer" href="https://www.google.com/maps/search/apple+store/@25.8440554,84.8903104,10z/data=!3m1!4b1?entry=ttu" target="_blank">Find one near you &gt;</Link>
                </div>
        </div>
      </div>
        </div>



        {/* Diffrent item of the Apple */}
        <div className="flex flex-col sm:flex-row justify-around  mt-6 md:mt-14">
        {appleitems.map((items, index) =>(
    <div className="ml-4" key={index}>
            <Image src={items.img} className="h-auto"/>
             <p className="text-lg text-center">{items.val}</p>
             </div>
        ))}
        </div>

        <p className="text-4xl text-gray-500 mt-20"><span className="font-bold text-black">The latest.</span> Take a look at what’s new right now.</p>
        </div>
        <p className="text-4xl font-bold ml-4 mt-4">Quick Links</p>
        <div className="ml-4 mt-4">
          <span className="mt-2 md:mt-0 block sm:inline px-4 py-2 mr-2 border border-solid border-gray-500 rounded-2xl hover:text-white hover:bg-gray-800 hover:cursor-pointer">Order Status</span>
          <span className="mt-2 md:mt-0 block sm:inline px-4 py-2 mr-2 border border-solid border-gray-500 rounded-2xl hover:text-white hover:bg-gray-800 hover:cursor-pointer">Shopping Help</span>
          <span className="mt-2 md:mt-0 block sm:inline px-4 py-2 mr-2 border border-solid border-gray-500 rounded-2xl hover:text-white hover:bg-gray-800 hover:cursor-pointer">Your Saves</span>
        </div>


        <div className="container mx-auto py-8">
      <h1 className="text-4xl"><span className="font-bold">The Latest.</span><span className="text-gray-700">Take a look at what’s new right now.</span></h1>
      <Carousel cards={cards} />
    </div>

    <div className="container mx-auto py-8">
      <h1 className="text-4xl"><span className="font-bold">Help is Here.</span><span className="text-gray-700">Whenever and however you need it.</span></h1>
      <Carousel_second cards={cards_second} />
    </div>
    <div className="container mx-auto py-8">
      <h1 className="text-4xl"><span className="font-bold"> The Apple Store difference..</span><span className="text-gray-700"> Even more reasons to shop with us.</span></h1>
      <Carousel_third cards={cards_third} />
    </div>

   
      </div>

    </div>

    
    </>)
    
}