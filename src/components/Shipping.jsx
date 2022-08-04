import React from "react";
import styled from "styled-components";
import outline from "../assets/outline.svg";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import Product_Cart from "./Product_Cart";
import {useGlobalContext} from "../context/context";
import Footer from "../components/Footer.jsx";
import CheckoutNav from "./CheckoutNav";
import { useState } from "react";
import {toast} from "react-toastify";
import Swal from 'sweetalert2';


function Shipping  ({path}) {
 

  const {getpath}=useGlobalContext();

  const [ShippingToName,setName]=useState("");
  const [AddressLine1,setAddressLine1]=useState("");
  const [AddressLine2,setAddressLine2]=useState("");
  const [ZipCode,setZipcode]=useState("");
  const [City,setCity]=useState("");
  const [State,setState]=useState("");
  const [PhoneNumber,setPhoneNumber]=useState("");
  const[ShippingToEmail,setEmail]=useState("");
  const[ShippingToEmailC,setEmailC]=useState("");
  
  
  const[nameerror,setNameerror]=useState("");
  const[addresserror,setAddresserror]=useState("");
  const[address2error,setAddress2error]=useState("");
  const[zipcodeerror,setZipcodeerror]=useState("");
  const[cityerror,setCityerror]=useState("");
  const[stateerror,setStateerror]=useState("");
  const[phoneerror,setPhoneerror]=useState("");
  const [emailerror,setEmailerror]=useState("");
  const [emailerror2,setEmail2error]=useState("");

  function validate ()  {
          let nameerror="";
          let phoneerror="";
           let emailerror="";
           let emailerror2="";
            let addresserror="";
            let address2error="";
            let zipcodeerror="";
            let cityerror="";
            let stateerror="";
          
           //var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;


            ///VALIDATION CHECKS

            if(ShippingToEmail!==ShippingToEmailC){
             emailerror2="Email does not match";
            }
           if(ShippingToEmail.includes("@")===false){
            emailerror="Email is not valid";
           }

           if(ShippingToName==="" || ShippingToName.length<3 || ShippingToName.length>30){
            nameerror="Invalid Name";
           }
           if(AddressLine1==="" || AddressLine1.length<3 || AddressLine1.length>40){
            addresserror="Invalid Address";
           }
           if(AddressLine2==="" || AddressLine2.length<3 || AddressLine2.length>40){
            address2error="Invalid Address";
           }
           if(ZipCode==="" || ZipCode.length!==5 || isNaN(ZipCode)){
              zipcodeerror="Invalid Zipcode";
           }
            if(City==="" || City.length<3 || City.length>10){
            cityerror="Invalid City";
            }
            if(State==="" || State.length<3 || State.length>10){
            stateerror="Invalid State";
            }
            
            if(PhoneNumber===null || PhoneNumber.length!==11 || isNaN(PhoneNumber)){
                phoneerror="Invalid Phone Number";
            }

            if(nameerror!=="" || addresserror!=="" || address2error!=="" || zipcodeerror!=="" || cityerror!=="" || stateerror!=="" || phoneerror!=="" || emailerror!=="" || emailerror2!==""){
              setNameerror(nameerror);
              setAddresserror(addresserror);
              setAddress2error(address2error);
              setZipcodeerror(zipcodeerror);
              setCityerror(cityerror);
              setStateerror(stateerror);
              setPhoneerror(phoneerror);
              setEmailerror(emailerror);
              setEmail2error(emailerror2);
              return false;
            }

//////////////////////////////////////////////////////////////////

            if(nameerror){
              console.log("Name error",nameerror);
              setNameerror(nameerror);
              return false;
            }
            
            if(addresserror){
              console.log("Address error",addresserror);
              setAddresserror(addresserror);
              return false;
            }

            
            if(address2error){
              console.log("Address2 error",address2error);
              setAddress2error(address2error);
              return false;
            }

            
            if(zipcodeerror){
              console.log("Zip Code error",zipcodeerror);
              setZipcodeerror(zipcodeerror);
              return false;
            }

            if(cityerror){
              console.log("City error",cityerror);
              setCityerror(cityerror);
              return false;
            }

            if(stateerror){
              console.log("State error",stateerror);
              setStateerror(stateerror);
              return false;
            }

            if(phoneerror){
              console.log("Phone error",phoneerror);
              setPhoneerror(phoneerror);
              return false;
            }

           if(emailerror){
            console.log("Email error",emailerror);
            setEmailerror(emailerror);
            return false;
           }

           if(emailerror2){
            console.log("Email2 error",emailerror2);
            setEmail2error(emailerror2);
            return false;
           }
           return true;
  }

  const handleAdd = e => {
    //e.preventDefault();
    if (!ShippingToName || !AddressLine1 || !AddressLine2 || !ZipCode || !City || !State || !PhoneNumber || !ShippingToEmail || !ShippingToEmailC) {
        // return Swal.fire({
        //     icon: 'error',
        //     title: 'Error!',
        //     text: 'All fields are required.',
        //     showConfirmButton: true
        // });
        toast('Invalid Details! ',{type:"error"});
    }
    
    toast('Data Added Sucessfully! ',{type:"sucess"});
    // Swal.fire({
    //     icon: 'success',
    //     title: 'Added!',
    //     text: `${ShippingToName}'s data has been Added.`,
    //     showConfirmButton: false,
    //     timer: 1500
    // });
}





  function SaveUser(event)
  { 
    event.preventDefault();

    const isValid=validate();
    console.log("isValid",validate());

    if(isValid){
      

      Swal.fire({
        icon: 'success',
        title: 'Added!',
        text: `${ShippingToName} 's data has been added.`,
        showConfirmButton: false,
        timer: 3500,
    });
      navigate('/Order_Review',{state:{id:1,name:ShippingToName,address:AddressLine1,address2:AddressLine2,zipcode:ZipCode,city:City,state:State,phone:PhoneNumber,email:ShippingToEmail}});
      //console.log("inside navigation");
    }
    else{
      Swal.fire({
        icon: 'warning',
        title: 'Invalid Data',
        text: "Invalid Details Added, Please Enter Again!",
        showCancelButton: false,
        confirmButtonText: 'Try Again!',
    })
    }
}

  const navigate = useNavigate();

  const handleClick = () => {
    // 👇️ navigate programmatically
    navigate('/MainCheckOut');
  }


  return (
    <Wrapper>
      <Navbar />
      <CheckoutNav />
      {/* {cart && cart.filter((item)=>item.id===2 || item.id===1).map((item)=>{return <Product_Cart key={item.id} {...item} />})}
       */}


<div className='row container testing'>
       
<section  className='col-md-8 new' > 
{/* <Order_Review value={data}/> */}
        <div class="">
          <div class="">
            <div class="">
              <div class="row yourcart">
                <div class="col ">
                  <img
                    src={outline}
                    class="arrowHide"
                    alt=""
                    style={{ position: "relative", left: "-25px" }}
                    onClick={handleClick}
                  />
                  Shipping details
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <hr />
                </div>
              </div>
              <section class="shipping">
             
                <form>
                
                  {/* <PaymentElement /> */}

                <div class="col">
                  <div class="row">
                    <div class="col-lg-4 col-sm-12">
                      <label for="fname" class="label-align">
                        Ship to :
                      </label>
                    </div>
                   
                   
                    <div class="col-lg-6 col-sm-12">
                      <input
                        type="text"
                        value={ShippingToName}
                        name="name"
                        placeholder="Full name"
                        onChange={(e)=>setName(e.target.value)}
                      />
                      <div style={{color:'red',fontsize:'12px'}}>{nameerror}</div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-lg-4 col-sm-12">
                      <label for="Address" class="label-align">
                        Address :
                      </label>
                    </div>
                    <div class="col-lg-6 col-sm-12">
                      <input
                        type="text"
                        name="Address1"
                        placeholder="Address line 1"
                        value={AddressLine1}
                        onChange={(e)=>setAddressLine1(e.target.value)}
                      />
                       <div style={{color:'red',fontsize:'12px'}}>{addresserror}</div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-lg-6 col-sm-12 offset-lg-4">
                      <input
                        type="text"
                        name="Address2"
                        placeholder="Address line 2"
                        value={AddressLine2}
                        onChange={(e)=>setAddressLine2(e.target.value)}
                      />
                       <div style={{color:'red',fontsize:'12px'}}>{address2error}</div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-4">
                      <label for="zip-code" class="label-align">
                        Zip code :
                      </label>
                    </div>
                    <div class="col-6 width-mobile">
                      <input type="text" name="zip-code" value={ZipCode} onChange={(e)=>setZipcode(e.target.value)} />
                      <div style={{color:'red',fontsize:'12px'}}>{zipcodeerror}</div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-4">
                      <label for="city" class="label-align">
                        City :
                      </label>
                    </div>
                    <div class="col-6 width-mobile">
                      <input type="text" name="city" value={City} onChange={(e)=>setCity(e.target.value)}/>
                      <div style={{color:'red',fontsize:'12px'}}>{cityerror}</div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-4">
                      <label for="lname" class="label-align">
                        State :
                      </label>
                    </div>
                    <div class="col-6 width-mobile">
                      <input type="text" name="state" value={State} onChange={(e)=>setState(e.target.value)} />
                      <div style={{color:'red',fontsize:'12px'}}>{stateerror}</div>
                    </div>
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
                          Continue
                        </a>
                      </button>
                    </span>
                  </div>

                  <div class="row">
                    <div class="col-lg-4 col-sm-12">
                      <label for="" class="label-align ">
                        Contact information :
                      </label>
                    </div>
                    <div class="col-lg-6 col-sm-12">
                      <input
                        type="text"
                       
                        name="phone-number"
                        placeholder="Phone number"
                        value={PhoneNumber}
                        onChange={(e)=>setPhoneNumber(e.target.value)}
                      />
                       <div style={{color:'red',fontsize:'12px'}}>{phoneerror}</div>
                      <p>
                        Phone numbers shall be used only for delivery purposes.
                      </p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-lg-6 col-sm-12 offset-lg-4">
                      <input
                        type="text"
                       
                        name="E-mail"
                        placeholder="E-mail"
                        value={ShippingToEmail}
                        onChange={(e)=>setEmail(e.target.value)}
                      />
                      <p>We will send an order confirmation on this email.</p>
                      <div style={{color:'red',fontsize:'12px'}}>{emailerror}</div> 
                    </div>
                    
                  </div>
                  <div class="row">
                    <div class="col-lg-6 col-sm-12 offset-lg-4">
                      <input
                        type="text"
                      
                        name="Confirm e-mail"
                        placeholder="Confirm e-mail"
                        value={ShippingToEmailC}
                        onChange={(e)=>setEmailC(e.target.value)}
                      />
                      <div style={{color:'red',fontsize:'12px'}}>{emailerror2}</div>
                    </div>
                  </div>
                </div>
                </form>
              </section>
              {/* <div class="alignment-order">
                <div class="col1 continue1">
             
                  <button onClick={SaveUser}>
                    <a
                      style={{ textDecoration: "none", color: "white",textAlign:"center" }}
                        // onClick={}
                    >
                      Continue
                    </a>
                  </button>
               
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      <div class="col col-md-4 padding-0">
        <Product_Cart onClick={SaveUser} />
      </div>

    </div>
    {/* <Order_Review value="haider" /> */}
    <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Footer />

      
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .container-fluid {
    width: 63%;
  }

  body{
    overflow:scroll;
  }

  .testing{
    margin-left:120px;
    margin-right:120px;
    align-items:row;
    padding-left:110px;
    padding-right:160px;
  }

  .continue1 {
    padding-top: 0px;
  }
  .continue1 button {
    background-color: #22669c;
    /* box-shadow: 0px 8px 16px rgba(30, 30, 30, 0.3); */
    border-radius: 8px;
    border: none;
    padding: 10px 0px;
    color: white;
    width:30%;
  }

  .alignment-order {
    padding-bottom: 10px;
  }

  .btn {
    display: none !important;
  }
  @media screen and (min-width: 320px) and (max-width: 767px) {
    .btn {
      display: block !important;
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
    .width-mobile {
      width: 65%;
    }
  }
  .yourcart {
    padding-top: 68px;
    font-size: var(--font-size-24px);
    font-weight: var(--font-weight-500);
    line-height: 28px;
  }
  input[type="text"] {
    width: 100%;
    padding: 10px 20px;
    margin: 8px 0;
    display: inline-block;
    /* border: 1px solid #ccc; */
    border: none;
    box-sizing: border-box;
    background: #f3f3f3;
  }
  .label-align {
    padding-top: 22px;
    font-family: Work Sans;
    font-size: 16px;
    font-weight: 500;
    line-height: 19px;
  }
  .shipping p {
    font-family: Work Sans;
    font-size: 12px;
    font-weight: 300;
    line-height: 14px;
  }
  .credit {
    background-color: #22669c;
    border: none;
    padding: 10px 20px;
    color: white;
  }
  .card-icon {
    padding-top: 20px;
    padding-bottom: 20px;
  }

  .continue {
    padding-top: 0px;
  }
  .continue button {
    background-color: #22669c;
    /* box-shadow: 0px 8px 16px rgba(30, 30, 30, 0.3); */
    
    border: none;
    padding: 10px 0px;
    color: white;
    width:100%;
  }
`;

export default Shipping;
