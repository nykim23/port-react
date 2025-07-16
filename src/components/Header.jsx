import React, {useState} from "react";



import { headerNav } from "../constants";
import nyLogo from "../assets/img/nyLogo.png";
import { NavSidebar } from "./NavSidebar";


// const headerNav = [
//     {
//         title:"intro",
//         url:"#intro",
//     },
//     {
//         title:"skill",
//         url:"#skill",
//     },
//     {
//         title:"site",
//         url:"#site",
//     },
//     {
//         title:"portfolio",
//         url:"#port",
//     },
//     {
//         title:"contact",
//         url:"#contact",
//     },
// ];

const Header = () => {
    const [show, setShow] = useState(false);


    const toggleMenu = () => {
        setShow((prevShow) => !prevShow);
    }

    const swiftUpElements = document.querySelectorAll('.swift-up-text');

    swiftUpElements.forEach(elem => {

        const words = elem.textContent.split(' ');
        elem.innerHTML = '';

        words.forEach((el, index) => {
            words[index] = `<span><i>${words[index]}</i></span>`;
        });

        elem.innerHTML = words.join(' ');

        const children = document.querySelectorAll('span > i');
        children.forEach((node, index) => {
            node.style.animationDelay = `${index * .2}s`;
        });

    });

    return (
        <header id="header" role="banner">
            <div className="header__inner">
                <div className="header__logo">
                    <a href="/">
                        <img src={nyLogo} alt="로고" />
                        <h1 className="swift-up-text">portfolio</h1> 
                        
                    </a>
                </div>

                <nav className={`header__nav ${show ? "show":""}`} role="navigation" aria-label="메인메뉴">
                    {/* <ul>
                        <li><a href="#intro">intro</a></li>
                        <li><a href="#skill">skill</a></li>
                        <li><a href="#site">site</a></li>
                        <li><a href="#port">portfolio</a></li>
                        <li><a href="#contact">contact</a></li>
                    </ul> */}

                    <ul>
                        {headerNav.map((nav, key) => (
                            <li key={key}>
                                <a href={nav.url}>{nav.title}</a>
                            </li>
                        ))}
                    </ul>
                    
                </nav>
                <div className="header__nav__mobile"
                id="headerToggle"
                aria-controls="primary-menu"
                aria-expanded={show ? "true":"false"}
                role="button"
                tabIndex="0"
                onClick={toggleMenu}
                >
                    <span></span>
                </div>
                {/* <NavSidebar /> */}
            </div>
        </header>
    )
};

export default Header;