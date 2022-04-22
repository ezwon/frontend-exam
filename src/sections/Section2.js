import React from 'react';
import styled from 'styled-components';
import movieTitle from '../assets/movie-title.png';

const StyledSection2 = styled.div`
  height: 100vh;
  position: relative;
  width: 100%;

  section {
    display: flex;
    align-items: center;
    justify-items: flex-start;
    height: 100%;
    justify-content: space-evenly;

    h1 {

      font-size: 50px;
      line-height: 50px;
      font-weight: 400;
      margin-bottom: 30px;
      margin-top: 55px;
    }

    .side-content {
      width: 40%;
      
      .text-wrapper{
        padding-left: 20px;
        max-width: 455px;
        font-size: 14px;
      }
    }
  }

`;


function Section2() {
    return (
        <StyledSection2>
            <section>
                <img src={movieTitle} alt="movie-title"/>
                <div className="side-content">
                    <div className="text-wrapper">
                        <h1>Background<br/> & Audience</h1>
                        <p>
                            Tourism & Events Queensland wanted to increase consideration of The Whitsundays amongst
                            ‘social
                            fun seekers’; digitally savvy consumers that socialise substantially online.
                        </p>
                        <h1>Problem</h1>
                        <p>
                            The Whitsundays was losing its cachet as an aspirational holiday location.
                        </p>
                        <h1>Objective</h1>
                        <p>
                            Shift perceptions and re-build the Whitsundays’ social currency as a world-class
                            destination.
                        </p>
                    </div>

                </div>
            </section>
        </StyledSection2>
    );
}

export default Section2;
