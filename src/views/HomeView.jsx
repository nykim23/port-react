import React from "react";
// import Header from "../components/Header";
import Intro from "../components/Intro";
import Skill from "../components/Skill";
import Site from "../components/Site";
import Port from "../components/Port";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Skip from "../components/Skip";
import Main from "../components/Main";
import AnimateTest from "../components/AnimateTest";
import Tooltip from "../components/Tooltip";

// import Animate from "../components/Animate";

const HomeView = () => {
    return (
        <>
            
            
            {/* <Header /> */}
            
            <Main>
                {/* <Animate /> */}

                <Tooltip tooltip="오늘도 좋은 하루 되세요!">
                    <button>제 React 포트폴리오에 방문해 주셔서 감사합니다!</button>
                </Tooltip>
                <Intro />
                {/* <AnimateTest /> */}
                
                <Port />
                <Site />
                <Skill />
                <Skip />
                <Contact />
                <Tooltip />
            </Main>
            <Footer />
        </>
    )
}

export default HomeView;