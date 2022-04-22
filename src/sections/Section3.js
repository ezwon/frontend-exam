import React from 'react';
import styled from 'styled-components';

const StyledSection3 = styled.div`
  height: 100vh;
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  h1 {
    font-size: 50px;
    line-height: 50px;
    font-weight: 400;
    width: 100%;
    text-align: center;
  }

  section {
    display: flex;
    align-items: flex-start;
    justify-items: flex-start;
    justify-content: center;

    > div {
      width: 50%;
      .text-wrapper {
        padding-left: 40px;
        max-width: 455px;
        text-align: left;
        p{
          font-size: 14px;
          h3{
            font-size: 25px;
          }
        }
      }
    }
  }

`;


function Section3() {
    return (
        <StyledSection3>
            <h1>Solution</h1>
            <section>
                <div className="left-content">
                    <div className="text-wrapper">
                        <p>
                            We knew movies rated high on the list of our target’s interests and, with incredible
                            beaches, seaplanes, yachts and glamorous locations, the Whitsundays is the perfect setting
                            for a movie.
                            <br/>
                            <br/>
                            So we invited Australians to write it:

                            <h3>
                                The Whitsundays. <br/>
                                A movie that’s waiting to be written.

                            </h3>

                            We enlisted world-renowned screenwriter Craig Pearce as Script Supervisor. Then for 20 days
                            we posted a daily storyboard image on Facebook and Instagram, inviting the public to write
                            scenes for a chance to win a $10,000 luxury holiday.
                        </p>
                    </div>
                </div>
                <div className="right-content">
                    <div className="text-wrapper">
                        <p>
                            The campaign launched with a trailer, radio and online advertising.
                            <br/> <br/>
                            We reacted to the storyline as it developed, selecting and treating images according to the previous winning scene.
                            <br/> <br/>
                            Each scene written and shared became a compelling “ad” for the Whitsundays.
                            <br/> <br/>
                            Together, a Hollywood screenwriter and the Australian public had created the world’s first crowd-sourced movie storyboard and a story universe with millions of possible permutations.

                        </p>
                    </div>
                </div>
            </section>
        </StyledSection3>
    );
}

export default Section3;
