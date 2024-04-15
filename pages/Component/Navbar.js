import { useState } from "react"
import Store from "./Navbar_items/Store";
import Mac from "./Navbar_items/Mac";
import Ipad from "./Navbar_items/Ipad";
import Iphone from "./Navbar_items/Iphone";
import Watches from "./Navbar_items/Watch";
import Image from "next/image";
import apple_logo from "../../public/Assets/images/apple_logo.png"
import Airpods from "./Navbar_items/Airpods";
import TVandHome from "./Navbar_items/tvandhome";
import Entertainment from "./Navbar_items/Entertainment";
import Accessories from "./Navbar_items/Accessories";
import Support from "./Navbar_items/Support";
import MainPage from "../Mainpage";
import Link from "next/link";
import cart from "../../public/Assets/images/cartbag.jpg"
export default function Navbar(){
  const [store, setstore] = useState(false);
  const [mac, setmac] = useState(false);
  const [ipad, setipad] = useState(false);
  const [iphone, setiphone] = useState(false);
  const [watch, setwatch] = useState(false);
  const [airpods, setairpods] = useState(false);
  const [tvandhome, settvandhome] = useState(false);
  const [entertainment, setentertainment] = useState(false);
  const [accesories, setaccessories] = useState(false);
  const [support, setsupport] = useState(false);

    return (
        <>
           <nav className=" bg-[#464444] text-gray-400 hover:bg-black">
    <ul className="flex flex-col lg:flex-row ml-36 justify-evenly">
    <Link href="/Home">
        <li className="m-3 cursor-pointer mt-4" >
        <svg
          width="14"
          height="18"
          viewBox="0 0 14 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.5545 6.1362C13.4548 6.2172 11.6936 7.2558 11.6936 9.5652C11.6936 12.2364 13.9346 13.1814 14.0017 13.2048C13.9914 13.2624 13.6457 14.499 12.8201 15.759C12.084 16.8678 11.3152 17.9748 10.1457 17.9748C8.97617 17.9748 8.67518 17.2638 7.32506 17.2638C6.00934 17.2638 5.54152 17.9982 4.47174 17.9982C3.40197 17.9982 2.65553 16.9722 1.7973 15.7122C0.803194 14.2326 0 11.934 0 9.7524C0 6.2532 2.17396 4.3974 4.31351 4.3974C5.45037 4.3974 6.39803 5.1786 7.11179 5.1786C7.79115 5.1786 8.85061 4.3506 10.144 4.3506C10.6342 4.3506 12.3953 4.3974 13.5545 6.1362ZM9.52997 2.8692C10.0649 2.205 10.4432 1.2834 10.4432 0.3618C10.4432 0.234 10.4329 0.1044 10.4106 0C9.54029 0.0342 8.50491 0.6066 7.88059 1.3644C7.39042 1.9476 6.93292 2.8692 6.93292 3.8034C6.93292 3.9438 6.95528 4.0842 6.9656 4.1292C7.02064 4.14 7.11007 4.1526 7.19951 4.1526C7.98034 4.1526 8.96241 3.6054 9.52997 2.8692Z"
            fill="white"
            fillOpacity="0.8"
          />
        </svg>  
        </li>
        </Link>
        <li className="m-3 cursor-pointer" onMouseEnter={()=>{setstore(true)}} onMouseLeave={()=>{setstore(false)}}  data-aos="fade-dowm">Store</li>
        <li className="m-3 cursor-pointer" onMouseEnter={()=>{setmac(true)}} onMouseLeave={()=>{setmac(false)}}>Mac</li>
        <li className="m-3 cursor-pointer" onMouseEnter={()=>{setipad(true)}} onMouseLeave={()=>{setipad(false)}}>iPad</li>
        <li className="m-3 cursor-pointer" onMouseEnter={()=>{setiphone(true)}} onMouseLeave={()=>{setiphone(false)}}>iPhone</li>
        <li className="m-3 cursor-pointer" onMouseEnter={()=>{setwatch(true)}} onMouseLeave={()=>{setwatch(false)}}>Watch</li>
        <li className="m-3 cursor-pointer" onMouseEnter={()=>{setairpods(true)}} onMouseLeave={()=>{setairpods(false)}}>Airpods</li>
        <li className="m-3 cursor-pointer" onMouseEnter={()=>{settvandhome(true)}} onMouseLeave={()=>{settvandhome(false)}}>TV & Home</li>
        <li className="m-3 cursor-pointer" onMouseEnter={()=>{setentertainment(true)}} onMouseLeave={()=>{setentertainment(false)}}>Entertainment</li>
        <li className="m-3 cursor-pointer" onMouseEnter={()=>{setaccessories(true)}} onMouseLeave={()=>{setaccessories(false)}}>Accessories</li>
        <li className="m-3 cursor-pointer" onMouseEnter={()=>setsupport(true)} onMouseLeave={()=>{setsupport(false)}}>Support</li>
        <li className="m-3 cursor-pointer">
<Image src={cart} className="w-1/6 h-auto"/>
        </li>
    </ul>
</nav>

{store && <Store/>}
{mac && <Mac/>}
{ipad && <Ipad/>}
{iphone && <Iphone/>}
{watch && <Watches/>}
{airpods && <Airpods/>}
{tvandhome && <TVandHome/>}
{entertainment && <Entertainment/>}
{accesories && <Accessories/>}
{support && <Support/>}
        </>
    )

}
