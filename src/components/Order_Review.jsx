import React from "react";
import Mockup_16tube from "../assets/Mockup_16tube.svg";
import outline from "../assets/outline.svg";
import styled from "styled-components";
import Navbar from './Navbar.jsx';
import { useNavigate } from "react-router-dom";
import Product_Cart from "./Product_Cart";
import { useGlobalContext } from "../context/context";
import Footer from "../components/Footer.jsx";
import CheckoutNav from "./CheckoutNav";
import { useLocation } from "react-router-dom";
import Axios from "axios";
import Swal from "sweetalert2";
import Noitem from "./Noitem";

const Olfaction= (props)=> {
  const navigate = useNavigate();
  const location=useLocation();
  const { amount,total,clearCart } = useGlobalContext();
  
  let isok=false;
  const test=amount;
  if(test>0)
  {
    console.log("Inside isok true");
    isok=true;
  }
  else{
    console.log("Inside isok false");
    isok=false;
  }

  var newobj={};
  const {getpath}=useGlobalContext();  
  var totalfinal=total;
  totalfinal+=(total/total)*10;
  totalfinal+=total*0.1;
  
  const handleClick = () => {
    // 👇️ navigate programmatically
    navigate('/Payment');
  }

  const handletest = () => {
    // 👇️ navigate programmatically
    //console.log();
    //navigate('/Payment');
  }

  const handleClickbtnadd = () => {
    // 👇️ navigate programmatically
    console.log("Inside Thank you");

    navigate('/Payment');
  }

  const handleClickbtn = () => {
    // 👇️ navigate programmatically
    //console.log("Hell",props.state.object);
    
    // var obj={}
    const obj= {
      "Url":"/checkout",
      "Order":{
    
    
         "UserId":1,
         "ShippingToName":"",
         "AddressLine1":"",
         "AddressLine2":"",
         "ZipCode":"",
         "City":"",
         "State":"",
         "PhoneNumber":"",
         "ShippingToEmail": "",
         "ShippingFee":100,
         "SaleTax":100,
         "DeliveryType":"Cash On Delivery",
         "OrderItemlist":[
            {
               "ProductId":2,
               "Qty":4,
               "Price":95
            },
            {
               "ProductId":1,
               "Qty":4,
               "Price":50
            }
         ]
      }
    } 

    var localid=localStorage.getItem("local_id_store");
    console.log("localid",localid);
    localid=parseInt(localid);

    obj["Order"]['UserId']=localid;
    obj["Order"]['ShippingToName']=location.state.name;
    obj["Order"]['AddressLine1']=location.state.address;
    obj["Order"]['AddressLine2']=location.state.address2;
    obj["Order"]['ZipCode']=location.state.zipcode;
    obj["Order"]['City']=location.state.city;
    obj["Order"]['State']=location.state.state;
    obj["Order"]['PhoneNumber']=location.state.phone;
    obj["Order"]['ShippingToEmail']=location.state.email;
    
    obj['Order']['OrderItemList']=[{
      "ProductId":2,
      "Qty":amount,
      "Price":95
   },
   {
      "ProductId":1,
      "Qty":amount,
      "Price":50
   }];

   console.log("Final Object :",obj);
   
    var api='https://5qrg7as0r4.execute-api.us-east-1.amazonaws.com/isticks/checkout';
    Axios.post(api,obj).then(res=>{
          console.log(res.data)
          navigate('/Payment',{state:{id:localid,name:location.state.name,address:location.state.address,responses:res.data}});
          newobj=res.data;
        })
        
        Swal.fire({
          icon: 'success',
          title: 'Order Reviewed!',
          text: "Press Continue to Pay!",
          showConfirmButton: false,
          timer: 3500,
      });
      var message=newobj["Message"];
    console.log("newobj",newobj["Message"],"Messaeges",message);
    
  }

  if(isok){
  return (
    <Wrapper>

      <Navbar />
      <CheckoutNav />

    <div className="row container testing">
      <section className='col-md-8'>
      <section class="">
        <div class="">
          <div class="">
            <div class="">
              <div class="row yourcart">
                <div class="col">
                  <img
                    src={outline}
                    class="arrowHide"
                    alt="arrow"
                    style={{ position: "relative", left: "-25px" }}
                    onClick={handleClick}
                  />
                  Review items
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <hr />
                </div>
              </div>
              <div class="row reviews-item">
                <div class="col-lg-5">
                  <img src={Mockup_16tube} class="review-img" />
                  {/* <img src="./img/Mockup_16tube 2.svg" class="review-img1" /> */}
                </div>
                <div class="col-lg-7">
                  <div>
                    <h3>i-Sticks Scent Evaluation and Therapy kit</h3>

                    <table>
                      <tr>
                        <th>Qty : </th>
                        <td style={{ width: "55%" }}>{amount}</td>
                        <td style={{ width: "20%" }}>
                          <a onClick={handleClickbtnadd} style={{ color: "#26649D" }} className="Remove">
                            
                          </a>
                        </td>
                      </tr>
                    </table>
                    <br />
                    <table>
                      <tr>
                        <th>Price :</th>
                        <td style={{ width: "30%" }} class="dateStyle">
                          ${totalfinal}
                        </td>
                      </tr>
                    </table>
                    <br />
                    <table>
                      <tr>
                        <th>Estimated delivery date :</th>

                        <td style={{ width: "27%" }} class="dateStyle">
                          15 June 2022
                        </td>
                      </tr>
                    </table>
                    <br />
                    <table class="hideremove">
                      <tr>
                        <th style={{ paddingTop: "25px" }}>
                          <a onClick={clearCart} style={{ color: "#4E4E4E" }} className="Remove">
                            Remove Items
                          </a>
                        </th>
                      </tr>
                    </table>
                  </div>
                  <div class="d-flex btn">
                    <span>
                      <img
                        src={outline}
                        alt=""
                        style={{ position: "relative", left: "-5px" }}
                      />
                      Back
                    </span>
                    <span
                      class="continue"
                      style={{ marginRight: "-90px", paddingLeft: "70px" }}
                    >
                      <button>
                        <a
                          href="./ShippingPage.html"
                          style={{ textDecoration: "none", color: "white" }}
                        >
                          Place order and pay
                        </a>
                      </button>
                    </span>
                  </div>
                  <div class="address-hide">
                    <div className="s" style={{ display: "flex" }}>
                      <span style={{ fontWeight: "500" }}>
                        Shipping details
                      </span>
                      {/* <img src={line_2} class="mb" /> */}
                      <hr
                        style={{
                          marginLeft: "20px",
                          width: "50%",
                        }}
                        class="mb"
                      />
                    </div>
                    <table>
                      <tr>
                        <th>Ship to :</th>
                        <td style={{ width: "10%" }}>
                          <a href="#" style={{ color: "#26649D" }}>
                            Edit
                          </a>
                        </td>
                      </tr>
                    </table>
                    <p class="address" style={{ paddingTop: "10px" }}>
                      John Smith
                    </p>
                    <p class="address">
                      2533 Lost Creek Road, Fort Washington, Pennsylvania, 19034
                    </p>
                    <p class="address">610-906-6881</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      

<br></br>
<br></br>
      
          </section>    
      
    </section>
    

    <div class="col col-md-4 padding-0">
        <Product_Cart onClick={handleClickbtn} />
      </div>

    </div>

    {/* <div class="alignment-order">
                <div class="col continue1">
                  <button onClick={handleClickbtn} style={{alignItems:'center'}}>
                    <a
                      style={{ textDecoration: "none", color: "white",alignItems:"center",padding:'10px 10px 10px 10px' }}
                    >
                      Continue
                    </a>
                  </button>
                  
                </div>
              </div> */}
              <br></br>
      <br></br>
      <br></br>
      <br></br>
     
      <Footer />
    </Wrapper>
  );}
  else if(!isok){
    return (
      <Wrapper>
        <Navbar />
    
  
      <div className="row container testing">
        <section  className='col-md-8' >
          <div class="col">
            <div class="row yourcart">
      
          </div>
        </div>
            <Noitem />
        </section>

      </div>
  
        <Footer />
      </Wrapper>
    );
  }
};

