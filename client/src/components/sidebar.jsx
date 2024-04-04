import { Link } from "react-router-dom"
import { links } from "./tab"
import Home from "./Home"
import Doctorslist from "./doctorslist"
import Patientlist from "./patientslist"
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

export default function Sidebar({ text }) {
    return (
        <>
            {links.map((link, index) => (
                <div key={index}>
                    <div className="cursor-pointer hover:bg-gray-300 rounded-full ml-2 transition border-2 border-red-500">
                        <Link to={link.to}>{link.name}</Link>
                    </div>
                </div>
            )
            )}
        
               
        

        </>
    )


}

