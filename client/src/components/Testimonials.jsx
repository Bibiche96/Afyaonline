import { useState } from "react"

import Doctorimage from "client/src/assets/images/istockphoto-1201657177-612x612-removebg-preview.png";

export default function Testimonials() {
    const [testimonie, setTestimonie] = useState([
        {
            id: 1,
            picture: Doctorimage,
            name: 'Dr. Bibiche',
            message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia unde maiores quisquam illo quidem. Iusto excepturi deserunt aspernatur quidem, rerum dolores mollitia ad, repellat omnis molestiae tempora, obcaecati voluptatem. Suscipit."


        }
    ]);
    return (
        <>
            <div className=" bg-white w-64 ml-12 h-56 rounded-2xl mt-9 border border-[#FBFF40] ">
                {testimonie.map(testi =>
                    <div key={testi.id} >
                        <div className=" h-1/4 bg-[#220CAD] w-full flex rounded-br-2xl rounded-tl-2xl  items-center ">
                            <div className="justify-start  w-12">
                                <img src={testi.picture} alt="person" />
                            </div>

                            <p className=" text-white pl-5">{testi.name}</p>
                        </div>

                        <div>
                            <p> {testi.message} </p>
                        </div>
                    </div>


                )}

            </div>
        </>
    )
}