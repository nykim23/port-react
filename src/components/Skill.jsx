import React from "react";



import AutoPlay from "../components/AutoPlay";
import AutoPlayConverse from "../components/AutoPlayConverse";

// const skillText = [
//     {
//         title:"꿈",
//         desc:"나는"
//     },
//     {
//         title:"열심",
//         desc:"운이좋은사람"
//     },
//     {
//         title:"나에게정직",
//         desc:"열정적으로"
//     }
// ]


const Skill = () => {
    return (
        <section id="skill">
            <div className="skill__inner">
                <h2 className="skill__title">
                    Skill & tool
                </h2>
                <div className="skill__desc">
                    
                </div>
            </div>

            <AutoPlay />
            <AutoPlayConverse />
        </section>
    )
}

export default Skill;