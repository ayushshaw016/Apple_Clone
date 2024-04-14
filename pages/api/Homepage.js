
// This is the page which will be rendered after landing the webpage

import Image from "next/image"
import student from "../../public/Assets/images/student_icon.png"
export default function Homepage(){
    const appleitems = [
        { img:student,val :"Apple"},
        { img:student,val :"Apple"},
        { img:student,val :"Apple"},
        { img:student,val :"Apple"},
        { img:student,val :"Apple"},
        { img:student,val :"Apple"},
        { img:student,val :"Apple"},
        { img:student,val :"Apple"}
    ]
    return(<>
    <div className="bg-slate-100">
    <p className="bg-slate-800 text-white p-3 text-center">
                Get up to 24 months No Cost EMI on all iPhone models from most leading banks.‡ <span className="text-blue-600 hover:underline hover:cursor-pointer">Shop now</span>
                </p>
    <div className=" ml-2 md:ml-6">
        <div className="flex flex-col md:flex-row pt-6 md:pt-32">
      <div className="md:w-2/3">
        <p className="text-center text-gray-700 text-6xl items-end"><span className="text-black font-bold">Store.</span> The best way to buy the products you love.</p>
      </div>
      <div className="md:w-1/3 ml-6 md:ml-0 mt-6 md:mt-0">
        <div>
            <Image src={student} className="w-1/12 h-auto rounded-full inline-block"/>
                <div className="mb-6 mr-6">
                <p className="font-bold">Need Shopping Help?</p>
                <p className="text-blue-400 hover:underline hover:cursor-pointer">Ask a Specialist</p>
                </div>
        </div>


        <div>
            <Image src={student} className="w-1/12 h-auto rounded-full inline-block"/>

                <div className="mb-6 mr-6">
                <p className="font-bold">Visit an Apple Store</p>
                <p className="text-blue-400 hover:underline hover:cursor-pointer">Find one near you &gt;</p>
                </div>
        </div>
      </div>
        </div>



        {/* Diffrent item of the Apple */}
        <div className="flex flex-col md:flex-row justify-around  mt-6 md:mt-14">
        {appleitems.map((items, index) =>(
    <div className="ml-4" key={index}>
            <Image src={items.img} className="w-1/2 h-auto"/>
             <p className="md:ml-2 text-lg">{items.val}</p>
             </div>
        ))}
        </div>

        <p className="text-4xl text-gray-500 mt-20"><span className="font-bold text-black">The latest.</span> Take a look at what’s new right now.</p>
        </div>
        </div>
    </>)
}