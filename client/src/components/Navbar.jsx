import Navlink from "./navlink";
import { GoPasskeyFill } from "react-icons/go";
import { Link } from "react-router-dom";

export default function Navbar() {
   return (
      <>
         <div className=" w-full h-20  shadow-lg backdrop-blur-lg relative  ">
            <nav className="flex mx-16 my-6 items-center  absolute  top-0 left-0 right-0 z-50  bg-white justify-between">
               <p className=" text-blue-600">Afya Online</p>
               <div className="flex space-x-20 text-xl ">
                  <Link to="/">
                     <Navlink id="Home" href={"#Accueil"} name={'Accueil'} />
                  </Link>
                  <Navlink href={"#Doctors"} name={'Doctors'} />
                  <Navlink href={"#About Us"} name={'About Us'} />
                  <div className="border-2 border-blue-500 border-dotted text-[#220CAD] ">
                     <Navlink className=" text-[#220CAD] hover:text-blue-800" buttontext={'Vous etes praticien?'} />
                  </div>
                  <Link to="/sign">
                     <div className="flex space-x-3 bg-[#220CAD] text-white justify-center items-center w-32 ">
                        <GoPasskeyFill className="pt-2 text-2xl " />

                        <Navlink buttontext={'Sign Up'} />
                     </div>
                  </Link>
               </div>
            </nav>
         </div>

      </>
   )
}