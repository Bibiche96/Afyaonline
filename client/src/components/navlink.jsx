import { useState } from "react";
import smoothscroll from 'smoothscroll-polyfill';



export default function Navlink({ name, buttontext, href }) {
    const [isActive, setIsActive] = useState(false);

    smoothscroll.polyfill();


    const handleClick = () => {

        setIsActive(true);

        const section = document.querySelector(`#${name}`);
        if (section) {
            window.scrollTo({
                top: section.offsetTop,
                behavior: 'smooth',
                duration: 1000
            });
        }
    };
    return (

        <div className={`hover:text-[#220CAD] ${isActive ? 'underline text-[#220CAD]' : ''}`} >
            <a href={href} onClick={handleClick}>{name}</a>
            <button> {buttontext} </button>
        </div>



    )
}