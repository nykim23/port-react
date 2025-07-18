import React, { useEffect, useState } from "react";
import { FaCircleArrowUp } from "react-icons/fa6";

const TopButton = () => {

    const [ showButton, setShowButton ] = useState(false);


    const scrollToTop = () => {
        window.scroll({
            top:0,
            behavior:'smooth'
        })
    }


    useEffect(() => {
        const handleShowButton = () => {
            if (window.scrollY > 500) {
                setShowButton(true)
            } else {
                setShowButton(false)
            }
        }


        console.log(window.scrollY)
        window.addEventListener("scroll", handleShowButton)
        return () => {
            window.removeEventListener("scroll", handleShowButton)
        }
    }, [])


    return (
        <div className="scroll__container">
            <button id="top" onClick={scrollToTop} type="button"><FaCircleArrowUp /></button>
        </div>
    )
}

export default TopButton;