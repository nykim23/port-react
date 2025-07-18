import React from "react";


// const contactText = [
//     {
//         link:"http://",
//         title:"kk",
//     },
//     {
//         link:"mailto:111@naver.com",
//         title:"mail:111@naver.com",
//     }
// ];

import { contactText } from "../constants";

const Contact = () => {
    return (
         <section id="contact">
            <div className="contact__inner">
                <h2 className="contact__title">Contact</h2>
                <div className="contact__lines" aria-hidden="true">
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                </div>

                <div className="contact__text">
                    <div className="text">
                        {contactText.map((contact, key) => (
                            <div key={key}>
                                <a href={contact.link}
                                rel="noopener noreferrer"
                                target="_blank">
                                    {contact.title}<br />
                                    {contact.email}
                                </a>
                            </div>
                        ))}


                        {/* <div>
                            <a href="https://www.aaa" target="_blank" rel="noreferrer">ny kim</a> 
                        </div>
                        <div>
                            <a href="mailto:sunchild23@naver.com" target="_blank" rel="noreferrer">mail : sunchild23@naver.com</a>
                        </div> */}
                    </div>
                </div>
                <div className="contact__lines bottom" aria-hidden="true">
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                </div>
            </div>
         </section>
    )
};

export default Contact;