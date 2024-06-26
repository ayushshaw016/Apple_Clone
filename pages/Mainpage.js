import titanium_iphone from "../public/Assets/images/explore1.jpg";
import blue_iphone from "../public/Assets/images/explore2.jpg";
import blue_iphone_img from "../public/Assets/images/blue_iphone.jpg";
import mackbook from "../public/Assets/images/mackbook.jpg";
import watches from "../public/Assets/images/watches.jpg";
import ipad from "../public/Assets/images/ipad.jpg";
import iphoneedit from "../public/Assets/images/iphoneedited1.png";
import airpods from "../public/Assets/images/airpods.jpg";
import mackbookpro from "../public/Assets/images/mackbookpro.jpg";
import homepodmini from "../public/Assets/images/homepodmini.jpg";
import tradein from "../public/Assets/images/hero.jpg";
import Link from "next/link";
import Image from "next/image";
import Carousel_mainpage from "../components/Carousel";
import frame from "../public/Assets/images/frame.png";
import mac from "../public/Assets/images/mac.png";

// importing the video

export default function MainPage() {
  const cards_mainpage = [
    {
      title: "IPHONE 15",
      heading: "Newphoria",
      description:
        "From ₹3329.00/mo. for 24 mo. with No Cost EMI§ or ₹79900.00‡",
      img: mac,
      img1: frame,
    },
    {
      title: "MACKBOOK AIR",
      heading: "Designed to go places.",
      description: "From ₹99900.00‡",
      img: mac,
      img1: frame,
    },
    {
      title: "IPHONE 15 PRO",
      heading: "Titanium",
      description:
        "From ₹5621.00/mo. for 24 mo. with No Cost EMI§ or ₹134900.00‡",
      img: mac,
      img1: frame,
    },
    {
      title: "APPLE WATCH SERIES 9",
      heading: "Smarter.BRighter.Mighter",
      description: "From ₹41900.00‡",
      img: mac,
      img1: frame,
    },
    {
      title: "IPAD 3",
      heading: "LOVEABLE.DRAWABLE.MAGICAL.",
      description: "From ₹39900.00‡",
      img: mac,
      img1: frame,
    },
    {
      title: "MACKBOOK PRO",
      heading: "MIND-blowing. Head-turning.",
      description: "From ₹169900.00‡",
      img: mac,
      img1: frame,
    },
    {
      title: "APPLE WATCH ULTRA 2",
      heading: "Next-level adventure.",
      description: "From ₹89900.00‡",
      img: mac,
      img1: frame,
    },
    {
      title: "IPAD PRO",
      heading: "SUPERCHARGED by M2",
      description: "From ₹81900.00‡",
      img: mac,
      img1: frame,
    },
    {
      title: "APPLE WATCH SE",
      heading: "A great deal to love.",
      description: "From ₹29900.00‡",
      img: mac,
      img1: frame,
    },
    {
      title: "NEW",
      heading: "Arm candy. In all-new flavours.",
      description: "Shop the latest strap styles and colours",
      img: mac,
      img1: frame,
    },
    // Add more cards as needed
  ];
  return (
    <>
      <div className="bg-black pb-8 ">
        <p className="bg-slate-800 text-white p-3 text-center">
          Get up to 24 months No Cost EMI on all iPhone models from most leading
          banks.‡
          <Link href="/Learnmore">
            <span className="text-blue-600 hover:underline hover:cursor-pointer">
              Shop now
            </span>
          </Link>
        </p>
        {/* <div>
      <video controls width="100%" height="auto" src={iPhonemp4} type="video/mp4"/>
    </div> */}
        <div className="mx-auto pb-16">
          <h1 className="text-6xl text-center text-white pt-8 font-bold">
            iPhone 15 Pro
          </h1>
          <h1 className="text-3xl text-center text-white pt-6 font-bold">
            Titanium.So strong.So light.So Pro
          </h1>
          <div className="text-center text-white mt-6">
            <span className="border border-black border-xl rounded-3xl text-2xl bg-blue-800 py-2 px-4 hover:cursor-pointer hover:bg-blue-700">
              Learn More
            </span>
            <span className="border border-blue-700 hover:bg-blue-700 px-4 py-2 text-2xl rounded-3xl ml-3 hover:cursor-pointer">
              Buy
            </span>
          </div>

          <Image
            src={titanium_iphone}
            alt="error"
            className="text-white w-96 h-auto -rotate-90 mx-auto mt-20 transform transition duration-500 ease-in-out hover:rotate-180 rounded-3xl"
            data-aos="fade-up"
          />
        </div>
      </div>
      <div className="bg-slate-100 py-16 mb-6">
        <h1 className="text-6xl font-bold text-center mt-16 font-sans">
          iPhone 15
        </h1>
        <h1 className="text-3xl  text-center mt-2 font-sans">
          New camera. New design. Newphoria
        </h1>
        <div className="text-center mt-6">
          <span className="border border-black border-xl text-white rounded-3xl text-2xl bg-blue-800 py-2 px-4 hover:cursor-pointer hover:bg-blue-700">
            Learn More
          </span>
          <span className="border border-blue-700 text-blue-700 hover:text-white hover:bg-blue-700 px-4 py-2 text-2xl rounded-3xl ml-3 hover:cursor-poiner ">
            Buy
          </span>
        </div>
        <div className="mt-4 bg-slate-100">
          <Image
            src={iphoneedit}
            className="w-full  h-['40%'] bg-cover rounded-3xl pb-16 "
          />
        </div>
      </div>

      <div className="pb-8 pt-4 bg-slate-100 mb-6">
        <h1 className="text-6xl font-bold text-center mt-16 font-sans">
          MackBook Air
        </h1>
        <h1 className="text-3xl  text-center mt-2 font-sans">
          Supercharged By M3
        </h1>
        <div className="text-center mt-6">
          <span className="border border-black border-xl text-white rounded-3xl text-2xl bg-blue-800 py-2 px-4 hover:cursor-pointer hover:bg-blue-700">
            Learn More
          </span>
          <span className="border border-blue-700 text-blue-700 hover:text-white hover:bg-blue-700 px-4 py-2 text-2xl rounded-3xl ml-3 hover:cursor-poiner ">
            Buy
          </span>
        </div>
        <div className="">
          <Image
            src={mackbook}
            className="w-2/5 h-full mx-auto rounded-3xl mb-4 mt-4"
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row mb-6 ">
        <div className="md:w-1/2 h-2/3 rounded-xl mr-2 bg-black ml-3 pb-8">
          <h1 className="text-6xl font-bold text-center mt-16 font-sans text-white">
            Watches
          </h1>
          <h1 className="text-2xl  text-red-500 font-bold text-center  font-sans">
            SERIES 9
          </h1>
          <h1 className="text-3xl  text-center mt-2 font-sans text-white">
            Smarte.Brighter.Mighter
          </h1>
          <div className="text-center mt-6">
            <span className="border border-black border-xl text-white rounded-3xl  bg-blue-800 py-2 px-4 hover:cursor-pointer hover:bg-blue-700">
              Learn More
            </span>
            <span className="border border-blue-700 text-blue-700 hover:text-white hover:bg-blue-700 px-4 py-2  rounded-3xl ml-3 hover:cursor-poiner ">
              Buy
            </span>
          </div>
          <div className="">
            <Image
              src={watches}
              className="w-3/5 h-full mx-auto rounded-3xl pb-6 mt-4"
              data-aos="fade-up"
              data-aos-delay="700"
            />
          </div>
        </div>
        <div className="md:w-1/2 bg-slate-100 mr-3 rounded-xl">
          <h1 className="text-6xl font-bold text-center mt-16 font-sans">
            iPad
          </h1>
          <h1 className="text-3xl  text-center mt-2 font-sans">
            Lovable.Drawable.Magical
          </h1>
          <div className="text-center mt-6">
            <span className="border border-black border-xl text-white rounded-3xl bg-blue-800 py-2 px-4 hover:cursor-pointer hover:bg-blue-700">
              Learn More
            </span>
            <span className="border border-blue-700 text-blue-700 hover:text-white hover:bg-blue-700 px-4 py-2  rounded-3xl ml-3 hover:cursor-poiner ">
              Buy
            </span>
          </div>
          <div className="">
            <Image
              src={ipad}
              className="w-2/5 h-full mx-auto rounded-3xl pb-6 mt-4"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row mb-6 ">
        <div className="md:w-1/2 h-2/3 rounded-xl mr-2 bg-black ml-3 pb-8">
          <h1 className="text-6xl font-bold text-center mt-16 font-sans text-white">
            AirPods Pro
          </h1>

          <h1 className="text-3xl  text-center mt-2 font-sans text-white">
            Adaptive Audio.Now Playing
          </h1>
          <div className="text-center mt-6">
            <span className="border border-black border-xl text-white rounded-3xl  bg-blue-800 py-2 px-4 hover:cursor-pointer hover:bg-blue-700">
              Learn More
            </span>
            <span className="border border-blue-700 text-blue-700 hover:text-white hover:bg-blue-700 px-4 py-2  rounded-3xl ml-3 hover:cursor-poiner ">
              Buy
            </span>
          </div>
          <div className="">
            <Image
              src={airpods}
              className="w-3/5 h-full mx-auto rounded-3xl pb-6 mt-4"
            />
          </div>
        </div>
        <div className="md:w-1/2 bg-slate-100 mr-3 rounded-xl">
          <h1 className="text-6xl font-bold text-center mt-16 font-sans">
            MackBook Pro
          </h1>
          <h1 className="text-3xl  text-center mt-2 font-sans">
            Mind-blowing.Head-turning
          </h1>
          <div className="text-center mt-6">
            <span className="border border-black border-xl text-white rounded-3xl bg-blue-800 py-2 px-4 hover:cursor-pointer hover:bg-blue-700">
              Learn More
            </span>
            <span className="border border-blue-700 text-blue-700 hover:text-white hover:bg-blue-700 px-4 py-2  rounded-3xl ml-3 hover:cursor-poiner ">
              Buy
            </span>
          </div>
          <div className="">
            <Image
              src={mackbookpro}
              className="w-2/5 h-full mx-auto rounded-3xl pb-6 mt-4"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row mb-6 bg-slate-50">
        <div className="md:w-1/2 h-2/3 rounded-xl mr-2  ml-3 pb-8">
          <h1 className="text-6xl font-bold text-center mt-16 font-sans">
            HomePod mini
          </h1>

          <div className="text-center mt-6">
            <span className="border border-black border-xl text-white rounded-3xl  bg-blue-800 py-2 px-4 hover:cursor-pointer hover:bg-blue-700">
              Learn More
            </span>
            <span className="border border-blue-700 text-blue-700 hover:text-white hover:bg-blue-700 px-4 py-2  rounded-3xl ml-3 hover:cursor-poiner ">
              Buy
            </span>
          </div>
          <div className="mt-4">
            <Image
              src={homepodmini}
              className="w-full h-auto mx-auto rounded-3xl pb-6 mt-4"
            />
          </div>
        </div>
        <div className="md:w-1/2 bg-slate-100 mr-3 rounded-xl">
          <h1 className="text-6xl font-bold text-center mt-16 font-sans">
            Trade In
          </h1>
          <h1 className="text-3xl  text-center mt-2 font-sans">
            Upgrade and Save. It's that easy.
          </h1>
          <div className="text-center mt-6">
            <span className="border border-black border-xl text-white rounded-3xl bg-blue-800 py-2 px-4 hover:cursor-pointer hover:bg-blue-700">
              Learn More
            </span>
            <span className="border border-blue-700 text-blue-700 hover:text-white hover:bg-blue-700 px-4 py-2  rounded-3xl ml-3 hover:cursor-poiner ">
              Buy
            </span>
          </div>
          <div className="mx-4 mt-4">
            <Image
              src={tradein}
              className="w-full h-auto mx-auto rounded-3xl"
            />
          </div>
        </div>
      </div>

      <div className="container mx-auto py-8 ">
        <Carousel_mainpage cards={cards_mainpage} />
      </div>
    </>
  );
}
