import Btn from "./UI/Btn";
import Fields from "./fields";

export default function Connexion() {
    return (

        <>
            <div className=" h-screen  flex">

                <div className=" w-2/4 border bg-[#1976D2]">

                    <div className=" flex  flex-col justify-center items-center pt-60  ">
                        <div className="text-3xl mb-32 flex justify-center ">
                            <h1>Welcome back</h1>
                        </div>

                        <div className="flex flex-col space-y-4">
                            <form action="" className="flex flex-col space-y-4">
                                <Fields props={{ id: "email", name: "Email", type: "email", placeholder: "Entrez votre email" }} inputWidth={80} className="border bg-gray-400" />
                                <Fields props={{ id: "mot de pass", name: "Password", placeholder: "Entrez votre mot de pass" }} inputWidth={64} />
                                <div className=" mt-20 " >
                                    <Btn text={'Sign Up'} action={() => { }} textcolor={"black"} bgcolor={"white"}  />
                                </div>


                            </form>
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