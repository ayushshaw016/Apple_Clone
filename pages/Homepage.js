
// This is the page which will be rendered after landing the webpage

import Image from "next/image"
import mac from "../public/Assets/images/mac.png"
import macbook from "../public/Assets/images/mackbook.jpg"
import iphone from "../public/Assets/images/iphone.png"
import iphone1 from "../public/Assets/images/iphone1.png"
import ipad from "../public/Assets/images/ipad.png"
import ipad1 from "../public/Assets/images/ipad2.jpg"
import applewatch from "../public/Assets/images/applewatch.png"
import applewatch1 from "../public/Assets/images/applewatch1.png"
import airpods from "../public/Assets/images/airpods.png"
import Airtag from "../public/Assets/images/Airtag.png"
import Appletv from "../public/Assets/images/Appletv.png"
import homepod from "../public/Assets/images/Homepod.png"
import student from "../public/Assets/images/student_icon.png"
import location from "../public/Assets/images/location.png"
import Link from "next/link"
import {Carousel, Carousel_second,Carousel_third,Carousel_fourth,Carousel_fifth,Carousel_sixth,Carousel_seventh} from "./Carousel"

import titanium_iphone_edit from "../public/Assets/images/explore1edited.jpg"
import mackbookpro from "../public/Assets/images/mackbookpro.png"
import applewtch2 from "../public/Assets/images/applewatchultra2.jpg"
import ipadpro from "../public/Assets/images/ipadpro.jpg"
import watchse from "../public/Assets/images/watchse.jpg"
import newimg from "../public/Assets/images/new.jpg"
import iphoneedit from "../public/Assets/images/iphoneedited.png"
import {img1, img2,img3,img4,img5} from "../public/Assets/Carousel_sec_img/index.js"
import {img_1,img_2,img_3,img_4,img_5,img_6,img_7,img_8} from "../public/Assets/Carousel_fourth_img/index.js"
import {imgg1,imgg2,imgg3,imgg4,imgg5,imgg6,imgg8,imgg9} from "../public/Assets/Carousel_fifth_img/index.js"
import  {image1, image2,image3,image4} from "../public/Assets/Carousel_sixth_img/index.js"
import lastcarousel from "../public/Assets/images/lastcarousel.jpg"
import {Img1,Img2,Img3,Img4,Img5} from "../public/Assets/Carousel_third_img/index.js"

