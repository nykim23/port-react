import React from "react";

import { skillText } from "../constants";


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
                    Challenge 나의도전
                </h2>
                <div className="skill__desc">
                    <div>
                        <span>1.</span>
                        <h3>꿈을 설계하고 디자인하다.</h3>
                        <p>
                            나는 공간을 만드는것을 좋아한다.
                        </p>
                    </div>

                    <div>
                        <span>2.</span>
                        <h3>열심히 할수록 기회는 따른다.</h3>
                        <p>
                            운이 좋은 사람은 없다. 단지 운을 만들 뿐이다. 
                        </p>
                    </div>

                    <div>
                        <span>3.</span>
                        <h3>나에게 정직하다.</h3>
                        <p>
                            마음에서 우러나오는 일을 해야 정직해지며 삶을 더 즐길 줄 알게 된다.
                        </p>
                    </div>

                    {skillText.map((skill,key) => (
                        <div key={key}>
                            <span>{key + 1}</span>
                            <h3>{skill.title}</h3>
                            <p>{skill.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skill;