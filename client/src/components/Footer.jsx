import { FaFacebookF } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { RiTwitterXFill } from "react-icons/ri";


export default function Footer() {
    return (
        <>

            <div className=" bg-[#D9D9D9] flex mx-40 mt-20 rounded-3xl justify-between px-20 pt-16 text-xl ">

                <p>Afya Online</p>
                <div className=" space-y-4 ">
                    <p className="hover:text-[#220CAD]"> Se connecter</p>
                    <p className="hover:text-[#220CAD]"> A propos de nous</p>
                    <p className="hover:text-[#220CAD]"> Besoin d'aide?</p>
                </div>

                <div className="space-y-4">
                    <div className="text-[#220CAD] hover:text-[#220CAD] hover:underline">
                        <h1>Trouvez votre spécialiste</h1>

                    </div>
                    <p className="hover:text-[#220CAD]">Cardiologue</p>
                    <p className="hover:text-[#220CAD]">Nephrologue</p>
                    <p className="hover:text-[#220CAD]">Endocrinologue</p>
                    <p className="hover:text-[#220CAD]">Medecin généraliste</p>
                    <p className="hover:text-[#220CAD]">Pédiatre</p>
                    <p className="hover:text-[#220CAD]">Orthopediste</p>
                    <p className="hover:text-[#220CAD]">Dermatologue</p>
                    <p className="hover:text-[#220CAD]">Ophtalmologue</p>
                    <p className="hover:text-[#220CAD]">Psychologue</p>
                    <p className="hover:text-[#220CAD]">Neuro-psychiatre</p>
                    <div className="text-[#220CAD] hover:text-[#220CAD] hover:underline">
                        <h1>Toutes les spécialités</h1>

                    </div>
                </div>
                <div className="text-[#220CAD] space-y-8 ">
                    <FaFacebookF className="text-2xl" />
                    <BsInstagram className="text-2xl" />
                    <RiTwitterXFill className="text-2xl" />
                </div>


            </div>
        </>
    )
}