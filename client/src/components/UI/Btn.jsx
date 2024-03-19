

export default function Btn({ text, action, icon, bgcolor, textcolor }) {
    return (

        <div className="  flex ">
            <button className={`bg-${bgcolor} w-64 h-16 flex items-center pl-3 space-x-3 shadow-lg rounded-lg border-4 text-${textcolor}`}>

                {icon}
                <p className="font-bold text-xl">{text}</p>

            </button>
        </div>
    )
}