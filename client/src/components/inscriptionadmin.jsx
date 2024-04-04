import { useState } from "react";
import Btn from "./UI/Btn";
import Fields from "./fields";
import { Link } from "react-router-dom";

export default function Inscriptionadmin() {
    const [datadmin, setDatadin] = useState({
        nom: '',
        prenom: '',
        email: '',
        password: '',
    })
    const handleChange = (id, value) => {
        setDatadin(prevState => ({
            ...prevState,
            [id]: value
        }));
    };


    const handleSubmit = async (e) => {
        e.preventDefault()
        const form = e.target
        form.reset()

        try {
            const response = await axios.post("http://localhost:5000/registerAdmin", datadmin);
            console.log(response.data);


            // history.push("/accueil");
        } catch (error) {
            console.error("Erreur lors de la soumission du formulaire :", error);

        }
    };


    return (
        <>

            <div className="bg-[#D9D9D9] h-screen  flex">

                <div className=" w-2/4 border">

                    <div className=" flex  flex-col justify-center items-center pt-60">
                        <div className="bg-white w-3/6  mx-auto">
                            <div className="text-2xl pt-14 flex justify-center ">
                                <h1>Create account</h1>
                            </div>
                            <div className=" w-full flex flex-col items-center justify-center mt-8 ">
                                <div className="flex flex-col space-y-4 items-center justify-center">
                                    <Fields props={{ placeholder: "Sign Up with Google" }} inputWidth={64} />
                                    <p>Or</p>
                                    <form onSubmit={handleSubmit} action="" className="flex flex-col items-center justify-center  space-y-4">
                                        <div className="flex gap-3 pr-5">
                                            <Fields props={{ id: "nom", placeholder: "nom" }} onChnage={handleChange} inputWidth={48} />
                                            <Fields props={{ id: "prenom", placeholder: "prenom" }} onChnage={handleChange} inputWidth={48} />
                                        </div>
                                        <Fields props={{ id: "email", type: "email", placeholder: "email" }} onChnage={handleChange} inputWidth={64} />
                                        <Fields props={{ id: "mot de pass", placeholder: "Entrez votre mot de pass" }} onChnage={handleChange} inputWidth={64} />
                                        <div className=" mt-20" >
                                            <Btn text={'Envoyer ma demande'} action={() => { }} textcolor={"white"} bgcolor={"[#220CAD]"} />
                                        </div>


                                    </form>
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


            </div>



        </>
    )
}