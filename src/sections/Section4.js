import React, {useState} from 'react';
import styled from 'styled-components';

const StyledSection4 = styled.div`
  height: 100vh;
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .tabs {
    font-size: 14px;
    width: 100%;
    text-align: center;
    margin-bottom: 40px;
    
    span{
      padding: 8px 6px;
      border-radius: 8px;
      margin: 0 2px;
      cursor: pointer;
      
      &.active{
        background-color: #1a3e4e;
      }
    }
  }

  section {
    display: flex;
    align-items: flex-start;
    justify-items: flex-start;
    justify-content: center;

    > div {
      width: 50%;
      
      .black-box{
        background-color: #000;
        border-radius: 8px;
        height: 160px;
        width: 400px;
      }
      
      .text-wrapper {
        padding-left: 40px;
        max-width: 455px;
        text-align: left;
        p{
          font-size: 14px;
          margin-bottom: 50px;
          h3{
            font-size: 25px;
          }
        }
        
        button{
          border: none;
          cursor: pointer;
          padding: 15px 50px;
          background-color: #178bc1;
          color: #fff;
          border-radius: 8px;
        }
      }
    }
  }

`;

function Section4() {

    const [currentTab,setCurrentTab] = useState('video');

    const text = {
        video: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation',
        photography: 'ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        social: 'ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis ',
        pr: 'dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum',
        radio: 'laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur',
    }


    return (
        <StyledSection4>
            <div className="tabs">
                <span className={currentTab === 'video' ? 'active':''} onClick={()=>setCurrentTab('video')}>Video</span>
                <span className={currentTab === 'photography' ? 'active':''} onClick={()=>setCurrentTab('photography')}>Photography</span>
                <span className={currentTab === 'social' ? 'active':''} onClick={()=>setCurrentTab('social')}>Social</span>
                <span className={currentTab === 'pr' ? 'active':''} onClick={()=>setCurrentTab('pr')}>PR</span>
                <span className={currentTab === 'radio' ? 'active':''} onClick={()=>setCurrentTab('radio')}>Radio</span>
            </div>
            <section>
                <div className="left-content">
                    <div className="black-box" />
                </div>
                <div className="right-content">
                    <div className="text-wrapper">
                        <p>
                            {text[currentTab]}
                        </p>
                        <button>
                            View Project
                        </button>
                    </div>
                </div>
            </section>
        </StyledSection4>
    );
}

export default Section4;
