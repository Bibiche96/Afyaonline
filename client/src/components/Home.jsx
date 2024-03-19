import Btn from "./UI/Btn";
import { FaLocationDot } from "react-icons/fa6";
import { FaHeartPulse } from "react-icons/fa6";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { ImCalendar } from "react-icons/im";
import { FaSearchengin } from "react-icons/fa6";
import Doctors from "./Doctors";
import About from "./About";
import { FaHeart } from "react-icons/fa";
import Testimonials from "./Testimonials";
import Footer from "./Footer";
import { Route, Routes } from 'react-router-dom';




export default function Home() {
    return (
        <>

            <div className=" w-full h-auto flex flex-col">
                <div className=" flex h-screen mx-40  mt-9 ">
                    <div className="flex flex-col w-2/3">
                        <div className="h-3/4 bg-[rgb(19,17,108)] rounded-l-3xl flex">
                            <div className="flex flex-col ml-20 mt-20">
                                <p className=" text-white text-6xl leading-relaxed">Prends ton <br /> rendez-vous <br /> en ligne avec  Afya online</p>
                                <div className=" mt-20">
                                    <Btn text={'Prendre rendez-vous'} action={() => { }} icon={<ImCalendar className=" text-xl" />} textcolor={"white"} bgcolor={"[#220CAD]"} />
                                </div>
                            </div>
                        </div>

                        <div className=" flex flex-col h-1/4 bg-white w-full pl-10 rounded-tr-3xl mt-10 ">
                            <p className=" text-2xl">Find your doctor</p>
                            <div className="flex space-x-6 mt-6 ">
                                <Btn text={'ville'} action={() => { }} icon={<FaLocationDot className="  text-xl" />} textcolor={"[#BFB9B9]"} bgcolor={"[#BFB9B9]"} />
                                <Btn text={'Nom'} action={() => { }} icon={<MdDriveFileRenameOutline className="  text-xl" />} textcolor={"[#BFB9B9]"} bgcolor={"[#BFB9B9]"} />
                                <Btn text={'Catégorie'} action={() => { }} icon={<FaHeartPulse className=" text-xl" />} textcolor={"[#BFB9B9]"} bgcolor={"[#BFB9B9]"} />
                                <button className=" bg-[#220CAD] w-20 rounded-lg flex justify-center items-center  "> <FaSearchengin className=" text-4xl text-white " /></button>
                            </div>
                        </div>

                    </div>
                    <div className="w-5/12 flex  items-center mb-32 bg-[rgb(19,17,108)] rounded-r-3xl rounded-bl-3xl">
                        <img className=" px-10 mb-80" src="/src/assets/images/front-page-doctor-1024x676.png" alt="img" />
                    </div>
                </div>

                <div id="OUR DOCTORS" className="mt-20 mx-40 h-96">
                    <div className="flex ">
                        <div className=" h-1/4 w-3/4 flex  gap-40 pl-20 rounded-2xl bg-white items-center mb-5">
                            <h1 className="text-5xl">OUR DOCTORS</h1>
                            <Btn text={'Cardiologue'} action={() => { }} icon={<FaHeartPulse className=" text-xl" />} textcolor={"[#BFB9B9]"} bgcolor={"[#BFB9B9]"} />
                        </div>
                        <div className="w-1/4 bg-[#D9D9D9] rounded-t-2xl">

                        </div>
                    </div>
                    <div className=" h-3/4 border bg-[#D9D9D9] rounded-l-2xl rounded-br-2xl">
                        <Doctors />
                    </div>
                </div>



                <div id="About Us" className=" flex mx-40 mt-20">
                    <About />
                    <div className=" w-1/2 h-auto">
                        <div className="flex justify-center items-center h-96 relative">
                            <FaHeart className="text-[#220CAD] w-full h-full inset-0 absolute overflow-hidden" />
                            <img src="/src/assets/images/istockphoto-1201657177-612x612-removebg-preview.png" alt="doctor" className=" absolute inset-0 object-cover w-92 h-72" />
                        </div>
                    </div>

                </div>

                <div className="h-auto mx-40 mt-20">
                    <div className=" h-1/4 flex justify-between">
                        <div className="bg-[#D9D9D9] flex-grow flex-shrink-0 w-1/3 rounded-tl-3xl">

                        </div>
                        <div className="flex-grow flex-shrink-0 w-1/3">
                            <h1 className=" flex justify-center text-5xl">TESTIMONIALS</h1>
                        </div>
                        <div className="bg-[#D9D9D9] flex-grow flex-shrink-0 w-1/3 rounded-tr-3xl">

                        </div>
                    </div>
                    <div className=" h-96 bg-[#D9D9D9] flex rounded-b-3xl">
                        <Testimonials />
                    </div>

                </div>
                < Footer />

            </div>





        </>
    )
}