export default function Homepage(){
    const appleitems = [
        { img:mac,val :"Mac"},
        { img:iphone1,val :"iPhone"},
        { img:ipad,val :"iPad"},
        { img:applewatch1,val :"Apple Watch"},
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
        img:iphoneedit,
        background:'white',
      },
      {
        title: 'MACKBOOK AIR',
        heading:'Designed to go places.',
        description: 'From ₹99900.00‡',
        img:macbook,
        background:'white',

      },
      {
        title: 'IPHONE 15 PRO',
        heading:'Titanium',
        description: 'From ₹5621.00/mo. for 24 mo. with No Cost EMI§ or ₹134900.00‡',
        img:titanium_iphone_edit,
        background:'black',
        text:'white'
      },
      {
        title: 'APPLE WATCH SERIES 9',
        heading:'Smarter.BRighter.Mighter',
        description: 'From ₹41900.00‡',
        img:applewatch,
        background:'black',
        text:'white'


      },
      {
        title: 'IPAD 3',
        heading:'LOVEABLE.DRAWABLE.MAGICAL.',
        description: 'From ₹39900.00‡',
        img:ipad1,
        background:'white',


      },
      {
        title: 'MACKBOOK PRO',
        heading:'MIND-blowing. Head-turning.',
        description: 'From ₹169900.00‡',
        img:mackbookpro,
        background:'white',


      },
      {
        title: 'APPLE WATCH ULTRA 2',
        heading:'Next-level adventure.',
        description: 'From ₹89900.00‡',
        img:applewtch2,
        background:'gray-100'


      },
      {
        title: 'IPAD PRO',
        heading:'SUPERCHARGED by M2',
        description: 'From ₹81900.00‡',
        img:ipadpro,
        background:'black',
        text:'white'


      },
      {
        title: 'APPLE WATCH SE',
        heading:'A great deal to love.',
        description: 'From ₹29900.00‡',
        img:watchse,
        background:'white',


      },
      {
        title: 'NEW',
        heading:'Arm candy. In all-new flavours.',
        description: 'Shop the latest strap styles and colours',
        img:newimg,
        background:'white',


      }
      // Add more cards as needed
    ];
    const cards_second=[
      {
          title: 'APPLE SPECIALIST',
          heading:'Shop one on one with a Specialist online.',
          description: '',
          img:img1,
          background:'white',
        },
        {
          title: 'BUSINESS',
          heading:"From enterprise to small business, we'll work with you.",
          description: '',
          img:img2,
          background:'black',
          text:'white'
        },
        {
          title: 'TODAY AT APPLE',
          heading:'Join free session at your apple store.',
          description: 'Learn about the latest features and how to go further with your Apple devices.',
          img:img3,
          background:'white',

        },
        {
          title: '',
          heading:'Get help setting up your new device in a free Online Personal Session',
          description: '',
          img:img4,
          background:'white',
  
  
        },
        {
          title: 'WATCH AND LEARN',
          heading:'Need Support? Our Teams are here for you.',
          description: '',
          img:img5,
          background:'white',
        }
    ]
    const cards_third=[
      {
          title: 'Excahnge your Smartphone',
          titleclr:'blue-500',
          description: 'Get ₹15000.00 - ₹62300.00 in credit towards a new one',
          desclr:'gray-300',
          
          img:Img1,
        },
        {
          title: 'Customize your mac',
          titleclr:'gray-300',
          description: '',
          desclr:'gray-300',

          img:Img2,
        },
        {
          title: 'Make them yours.',
          titleclr:'gray-300',
          description: 'Engrave a mix of emoji names and numbers for free.',
          desclr:'purple-500',
          img:Img3,

        },
        {
          title: 'Flexiblw ways to pay.',
          titleclr:'green-300',
          description: 'plus No Cost EMI.',
          desclr:'gray-300',
          img:Img4,
  
  
        },
        {
          title: 'Enjoy free delivery or easy pickup',
          titleclr:'green-500',
          description: 'From an Apple store',
          desclr:'gray-300',

          img:Img5,
        },
        {
          title: 'Trade in your eligible Mac, Apple watch iPad for instant credit.*',
          titleclr:'purple-500',
          description: 'In store only',
          desclr:'gray-300',

          img:Img1,
        }
    ]
    const cards_fourth=[
      {
          title: 'In with the new.',
          titleclr:'',
          description: 'Discover fresh new colours for your favourite accessories',
          desclr:'gray',
          footerhead:' ',
          footertitle:' ',
          footertext:'Apple',
          img:img_1,
        },
        {
          title: '',
          titleclr:'',
          description: '',
          desclr:'gray',
          footerhead:'New',
          footertitle:'iPhone 15 Silicone case with MagSafe-Light Blue',
          footertext:'MRP ₹4900.00 (Incl. of all taxes)',
          img:img_2,
        },
        {
          title: '',
          titleclr:'',
          description: '',
          desclr:'gray',
          footerhead:' ',
          footertitle:'IPhone FineWoven Wallet with Magsafe- Pacific Blue',
          footertext:'MRP ₹5900.00 (Incl. of all taxes)',
          img:img_3,
        },
        {
          title: '',
          titleclr:'',
          description: '',
          desclr:'gray',
          footerhead:'New',
          footertitle:'45mm Soft Mint Sport Loop',
          footertext:'MRP ₹4500.00 (Incl. of all taxes)',
          img:img_4,
        },
        {
          title: '',
          titleclr:'',
          description: '',
          desclr:'gray',
          footerhead:'New',
          footertitle:'45mm Soft Mint Sport Band - M/L',
          footertext:'MRP ₹4500.00 (Incl. of all taxes)',
          img:img_5,
        },
        {
          title: '',
          titleclr:'',
          description: '',
          desclr:'gray',
          footerhead:'',
          footertitle:'iPhone 15 Pro FineWoven Case with MagSafe - Evergreen',
          footertext:'MRP ₹5900.00 (Incl. of all taxes)',
          img:img_6,
        },
        {
          title: '',
          titleclr:'',
          description: '',
          desclr:'gray',
          footerhead:'',
          footertitle:'Airtag FineWoven Key Ring - Coral',
          footertext:'MRP ₹3900.00 (Incl. of all taxes)',
          img:img_7,
        },
        {
          title: 'Explore All Accessories',
          titleclr:'',
          description: '',
          desclr:'gray',
          footerhead:'',
          footertitle:'Airtag FineWoven Key Ring - Coral',
          footertext:'MRP ₹3900.00 (Incl. of all taxes)',
          img:img_8,
        }

    ]

    const cards_fifth=[
      {
          title: 'Get 6 months of Apple Music free.',
          titleclr:'',
          description: 'Included with your HomePod, AirPods or selected Beats products.⁺',
          desclr:'',
          footerhead:' ',
          footertitle:' ',
          footertext:'Apple',
          img:imgg1,
        },
        {
          title: '',
          titleclr:'',
          description: '',
          desclr:'gray',
          footerhead:'Free Engraving',
          footertitle:'AirPods Pro (2nd generation) with MagSafe cahrging Case..',
          footertext:'MRP ₹2900.00 (Incl. of all taxes)',
          img:imgg2,
        },
        {
          title: '',
          titleclr:'',
          description: '',
          desclr:'gray',
          footerhead:'HomePod - Midnight',
          footertitle:'',
          footertext:'MRP ₹32900.00 (Incl. of all taxes)',
          img:imgg3,
        },
        {
          title: '',
          titleclr:'',
          description: '',
          desclr:'gray',
          footerhead:'HomePod mini - Yellow',
          footertitle:'',
          footertext:'MRP ₹10900.00 (Incl. of all taxes)',
          img:imgg4,
        },
        {
          title: '',
          titleclr:'',
          description: '',
          desclr:'gray',
          footerhead:'AirPods Max - Silver',
          footertitle:'45mm Soft Mint Sport Band - M/L',
          footertext:'MRP ₹59900.00 (Incl. of all taxes)',
          img:imgg5,
        },
        {
          title: '',
          titleclr:'',
          description: '',
          desclr:'gray',
          footerhead:'Free Engraving',
          footertitle:'AirPods (3rd generation) with Lighting Charging Case',
          footertext:'MRP ₹19900.00 (Incl. of all taxes)',
          img:imgg6,
        },
        {
          title: '',
          titleclr:'',
          description: '',
          desclr:'gray',
          footerhead:'',
          footertitle:'Beats Studion Buds + True Wireless Noise Cancelling...',
          footertext:'MRP ₹19900.00 (Incl. of all taxes)',
          img:imgg8,
        },
        {
          title: '',
          titleclr:'',
          description: '',
          desclr:'gray',
          footerhead:'',
          footertitle:'beats Studio Buds True Wireless Noise cancelling...',
          footertext:'MRP ₹16900.00 (Incl. of all taxes)',
          img:imgg9,
        }

    ]

    const cards_sixth = [
      {
        title: 'APPLE TV+',
        heading:'Get 3 months of Apple TV+ free when you buy an apple device.',
        description: '',
        img:image1,
      },
      {
        title: '',
        heading:'FOur Apple services. One easy subscription.',
        description: '',
        img:image2,

      },{
        title: '',
        heading:'We  have got you covered.',
        description: 'AppleCare+ now comes with unlimited repairs for accidental damage protection.',
        img:image3,
      },{
        title: 'Home',
        heading:'See how one app ca control your entire home.',
        description: '',
        img:image4,
      },
      // Add more cards as needed
    ];


    const cards_seventh =[
      {
        title:'EDUCATION',
        heading:'Save on a new MAc wioth education pricing.',
        img:lastcarousel
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
                <Link className="text-blue-400 hover:underline hover:cursor-pointer" href="https://www.google.com/maps/@21.0680074,82.7525294,5z?authuser=0&entry=ttu" target="_blank">Find one near you &gt;</Link>
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
        </div>
        


        <div className="container mx-auto py-8">
      <h1 className="text-3xl ml-4 my-2"><span className="font-bold">The Latest.</span><span className="text-gray-700">Take a look at what’s new right now.</span></h1>
      <Carousel cards={cards} />
    </div>

    <div className="container mx-auto py-8">
      <h1 className="text-3xl ml-4 my-2"><span className="font-bold">Help is Here.</span><span className="text-gray-700">Whenever and however you need it.</span></h1>
      <Carousel_second cards={cards_second} />
    </div>
    <div className="container mx-auto py-8">
      <h1 className="text-3xl ml-4 my-2"><span className="font-bold"> The Apple Store difference.</span><span className="text-gray-700"> Even more reasons to shop with us.</span></h1>
      <Carousel_third cards={cards_third} />
    </div>
    <div className="container mx-auto py-8">
      <h1 className="text-3xl ml-4 my-2"><span className="font-bold"> Accessories.</span><span className="text-gray-700">  Essentials that pair perfectly with your favourite devices.</span></h1>
      <Carousel_fourth cards={cards_fourth} />
    </div>
   

    <div className="container mx-auto py-8">
      <h1 className="text-3xl ml-4 my-2"><span className="font-bold"> Accessories.</span><span className="text-gray-700">  Essentials that pair perfectly with your favourite devices.</span></h1>
      <Carousel_fifth cards={cards_fifth} />
    </div>


    <div className="container mx-auto py-8">
      <h1 className="text-3xl ml-4 my-2"><span className="font-bold"> The Apple experience.</span><span className="text-gray-700">Do even more with Apple products and services.</span></h1>
      <Carousel_sixth cards={cards_sixth} />
    </div>




    <div className="container mx-auto py-8">
      <h1 className="text-3xl ml-4 my-2"><span className="font-bold"> Special stores. </span><span className="text-gray-700">Exclusive savings for students and educators.</span></h1>
      <Carousel_seventh cards={cards_seventh} />
    </div>
      <p className="text-4xl font-bold ml-4 mt-4">Quick Links</p>
        <div className="ml-4 pt-6">
          <span className="mt-2 md:mt-0 block sm:inline px-4 py-2 mr-2 border border-solid border-gray-500 rounded-2xl hover:text-white hover:bg-gray-800 hover:cursor-pointer">Order Status</span>
          <span className="mt-2 md:mt-0 block sm:inline px-4 py-2 mr-2 border border-solid border-gray-500 rounded-2xl hover:text-white hover:bg-gray-800 hover:cursor-pointer">Shopping Help</span>
          <span className="mt-2 md:mt-0 block sm:inline px-4 py-2 mr-2 border border-solid border-gray-500 rounded-2xl hover:text-white hover:bg-gray-800 hover:cursor-pointer">Your Saves</span>
        </div>
      </div>
    </div>

    
    </>)
    
}