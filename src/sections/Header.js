import React from 'react';
import styled from 'styled-components';
import {AiFillCaretRight, AiOutlineDownload} from "react-icons/ai";

const StyledHeader = styled.div`
  height: 75px;
  position: fixed;
  top: 0;
  width: 100%;
  background: #333333;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;

  .top-nav-wrapper {
    display: flex;
    max-width: 960px;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
    color: #fff;
  }

  .menu-item {
    cursor: pointer;
    padding: 11px 17px;
    border-left: 1px solid #484848;
    position: relative;

    &:nth-child(1) {
      border: none;
    }

    &.active a {
      color: #CFBF8B !important;
    }

    a {
      text-transform: none;
      text-decoration: none;
      color: #fff;
    }
  }

  button {
    color: #fff;
    cursor: pointer;
    padding: 8px 20px;
    background-color: #282828;
    border: none;
    border-radius: 8px;

    &.play {
      padding: 12px;
      border-radius: 8px;
      height: 36px;
    }
  }

`;

function Header({currentSection, handleShowPlayer}) {

    return (
        <StyledHeader>
            <div className="top-nav-wrapper">
                <div>
                    <span className="menu-item">
                     <a href="#section-1">
                        <button className="play" onClick={() => handleShowPlayer(true)}>
                            <AiFillCaretRight/>
                        </button>
                     </a>
                    </span>
                    <span className={currentSection === 0 ? 'menu-item active ' : 'menu-item'}>
                        <a href="#section-1">Background & Challenge</a>
                    </span>
                    <span className={currentSection === 1 ? 'menu-item active menu-item' : 'menu-item'}>
                        <a href="#section-2">Result & Effectiveness</a>
                    </span>
                    <span className={currentSection === 2 ? 'menu-item active' : 'menu-item'}>
                        <a href="#section-3">Solution</a>
                    </span>
                    <span className={currentSection === 3 ? 'menu-item active' : 'menu-item'}>
                        <a href="#section-4">Slideshow</a>
                    </span>
                </div>
                <button><AiOutlineDownload/> Download Board</button>
            </div>
        </StyledHeader>
    );
}

export default Header;
