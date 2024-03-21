import { IoMdSettings } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { FiPlus } from "react-icons/fi";
import Doctorslist from "./doctorslist";
import Sidebar from "./sidebar";


export default function Dashboard() {



    return (
        <div className="flex h-screen">
            <div className=" w-72 bg-blue-900 p-4 text-gray-300">
                <div className="flex gap-3">
                    <IoMdSettings className=" text-2xl" />
                    <h2 className="text-xl font-bold">Configuration</h2>

                </div>
                <div className=" ml-12  text-xl mt-4 space-y-3">
                    <Sidebar text={"Home"} />
                    <Sidebar text={"Doctors"} />
                    <Sidebar text={"Patients"} />
                </div>
            </div>
            <div className="w-full p-4">
                <div className="flex flex-col mb-4 mt-12 space-y-10">
                    <h2 className="text-2xl">Configuartion</h2>
                    <input type="text" placeholder="vous cherchez quel utilisateur" className="border rounded-full border-gray-300 p-2 mb-2 w-full" />
                    <button className=" bg-blue-500 px-2 py-2 rounded text-white w-40 h-12 mr-2 ">Ajouter un médecin</button>
                </div>
                <div className="overflow-x-auto">
                    <h3 className="text-2xl mt-4">Liste des médecins</h3>
                    <Doctorslist />
                </div>
            </div>
        </div>
    );
}