import { useState } from "react"
import { FaLocationDot } from "react-icons/fa6";
import Btn from "./UI/Btn";
import Doctorimage from "client/src/assets/images/istockphoto-1201657177-612x612-removebg-preview.png";
import { ImCalendar } from "react-icons/im";



export default function Doctors() {

    const [doctors, setDoctors] = useState([
        {
            id: 1,
            picture: Doctorimage,
            name: 'Dr. John Doe',
            speciality: 'Cardiologist',
            icon: <FaLocationDot />,
            location: '29,avenue kasavubu, RDC',
            btn: <Btn />


        }
    ]);
    return (
        <>
            <div className=" bg-white w-64 ml-12 h-56 rounded-2xl mt-9">
                {doctors.map(doctor =>
                    <div key={doctor.id} >
                        <div className=" h-1/4 bg-[#220CAD] w-full flex rounded-br-2xl rounded-tl-2xl  items-center ">
                            <div className="justify-start  w-12">
                                <img src={doctor.picture} alt=" doctor" />
                            </div>

                            <p className=" text-white pl-5">{doctor.name}</p>
                        </div>
                        <p className=" mt-3 pl-5"> {doctor.speciality} </p>
                        <div className="flex pl-5 mt-2 gap-2 items-center">
                            <FaLocationDot className="text-[#220CAD]" />
                            <p className="text-[#BDB4B4] "> {doctor.location} </p>
                        </div>
                        <div className="flex justify-center  ">
                            <div className=" mt-8 w-48  ">
                                <Btn text={'Prendre rendez-vous'} action={() => { }} icon={<ImCalendar className=" text-xl" />} textcolor={"white"} bgcolor={"[#220CAD]"} />
                            </div>
                        </div>



                    </div>


                )}

            </div>


        </>
    )
}