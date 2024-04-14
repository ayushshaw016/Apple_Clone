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
import MainPage from "./Mainpage";
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
  const [main, setmain] = useState(false)

    return (
        <>
           <nav className=" bg-[#464444] text-gray-400 hover:bg-black">
    <ul className="flex flex-col lg:flex-row ml-36">
        <li className="m-3 cursor-pointer mt-4" onClick={()=>setmain(!main)}>
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
        <svg
          className="cursor-pointer mt-2"
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.8063 10.8713L8.50685 7.57204C9.10449 6.78005 9.46342 5.79795 9.46342 4.73146C9.46342 2.12276 7.3414 0 4.73171 0C2.12288 0 0 2.12276 0 4.73146C0 7.34101 2.12288 9.46292 4.73171 9.46292C5.79826 9.46292 6.78041 9.10401 7.57244 8.50639L10.8718 11.8056C11.0006 11.9344 11.1702 12 11.3391 12C11.5079 12 11.6767 11.9352 11.8063 11.8056C12.0646 11.5473 12.0646 11.1296 11.8063 10.8713ZM0.937816 4.73146C0.937816 2.63939 2.64038 0.937767 4.73171 0.937767C6.82389 0.937767 8.5256 2.64024 8.5256 4.73146C8.5256 6.82268 6.82389 8.52515 4.73171 8.52515C2.63953 8.52515 0.937816 6.82353 0.937816 4.73146Z"
            fill="white"
            fillOpacity="0.8"
          />
        </svg>
        </li>
        <li className="m-3 cursor-pointer">
        <svg width="30px" height="30px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className="bg-white">

<title/>

<g id="Cart">

<path class="cls-1" d="M28.11,13.25l-2,9.75-.16.75A1.81,1.81,0,0,1,24.05,25H10V24s-1.55-1-1-1H22.71a1,1,0,0,0,1-.78L26.16,11.5h.09C27.42,11.5,28.31,12.33,28.11,13.25Z"/>

<path d="M24.05,25.6H11.2a2.41,2.41,0,0,1-2.45-1.73L6,10.9H26.25a2.64,2.64,0,0,1,2.06.91,1.85,1.85,0,0,1,.39,1.57l-2.2,10.5A2.41,2.41,0,0,1,24.05,25.6ZM7.51,12.1,9.93,23.63a1.25,1.25,0,0,0,1.27.77H24.05a1.25,1.25,0,0,0,1.27-.77l2.2-10.51a.6.6,0,0,0-.14-.55,1.48,1.48,0,0,0-1.13-.47Z"/>

<path d="M6.77,12.1a.6.6,0,0,1-.56-.39L5.42,9.6H3A.6.6,0,0,1,3,8.4H5.83a.59.59,0,0,1,.56.39l1,2.5a.6.6,0,0,1-.35.77A.57.57,0,0,1,6.77,12.1Z"/>

<path d="M10.5,29.1a1.6,1.6,0,1,1,1.6-1.6A1.6,1.6,0,0,1,10.5,29.1Zm0-2a.4.4,0,1,0,.4.4A.4.4,0,0,0,10.5,27.1Z"/>

<path d="M24.5,29.1a1.6,1.6,0,1,1,1.6-1.6,1.67,1.67,0,0,1-.22.81A1.61,1.61,0,0,1,24.5,29.1Zm0-2a.4.4,0,0,0-.4.4.41.41,0,0,0,0,.19.4.4,0,0,0,.69,0,.39.39,0,0,0,.06-.2A.4.4,0,0,0,24.5,27.1Z"/>

</g>

</svg>
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
{main && <MainPage/>}
        </>
    )

}
