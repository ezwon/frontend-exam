import React from 'react';
import styled from 'styled-components';
import movieTitle from '../assets/movie-title.png';
import play from '../assets/play.png';
import ReactPlayer from "react-player";

const StyledSection1 = styled.div`
  height: calc(100vh - 75px);
  position: relative;
  width: 100%;
  margin-top: 75px;

  section {
    display: flex;
    align-items: center;
    justify-items: flex-start;
    height: 100%;
    justify-content: space-around;
  }

  .yt-player {
    position: absolute;
    z-index: 3;
    top: calc(50vh - 38px);
    width: 100%;
    transform: translateY(-50%);
  }

`;


function Section1({showPlayer, handleShowPlayer}) {

    const options = {
        playerVars: {autoplay: 1},
    };

    return (
        <StyledSection1>
            {showPlayer &&
            <div className="yt-player">
                <ReactPlayer height='calc(100vh - 75px)' width='100%' playing={showPlayer} embedOptions={options}
                             url='https://www.youtube.com/watch?v=_s_55cKycdA'/>
            </div>}
            <section>
                <img src={movieTitle} alt="movie-title"/>
                <img src={play} onClick={()=>handleShowPlayer()} style={{cursor: 'pointer'}} alt="play-icon"/>
                <img src={movieTitle} style={{visibility: "hidden"}} alt="movie-title"/>
            </section>
        </StyledSection1>
    );
}

export default Section1;
