import React from 'react'
import styled from 'styled-components'
import Hero_blue from '../assets/Hero_blue.svg'
import Signin from './Login Pages/Signin'

function Dialogue() {
  return (
    <Wrapper>
    <div class="background-img">
        <div class="containercheck">
        <Signin />
        </div>
        </div>
    </Wrapper>
    )
}

const Wrapper = styled.div`

.new{
   // background-color: green;
}

.container-fluid {
    width: 63%;
  }
  .background-img {
    background-image: url(${Hero_blue});
    background-size: cover;
    background-position: top;
    height: 100vh;
  }
    .containercheck {
        
        margin-left: 150px;
        margin-right: 350px;
        width: 1200px;
        height: auto;
        //display: flex;
        //flex-direction: column;
        justify-content: center;
        align-items: center;

    }


`

export default Dialogue