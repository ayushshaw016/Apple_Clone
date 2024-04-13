import { useState } from "react"
import Store from "./Navbar_items/Store";
import Mac from "./Navbar_items/Mac";
import Ipad from "./Navbar_items/Ipad";
import Iphone from "./Navbar_items/Iphone";
import Watches from "./Navbar_items/Watch";
import Image from "next/image";
import apple_logo from "../../public/Assets/images/apple_logo.png"
import Airpods from "./Navbar_items/Airpods";
export default function Navbar(){
  const [store, setstore] = useState(false);
  const [mac, setmac] = useState(false);
  const [ipad, setipad] = useState(false);
  const [iphone, setiphone] = useState(false);
  const [watch, setwatch] = useState(false);
  const [airpods, setairpods] = useState(false);
  const [tvandhome, settvandhome] = useState(false);
  const [accesories, setaccessories] = useState(false);
  const [support, setsupport] = useState(false);

    return (
        <>
           <nav className=" bg-gray-600 text-gray-400 hover:bg-black">
    <ul className="flex flex-col lg:flex-row ml-36">
        <li className="m-3 cursor-pointer " >
            {/* <Image src={apple_logo} className="w-1/6 h-auto"/> */}
        </li>
        <li className="m-3 cursor-pointer" onMouseEnter={()=>{setstore(true)}} onMouseLeave={()=>{setstore(false)}}  data-aos="fade-dowm">Store</li>
        <li className="m-3 cursor-pointer" onMouseEnter={()=>{setmac(true)}} onMouseLeave={()=>{setmac(false)}}>Mac</li>
        <li className="m-3 cursor-pointer" onMouseEnter={()=>{setipad(true)}} onMouseLeave={()=>{setipad(false)}}>iPad</li>
        <li className="m-3 cursor-pointer" onMouseEnter={()=>{setiphone(true)}} onMouseLeave={()=>{setiphone(false)}}>iPhone</li>
        <li className="m-3 cursor-pointer" onMouseEnter={()=>{setwatch(true)}} onMouseLeave={()=>{setwatch(false)}}>Watch</li>
        <li className="m-3 cursor-pointer" onMouseEnter={()=>{setairpods(true)}} onMouseLeave={()=>{setairpods(false)}}>Airpods</li>
        <li className="m-3 cursor-pointer">TV & Home</li>
        <li className="m-3 cursor-pointer">Entertainment</li>
        <li className="m-3 cursor-pointer">Accessories</li>
        <li className="m-3 cursor-pointer">Support</li>
        <li className="m-3 cursor-pointer">Home</li>
        <li className="m-3 cursor-pointer">Home</li>
    </ul>
</nav>

{store && <Store/>}
{mac && <Mac/>}
{ipad && <Ipad/>}
{iphone && <Iphone/>}
{watch && <Watches/>}
{airpods && <Airpods/>}
        </>
    )

}
