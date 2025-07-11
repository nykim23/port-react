import React, { useEffect, useRef } from "react";

import { portText } from "../constants";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


// import port01 from "../assets/img/port01.jpg";
// import port02 from "../assets/img/port02.jpg";
// import port03 from "../assets/img/port03.jpg";
// import port04 from "../assets/img/port04.jpg";
// import port05 from "../assets/img/port05.jpg";
// import port06 from "../assets/img/port06.jpg";
// import port07 from "../assets/img/port07.jpg";
// import port08 from "../assets/img/port08.jpg";
// import port09 from "../assets/img/port09.jpg";
// import port10 from "../assets/img/port10.jpg";

// const portText = [
//     {
//         num:"01",
//         title:"어워드에도 올라간 포트폴리오",
//         desc:"라마",
//         img:port01,
//         code:"http://github.com"
//     },
//     {
//         num:"01",
//         title:"어워드에도 올라간 포트폴리오",
//         desc:"라마",
//         img:port01,
//         code:"http://github.com"
//     },
//     {
//         num:"01",
//         title:"어워드에도 올라간 포트폴리오",
//         desc:"라마",
//         img:port01,
//         code:"http://github.com"
//     },
//     {
//         num:"01",
//         title:"어워드에도 올라간 포트폴리오",
//         desc:"라마",
//         img:port01,
//         code:"http://github.com"
//     },
//     {
//         num:"01",
//         title:"어워드에도 올라간 포트폴리오",
//         desc:"라마",
//         img:port01,
//         code:"http://github.com"
//     },
// ]


function Port() {
  const myElement = useRef(null);

  useEffect(() => {
    if (myElement.current) {
      gsap.to(myElement.current, {
        // your animation
        scrollTrigger: {
          trigger: myElement.current,
          // other options
        }
      });
    }
  }, []);

  return <div ref={myElement}>Content</div>;
}

export default Port;