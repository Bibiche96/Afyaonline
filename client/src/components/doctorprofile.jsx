import Calendar from 'react-calendar';
import { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import Btn from "./UI/Btn";
import { ImCalendar } from "react-icons/im";
import Doctorimage from "client/src/assets/images/istockphoto-1201657177-612x612-removebg-preview.png";


export default function DoctorProfile() {

    const [doctorprofile, setDoctorprofile] = useState([
        {
            id: 1,
            picture: Doctorimage,
            name: 'Dr. KWESHI',
            speciality: 'Cardiologist',
            icon: <FaLocationDot />,
            location: '29,avenue kasavubu, RDC',
            btn: <Btn />,
            calendar: <Calendar />


        }
    ]);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [appointments, setAppointments] = useState([]);


    const handleDateChange = (date) => {
        setSelectedDate(date);

    };


    const handleAppointmentBooking = (time) => {
        const newAppointment = {
            date: selectedDate,
            time: time
        };
        setAppointments([...appointments, newAppointment]);

    };


    return (
        <div className="container mx-auto flex">
            {doctorprofile.map(profile =>
                <div key={profile.id} >
                    <div className=' h-80 flex flex-col justify-center items-center border rounded-2xl mt-44'>
                        <div className='flex gap-8 h-full mt-8'>
                            <div className='flex flex-col justify-between border-r'>
                                <div className='flex flex-col'>
                                    <div className="flex gap-3">

                                        <div className="justify-start  w-12">
                                            <img className=" w-14 h-auto  rounded-full" src={profile.picture} alt="Doctor" />
                                        </div>

                                        <h2 className="text-sm"> {profile.name} </h2>
                                    </div>
                                    <p className='mt-3 pl-8'> {profile.speciality} </p>
                                    <div className="flex pl-5 mt-2 gap-2 items-center">
                                        <FaLocationDot className="text-[#220CAD]" />
                                        <p className="text-[#BDB4B4] "> {profile.location} </p>
                                    </div>
                                </div>
                                <div className=' mt-4 ml-5 flex'>
                                    <Btn text={'Prendre rendez-vous'} action={() => { }} icon={<ImCalendar className=" text-xl" />} textcolor={"white"} bgcolor={"[#220CAD]"} />
                                </div>
                            </div>

                            <div className=" w-2/3">
                                <Calendar
                                    onChange={handleDateChange}
                                    value={selectedDate}
                                />
                            </div>
                        </div>

                        <div className="flex gap-4 mb-2 flex-wrap">
                            <button onClick={() => handleAppointmentBooking('09:00')} className="bg-blue-500 text-white px-4 py-2 rounded w-20">09:00</button>
                            <button onClick={() => handleAppointmentBooking('10:00')} className="bg-blue-500 text-white px-4 py-2 rounded w-20">10:00</button>

                        </div>



                    </div>
                </div>
            )}

            <div>

            </div>
        </div>
    );
}