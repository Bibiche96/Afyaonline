import Calendar from 'react-calendar';
import { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import Btn from "./UI/Btn";
import { ImCalendar } from "react-icons/im";
import moment from 'moment'

import Doctorimage from "client/src/assets/images/istockphoto-1201657177-612x612-removebg-preview.png";
import AppointmentList from './appointmentlist';
import AppointmentForm from './appointmentform';
import Appointmentavailability from './appointmentavailability';
import { Link } from 'react-router-dom';


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
    const [showavailability, setShowavailability] = useState(false);
    const [showform, setShowform] = useState(false);


    const handleDateClick = (date) => {
        setSelectedDate(date);
        setShowavailability(true);
        setShowform(false)

    };

    const handledateSelection = () => {
        setShowform(true);
    };
    const handleAppointmentFormSubmit = (formData) => {
        handledateSelection()
        setAppointments([...appointments, formData]);
    };

    const handleAppointment = (time) => {
        const newAppointment = {
            date: selectedDate,
            time: time
        };
        setAppointments([...appointments, newAppointment]);

    };

    const highlightTodayDate = (view, date) => {
        const today = new Date();
        return view === 'month' && date.getDate() === today.getDate() && date.getMonth() === today.getMonth() && date.getFullYear() === today.getFullYear();
    }

    const highlightSelectedDate = (view, date) => {
        return view === 'month' && date.getDate() === selectedDate.getDate() && date.getMonth() === selectedDate.getMonth() && date.getFullYear() === selectedDate.getFullYear();
    }




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
                                <Link to="/appointmentform">
                                    <div className=' mt-4 ml-5 flex'>
                                        <Btn text={'Prendre rendez-vous'} action={() => { }} icon={<ImCalendar className=" text-xl" />} textcolor={"white"} bgcolor={"[#220CAD]"} />
                                    </div>
                                </Link>
                            </div>

                            <div className=" w-2/3">

                                <Calendar
                                    activeStartDate={new Date()}
                                    onClickDay={handleDateClick}
                                    value={selectedDate}
                                    tileClassName={({ date, view }) => {
                                        return highlightTodayDate(view, date) ? 'bg-red-500' : highlightSelectedDate(view, date) ? 'bg-blue-500 rounded-full h-12 w-10 flex items-center justify-center' : '';
                                    }}
                                />
                            </div>

                        </div>
                        {showavailability && <div className="flex gap-4 mb-8 flex-wrap justify-center items-center ">
                            <Appointmentavailability handleAppointmentBooking={handleAppointment} />

                        </div>
                        }

                        <div className="flex gap-4 mb-2 flex-wrap">
                            {showform && (
                                <div>
                                    <AppointmentForm onSubmit={handleAppointmentFormSubmit} />
                                </div>
                            )}

                            {/* <div>
                                <AppointmentList appointments={appointments} />
                            </div> */}
                        </div>
                    </div>
                </div>
            )}

            <div>

            </div>
        </div>
    );
}