const Wrapper = styled.section`
  .container-fluid {
    width: 63%;
  }

  .testing{
    margin-left:120px;
    margin-right:120px;
    align-items:row;
    padding-left:110px;
    padding-right:160px;
  }
  .yourcart {
    padding-top: 68px;
    font-size: var(--font-size-24px);
    font-weight: var(--font-weight-500);
    line-height: 28px;
  }
  .alignment-order {
    padding-bottom: 10px;
  }
  .reviews-item {
    padding-top: 40px;
  }
  .reviews-item h3 {
    font-size: 24px;
    font-weight: 500;
    line-height: 28px;
    padding-bottom: 40px;
    color: #4e4e4e;
  }
  .Remove:hover{
      cursor:pointer;
  }
  .reviews-item th {
    font-size: 16px;
    font-weight: 500;
    line-height: 19px;
    color: rgba(0, 0, 0, 0.55);
  }
  .reviews-item a {
    font-size: 16px;
    font-weight: 500;
    line-height: 19px;
  }
  .dateStyle {
    font-size: 16px;
    font-weight: 600;
    line-height: 19px;
  }
  .continue button {
    background-color: #22669c;
    /* box-shadow: 0px 8px 16px rgba(30, 30, 30, 0.3); */
    border: none;
    padding: 20px 50px;
    color: white;
  }
  .btn {
    display: none !important;
  }
  .address {
    font-weight: 300;
    font-size: 16px;
    line-height: 19px;
    color: #4e4e4e;
  }
  .address-hide {
    display: none;
  }
  @media screen and (min-width: 320px) and (max-width: 767px) {
    .address-hide {
      display: block;
    }
    .btn {
      display: block !important;
    }
    .alignment-order {
      padding-bottom: 10px;
    }
    .cart .container-fluid {
      width: 85%;
    }
    .yourcart {
      padding-top: 20px;
    }
    .arrowHide {
      display: none;
    }
    .review-img {
      width: 296px;
      height: 296px;
    }
    .reviews-item h3 {
      font-size: 16px;
      font-weight: 600;
      line-height: 19px;
      padding-bottom: 20px;
      padding-top: 15px;
      color: #4e4e4e;
    }
    .reviews-item {
      padding-top: 0px;
    }
    .hideremove {
      display: none;
    }
  }
  .continue1 {
    padding-top: 0px;
    padding-left: 300px;
  }
  .continue1 button {
    background-color: #22669c;
    /* box-shadow: 0px 8px 16px rgba(30, 30, 30, 0.3); */
    border-radius: 8px;
    border: none;
    padding: 10px 0px;
    color: white;
    width: 10%;
  }

  .continue button {
    background-color: #22669c;
    /* box-shadow: 0px 8px 16px rgba(30, 30, 30, 0.3); */
    border-radius: 8px;
    border: none;
    padding: 10px 0px;
    color: white;
    width:100%;
    cursor:cursor;

    
  }
`;

export default Olfaction;
