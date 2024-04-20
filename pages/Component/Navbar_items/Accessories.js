import Link from "next/link";

export default function Accessories(){
    return(<>
         <div className="flex flex-col md:flex-row bg-black text-white py-16 justify-center z-40" data-aos="fade-down" data-aos-delay="900">
        <div className="ml-12 mt-4">
        <h1 className="text-slate-300">Shop Accessories</h1>
            <h1 className="text-xl ">Shop  All Accessories</h1>
            <h1 className="text-xl ">Mac</h1>
            <h1 className="text-xl ">iPad</h1>
            <h1 className="text-xl ">iPhone</h1>
            <h1 className="text-xl ">Apple Watch</h1>
            <h1 className="text-xl ">AirPods</h1>
            <h1 className="text-xl ">TV &amp; Home</h1>

        </div>
        <div className="ml-12 mt-4">
        <h1 className="text-slate-300">Explore Accessories</h1>
            <h1 className="text-xl ">Made by Apple</h1>
            <h1 className="text-xl ">AirTag</h1>

        </div>
        </div>
    </>)
}