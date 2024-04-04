import { useState } from "react";
import Btn from "./UI/Btn";
import Fields from "./fields";
import axios from 'axios';
import Navlink from "./navlink";
import { Link } from "react-router-dom";

export default function Pageinscription() {

    const [identity, setIdentity] = useState([
        {nom: ''},
        {prenom: ''},
        {Spéciality: ''},
        {email: ''},
        {password: ''},
        {qualifications: ''},
        {Availability: ''},
    ])
    const handleChange = (id, value) => {
        setIdentity(prevState => ({
            ...prevState,
            [id]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault()
        const form = e.target
        let data = new FormData(form)
        let objidentity = Object.fromEntries(data)
        form.reset()
        setIdentity([objidentity, ...identity])

        try {
            const response = await axios.post("http://localhost:5000/registerDoctor", objidentity);
            console.log(response.data);



        } catch (error) {
            console.error("Erreur lors de la soumission du formulaire :", error);

        }
    };


    return (
        <>
            <div className="bg-[#D9D9D9] h-screen  flex">
                <div className=" w-2/4">
                    <div className=" flex  flex-col">
                        <div className="bg-white w-3/6  mx-auto mt-20">
                            <div className="text-2xl pt-14 flex justify-center ">
                                <h1>Create account</h1>
                            </div>
                            <div className=" w-full flex flex-col items-center justify-center mt-8 ">
                                <div className="flex flex-col space-y-4 items-center justify-center">
                                    <Fields props={{ placeholder: "Sign Up with Google" }} inputWidth={64} />
                                    <p>Or</p>
                                    <form onSubmit={handleSubmit} action="" className="flex flex-col items-center justify-center  space-y-4">
                                        <div className="flex gap-3 pr-5">
                                            <Fields props={{ id: "nom", placeholder: "nom" }} onChange={handleChange} inputWidth={48} />
                                            <Fields props={{ id: "prenom", placeholder: "prenom" }} onChange={handleChange} inputWidth={48} />
                                        </div>
                                        <Fields props={{ id: "spécialité", placeholder: "votre Spécialite" }} onChange={handleChange} inputWidth={64} />
                                        <Fields props={{ id: "email", type: "email", placeholder: "email" }} onChange={handleChange} inputWidth={64} />
                                        <Fields props={{ id: "mot de pass", placeholder: "Entrez votre mot de pass" }} onChange={handleChange} inputWidth={64} />
                                        <Fields props={{ id: "disponibilité", placeholder: "votre disponilité" }} onChange={handleChange} inputWidth={64} />
                                        <Fields props={{ id: "qualifications", placeholder: "votre qualifications" }} onChange={handleChange} inputWidth={64} />
                                        <div className=" mt-20" >
                                            <Btn text={'Sign Up'} action={() => { }} textcolor={"white"} bgcolor={"[#220CAD]"} className="text-center" />
                                        </div>
                                    </form>
                                    <div className="flex space-x-3 text-xl">
                                        <p>already have an account ?</p>
                                        <Link to="/logindoctor">
                                            <p className=" text-[#220CAD] hover:underline" >Sign In</p>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" w-2/4  flex justify-center items-center  ">
                    <div className=" w-4/6 flex h-96 justify-center items-center">
                        <img className=" w-full" src="/src/assets/images/istockphoto-1201657177-612x612-removebg-preview.png" alt="doctor" />
                    </div>
                </div>
            </div >
        </>
    )
}