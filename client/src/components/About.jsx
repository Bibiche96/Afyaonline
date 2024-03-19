import Btn from "./UI/Btn";



export default function About() {
    return (
        <>
            <div className="flex flex-col w-1/2 h-auto ">
                <div className="h-1/4 flex">
                    <div className=" w-3/4">
                        <h1 className=" text-5xl pl-5 ">About US</h1>
                    </div>
                    <div className=" w-1/4 bg-[#D9D9D9] rounded-t-3xl rounded-bl-[3xl] rounded-[3xl]">

                    </div>
                </div>
                <div className=" h-96 bg-[#D9D9D9] text-[#13116C] flex flex-col justify-start items-center pt-12 rounded-l-3xl rounded-br-3xl">
                    <p className="text-2xl leading-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Nulla architecto tempore deserunt a dolorum harum nobis <br /> in quam nemo ab numquam ducimus esse saepe quae sapiente, <br /> adipisci deleniti aspernatur magni.</p>
                    <p className="text-xl font-bold pt-10 hover:underline text-[#220CAD]">En savoir plus</p>
                </div>
            </div>
        </>
    )
}