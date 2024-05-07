import student from "../public/Assets/images/student_icon.png";
import Image from "next/image";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Link from "next/link";
export default function Learnmore() {
  return (
    <>
      <Navbar />

      <p className="bg-slate-800 text-white p-3 text-center">
        Get up to 24 months No Cost EMI on all iPhone models from most leading
        banks.‡
        <Link href="/Learnmore">
          <span className="text-blue-600 hover:underline hover:cursor-pointer">
            Shop now
          </span>
        </Link>
      </p>
      <div className="mx-8 md:mx-32 bg-gray-50 my-8 border-2 border-solid border-black rounded-xl md:pt-16">
        <div className=" mx-4 md:mx-16 text-xl">
          <div className="float-right mt-4 ml-4">
            <Link href="/">
              <span className="rounded-full underline border font-bold border-solid border-black px-4 py-2 hover:text-white hover:bg-red-400 hover:border-red-500">
                X
              </span>
            </Link>
          </div>
          <p className="text-6xl font-bold text-center justify-end">
            Buy Now. Pay over Time
          </p>
          <p className="mt-8">
            Choose to pay for your new iPhone with No Cost EMI up to 24 months
            on all iPhone models with most leading banks.
          </p>
          <p className="mt-8">
            See how much your monthly instalment would be with 24 months No Cost
            EMI§
          </p>
          <div className="mt-6">
            <p>iPhone 15 Pro: From ₹5621.00/mo.</p>
            <p>iPhone 15 Pro Max: From ₹6662.00/mo.</p>
          </div>

          <div className="mt-6">
            <p>iPhone 15: From ₹3329.00/mo.</p>
            <p>iPhone 15 Plus: From ₹3746.00/mo.</p>
          </div>

          <div className="mt-6">
            <p>iPhone 14: From ₹2912.00/mo.</p>
            <p>iPhone 14 Plus: From ₹3329.00/mo.</p>
          </div>
          <p className="mt-8">iPhone 13: From ₹2496.00/mo.</p>
          <p className="mt-8">iPhone SE: From ₹2079.00/mo.</p>

          <p className="text-blue-600 hover:underline mt-6 hover:cursor-pointer">
            Shop iPhone &gt;
          </p>
          <p className="mt-6">
            Trade in your smartphone online or in-store for instant credit
            towards your new iPhone and lower your monthly instalment.*
          </p>
          <p className="mt-6">
            Speak to a specialist online or in-store about available options.
          </p>
          <p className="mt-6">
            Check your bank card’s eligibility and calculate your monthly
            instalment options.
          </p>

          <p className="text-blue-600 hover:underline mt-6 hover:cursor-pointer">
            Learn More &gt;
          </p>

          <div className="lg:mx-96 pb-16 mt-4">
            <Image src={student} className="w-1/6 h-auto rounded-full ml-12" />
            <p className="text-sm mt-2">We are here to help</p>
            <p className="text-sm text-blue-600 hover:underline mt-2 hover:cursor-pointer">
              Chap with a Specialist
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
