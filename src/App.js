import {useRef, useState} from "react";
import styled from 'styled-components';
import mainBG from './assets/background.jpg';
import useScrollSpy from "react-use-scrollspy";
import {BsFillCircleFill} from "react-icons/bs";


import {
    Header,
    Section1,
    Section2,
    Section3,
    Section4
} from './sections';

const StyledWrapper = styled.div`
  background-image: url("${mainBG}");
  background-size: cover;
  background-repeat: no-repeat;
  background-color: #1c526e;
  width: 100%;

  .section-dot-nav {
    flex-direction: column;
    position: fixed;
    top: 50%;
    width: 5px;
    color: #fff;
    font-size: 8px;
    margin: 13px;
    right: 10px;
    cursor: pointer;
    z-index: 2;

    a {
      text-transform: none;
      text-decoration: none;
      color: #fff;
    }


    svg {
      margin-bottom: 10px;

      &.active {
        box-shadow: 0 0 8px rgb(255 255 255 / 100%)
      }

    }
  }
  
  
`;

function App() {
    const [showPlayer, setShowPlayer] = useState(false);

    const handleShowPlayer = ()=> {
        setShowPlayer(true) ;
    }

    const sectionRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

    const currentSection = useScrollSpy({
        sectionElementRefs: sectionRefs,
        offsetPx: -75,
    });

    return (
        <StyledWrapper>
            <div className="section-dot-nav">
                <a href="#section-1">
                    <BsFillCircleFill className={currentSection === 0 ? 'active' : ''}/>
                </a>
                <a href="#section-2">
                    <BsFillCircleFill className={currentSection === 1 ? 'active' : ''}/>
                </a>
                <a href="#section-3">
                    <BsFillCircleFill className={currentSection === 2 ? 'active' : ''}/>
                </a>
                <a href="#section-4">
                    <BsFillCircleFill className={currentSection === 3 ? 'active' : ''}/>
                </a>
            </div>
            <Header currentSection={currentSection} showPlayer={showPlayer} handleShowPlayer={handleShowPlayer}/>
            <section ref={sectionRefs[0]} id="section-1">
                <Section1 showPlayer={showPlayer} handleShowPlayer={handleShowPlayer}/>
            </section>
            <section ref={sectionRefs[1]} id="section-2">
                <Section2/>
            </section>
            <section ref={sectionRefs[2]} id="section-3">
                <Section3/>
            </section>
            <section ref={sectionRefs[3]} id="section-4">
                <Section4/>
            </section>

        </StyledWrapper>
    );
}

export default App;
