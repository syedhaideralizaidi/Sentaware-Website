import React from "react";
import Mockup_16tube from "../assets/Mockup_16tube.svg";
import shop_arrow from "../assets/shop_arrow.svg";
import styled from "styled-components";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../context/context";
import { useLocation } from "react-router-dom";


const Olfaction = () => {
  const location = useLocation();

  const { name,total } = useGlobalContext();

  const navigate = useNavigate();
  const handleClickbtn = () => {
    // 👇️ navigate programmatically
    var obj = localStorage.getItem("userid-local_storage")
    console.log("Local Storage Check from navbar: ",obj);
    navigate('/');
  }
  return (
    <Wrapper>
      <section class="thankyou-section" id="shop">
        <div class="container-fluid p-0 ">
          <div>
            <div class="row ">
              <div class="col-lg-12 col-md-6 col-sm-12">
                <span class="thanksheading">
                  Thank you!
                  <hr></hr>
                  <br />
                  Your order has been placed successfully.
                </span>
              </div>
              <div class="row">
                <div class="col-lg-8 col-md-6 col-sm-12">
                  <p class="e-mail">
                    <br />
                    We have sent an email confirmation to your registered email
                    ID.
                  </p>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-12">
                  <span>
                    <br />
                    <a onClick={handleClickbtn} style={{ color: "#22669C" }} className="Remove">
                      Visit the Sensify Store
                    </a>
                    &emsp;&emsp;
                    <img src={shop_arrow} onClick={handleClickbtn} className="Remove" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="thankyou-container">
        <div class="container-fluid">
          <div class="row thankyou">
            <div class="col-4">
              <img src={Mockup_16tube} class="imgSize" />
            </div>
            <div class="col-8">
              <div>
                <h3>i-Sticks 16 Scent Evaluation and Therapy kit</h3>

                <table class="hide-data">
                  <tr>
                    <th>Order number :</th>
                    <td style={{ paddingLeft: "40px" }}>{40245*total}</td>
                  </tr>
                </table>
                <br class="hide-data" />
                <table class="hide-data">
                  <tr>
                    <th style={{ width: "20%" }}>Deliver to:</th>
                    <td style={{ paddingLeft: "75px" }}>{location.state.name}</td>
                  </tr>
                </table>

                <table class="hide-data">
                  <tr>
                    <td style={{ paddingLeft: "150px" }}>
                      {location.state.address}
                    </td>
                  </tr>
                </table>
                <br class="hide-data" />
                <table>
                  <tr>
                    <th>Est. delivery date :</th>
                    <td style={{ paddingLeft: "10px" }}>15 June 2022</td>
                  </tr>
                </table>
                <br />
              </div>
            </div>
          
            <div class="row track">
              <div class="col-lg-3">
                <button style={{padding:'40 px 10px 10px 10px'}}>Track package</button>
              </div>
              <div class="col-lg-3 pb">
                <a
                onClick={handleClickbtn}
                  style={{
                    color: "#26649D",
                    textDecoration: "none",
                  }}
                  className="Remove"
                >
                  Continue shopping
                </a>
                <br />
                <br />
                <br />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .container-fluid {
    width: 63%;
  }
  .thanksheading {
    font-size: 32px;
    font-weight: 500;
    line-height: 38px;
    color: #4e4e4e;
  }
  .Remove:hover{
    cursor: pointer;
  }
  .test{
    padding: 50px 20px 20px 20px;
  }

  .e-mail {
    font-size: 16px;
    font-weight: 500;
    line-height: 19px;
    color: #4e4e4e;
  }
  .thankyou h3 {
    font-size: 24px;
    font-weight: 500;
    line-height: 28px;
    padding-bottom: 20px;
    color: #4e4e4e;
  }
  .thankyou tr th {
    font-size: 16px;
    font-weight: 500;
    line-height: 19px;
    color: #4e4e4e;
  }
  .f {
    font-size: 16px;
    font-weight: 500;
    line-height: 19px;
    color: #4e4e4e;
  }
  .thankyou td {
    font-size: 16px;
    font-weight: 500;
    line-height: 19px;
    color: #4e4e4e;
  }
  .track button {
    background-color: #22669c;
    /* box-shadow: 0px 8px 16px rgba(30, 30, 30, 0.3); */
    border-radius: 8px;
    border: none;
    padding: 10px 40px;
    color: white;
  }
  .thankyou-container {
    padding-top: 70px;
  }
  .thankyou-section {
    padding-top: 80px;
  }
  .hide-data {
    display: block;
  }
  .address {
    font-weight: 300;
    font-size: 16px;
    line-height: 19px;
    color: #4e4e4e;
  }
  .d {
    display: none;
  }
  //   .track {
  //     padding-left: 325px;
  //   }
  @media Screen and (min-width: 320px) and (max-width: 767px) {
    .container-fluid {
      width: 85%;
    }
    .d {
      display: block;
    }
    .hide-data {
      display: none;
    }
    .imgSize {
      width: 92px;
      height: 92px;
    }
    .thanksheading {
      font-weight: 500;
      font-size: 21px;
      line-height: 25px;
      color: #4e4e4e;
    }
    .e-mail {
      font-weight: 300;
      font-size: 16px;
      line-height: 19px;
    }
    .thankyou h3 {
      font-weight: 600;
      font-size: 16px;
      line-height: 19px;
      padding-bottom: 0px;
      color: #4e4e4e;
    }
    .track button {
      padding: 12px 100px;
    }
    .track a {
      padding-left: 90px;
    }
    .pb {
      padding-top: 20px;
    }
  }
`;

export default Olfaction;




