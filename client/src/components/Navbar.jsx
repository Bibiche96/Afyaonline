import Navlink from "./navlink";
import { GoPasskeyFill } from "react-icons/go";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosReturnLeft } from "react-icons/io";
import { useState } from "react";

export default function Navbar() {
   const [isClick, setIsCliclick] = useState(false)
   return (
      <>
         <div className=" w-full h-20  shadow-lg backdrop-blur-lg relative   ">
            <nav className="flex mx-16 my-6 items-center  absolute  top-0 left-0 right-0 z-50  bg-white justify-between">
               <p className=" text-blue-600">Afya Online</p>
               <div className="flex space-x-20 text-xl ">
                  <Navlink id="Home" href={"/#Accueil"} name={'Accueil'} />
                  <Navlink href={"/#Doctors"} name={'Doctors'} />
                  <Navlink href={"/#About Us"} name={'About Us'} />
                  <Link to="/registerdoctor">
                     <span className=" text-[#220CAD] hover:text-blue-800">Vous etes praticien?</span>
                  </Link>
                  <Link to="/registerpatient">
                     <div className="flex space-x-3 bg-[#220CAD] text-white justify-center items-center w-32 ">
                        <GoPasskeyFill className="pt-2 text-2xl " />
                        ign Up
                     </div>
                  </Link>
                  <Link to="/appointmentlist">
                     Gérer mes rendez-vous
                  </Link>
                  <div onClick={() => isClick ? setIsCliclick(false) : setIsCliclick(true)} className=" col-start-2 col-end-3 row-start-1 row-end-2 cursor-pointer ml-auto mr-6 top-6 mt-6 mb-auto md:hidden  " >
                     <RxHamburgerMenu className={`$ {isClick? "hidden":"block"}  `} />
                     <IoIosReturnLeft className={`$ {isClick? "hidden":"block"}  `} />
                  </div>

               </div>
            </nav>
         </div>

      </>
   )
}