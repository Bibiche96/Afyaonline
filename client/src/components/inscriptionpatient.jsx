import { useState } from "react";
import Btn from "./UI/Btn";
import Fields from "./fields";
import { Link } from "react-router-dom";

export default function PageinscriptionPatient() {
    const [datapatient, setDatapatient] = useState({
        nom: '',
        prenom: '',
        motif: '',
        age: '',
        sexe: '',
        email: '',
        password: '',
    })
    const handleChange = (id, value) => {
        setDatapatient(prevState => ({
            ...prevState,
            [id]: id === 'age' ? parseInt(value) : value
        }));
    };


    const handleSubmit = async (e) => {
        e.preventDefault()
        const form = e.target
        let data = new FormData(form)
        let objpatient = Object.fromEntries(data)
        form.reset()
        setDatapatient([objpatient, ...datapatient])
        try {
            const response = await axios.post("http://localhost:5000/registerPatient", objpatient);
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

                    <div className=" flex  flex-col ">
                        <div className="bg-white w-3/6  mx-auto mt-20">
                            <h1>BIENVENUE CHEZ Afya Online</h1>
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
                                        <Fields props={{ id: "Motif", placeholder: "motif" }} onChnage={handleChange} inputWidth={64} />
                                        <Fields props={{ id: "age", placeholder: "votre age" }} onChnage={handleChange} inputWidth={64} />
                                        <Fields props={{ id: "sexe", placeholder: "sexe" }} onChnage={handleChange} inputWidth={64} />
                                        <Fields props={{ id: "email", type: "email", placeholder: "email" }} onChnage={handleChange} inputWidth={64} />
                                        <Fields props={{ id: "mot de pass", placeholder: "Entrez votre mot de pass" }} onChnage={handleChange} inputWidth={64} />
                                        <div className=" mt-20" >
                                            <Btn text={'Envoyer ma demande'} action={() => { }} textcolor={"white"} bgcolor={"[#220CAD]"} />
                                        </div>


                                    </form>
                                    <div className="flex space-x-3 text-xl">
                                        <p>already have an account ?</p>
                                        <Link to="/loginpatient">
                                            <a href="Patient" className=" text-[#220CAD] hover:underline" >Sign In</a>
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


            </div>



        </>
    )
}