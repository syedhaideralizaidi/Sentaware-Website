import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from "styled-components";
import outline from "../../assets/outline.svg";
import { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Swal from 'sweetalert2';
import Axios from 'axios';
import Confirmation from './Confirmation';
import art1 from '../../assets/art.png';

function Signup({closemodel}) {

    const [Name,setName]=useState("");
    const [Email,setEmail]=useState("");
    const [Phone,setPhone]=useState("");
    const [Password,setPassword]=useState("");

    const[nameerror,setNameerror]=useState("");
    const[emailerror,setEmailerror]=useState("");
    const[phoneerror,setPhoneerror]=useState("");
    const[passworderror,setPassworderror]=useState("");
    var obj={};
    const navigate = useNavigate();
    function handleClickSignup(){
        navigate('/Signup');
    }

    function validate ()  {
        let nameerror="";
        let phoneerror="";
         let emailerror="";
         let passworderror="";
         

          ///VALIDATION CHECKS

        //   if(ShippingToEmail!==ShippingToEmailC){
        //    emailerror2="Email does not match";
        //   }
         if(Email.includes("@")===false){
          emailerror="Email is not valid";
         }

         if(Name==="" || Name.length<3 || Name.length>30){
          nameerror="Invalid Name";
         }
        
          if(Phone===null || Phone.length!==11 || isNaN(Phone)){
              phoneerror="Invalid Phone Number";
          }
          var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;

          if(Password===null || Password.length!==8 || !Password.match(passw) ){
            passworderror="Invalid Password (Add Special and Numeric Characters ,UpperCase and LowerCase Letters)";
        }

          if(nameerror!=="" || phoneerror!=="" || emailerror!=="" || passworderror!==""){
            setNameerror(nameerror);
            setPhoneerror(phoneerror);
            setEmailerror(emailerror);
            setPassworderror(passworderror);
            return false;
          }

//////////////////////////////////////////////////////////////////

          if(nameerror){
            console.log("Name error",nameerror);
            setNameerror(nameerror);
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

         if(passworderror){
          console.log("Password error",passworderror);
          setPassworderror(passworderror);
          return false;
         }
         return true;
}

    const Clickback=()=>{
        //closemodel(false);
        navigate('/Signin');
    }

    const handleClick = (event) => {
        // 👇️ navigate programmatically

        var checkin=false;

        event.preventDefault();

        const isValid=validate();
        console.log("isValid",validate());

        if(isValid){
             obj={
                "EmailAddress":"myemail121@gmail.com",
                "Password":"PAin77@!",
                "UserName":"Ali Hamza",
                "PhoneNumber":"+923214186535",
                "Url":"/signup",
                 "Gender":"male",
                 "IsStuffyNose":false,
                 "IsThereLossOfMemory":false,
                  "Medication":"",
                  "Age":24
            }
            var myphone="+92"+Phone;
             obj["EmailAddress"]=Email;
             obj["Password"]=Password;
             obj["PhoneNumber"]=myphone;
             obj["UserName"]=Name;

            var stat;
            var api='https://5qrg7as0r4.execute-api.us-east-1.amazonaws.com/isticks/signup';
            Axios.post(api,obj).then(res=>{
                console.log("Axios Response: ",res.data);
                stat=res.data;
                console.log("stat",stat["StatusCode"]);
                if(stat["StatusCode"]===200){
                    checkin=true;
                    Swal.fire({
                    icon: 'success',
                    title: 'Added!',
                    text: `${Name} has been Signed Up.`,
                    showConfirmButton: false,
                    timer: 3500,
                });
                var useridval=stat.Data.UserId;
                console.log("userid",useridval);
                navigate('/Confirmation',{state:{userid:useridval,email:Email}});
    
                }
                else{
                    Swal.fire({
                      icon: 'warning',
                      title: 'Invalid Data',
                      text: stat["Message"],
                      showCancelButton: false,
                      confirmButtonText: 'Try Again!',
                  })
                  }
              })
        }
      }

  return (
    <Wrapper>
        <Navbar />
    <div className=''>
        <div className="row container">
        <section  className='col-md-6 new'> 
        <img src={art1} alt="Cart_icon" className='img-here'/>
        </section>


         <section className='col-md-6 pad-right'>
            <div className="row">
            <div class="col yourcart">
                  <img
                    src={outline}
                    class="arrowHide"
                    alt=""
                    style={{ position: "relative", left: "-25px" }}
                    onClick={Clickback}
                  />
                  Sign Up
                </div>
                </div>
                <div class="row">
                <div class="col">
                  <br />
               
                
                </div>
              </div>


              <section class="shipping">
             
             <form>
             
               {/* <PaymentElement /> */}

             <div class="col">
               <div class="row">
                 <div class="col-lg-4 col-sm-12">
                   <label for="fname" class="label-align word">
                     Name :
                   </label>
                 </div>
                 <div class="row1">
                   <input
                     type="text"
                     value={Name}
                     name="name"
                     placeholder="Full name"
                     onChange={(e)=>setName(e.target.value)}
                   />
                   <div style={{color:'red',fontsize:'12px'}}>{nameerror}</div>
                 </div>
               </div>
                <br></br>

                <div class="row">
                 <div class="col-lg-4 col-sm-12">
                   <label for="Email" class="label-align word">
                   Email :
                   </label>
                 </div>
                 <div class="row1">
                   <input
                     type="email"
                     name="Email"
                     placeholder="Email"
                     value={Email}
                     onChange={(e)=>setEmail(e.target.value)}
                   />
                    <div style={{color:'red',fontsize:'12px'}}>{emailerror}</div>
                 </div>
               </div>

               <br></br>

               <div class="row">
                 <div class="col-lg-4 col-sm-12">
                   <label for="Phone" class="label-align word">
                     Phone Number :
                   </label>
                 </div>
                 <div class="row1">
                   <input
                     type="text"
                     name="Phone"
                     placeholder="Phone Number"
                     value={Phone}
                     onChange={(e)=>setPhone(e.target.value)}
                   />
                    <div style={{color:'red',fontsize:'12px'}}>{phoneerror}</div>
                 </div>
               </div>

               <br></br>

               <div class="row">
                 <div class="col-lg-4 col-sm-12">
                   <label for="Password" class="label-align word">
                     Password :
                   </label>
                 </div>
                 <div class="row1">
                   <input
                     type="password"
                     name="Password"
                     placeholder="Password"
                     value={Password}
                     onChange={(e)=>setPassword(e.target.value)}
                   />
                    <div style={{color:'red',fontsize:'12px'}}>{passworderror}</div>
                 </div>
               </div>
        <br></br>
             
               </div>
            </form>
    </section>

    

    <div class="alignment-order">
                <div class="col continue">
                  <button onClick={handleClick} type="submit" value="Submit">
                    <a
                      style={{ textDecoration: "none", color: "white",textAlign:"center" }}
                    >
                      Sign Up
                    </a>
                  </button>
                </div>
              </div>
        </section>   
            </div>

    </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`

.Modalback{
    // width:500vw;
    // height:100vh;
    // background-color:white;
    // position:fixed;
    // display: flex;
    // justify-content: center;
    // align-items: center;
}

.img-here {
    height: 70%;
    margin-left: 200px;
    margin-top: 150px;
    //margin-bottom: 200px;
  }

.new{
    background-color: #26649d;
    margin-left: -15px;
    padding-bottom:1000px;
    padding-right: 0px;
}

.pad-right{
    padding-right: 10px;
    padding-left: 100px;
    margin-top: 120px;
    background: white;

}

.word{

    
    font-family: 'Work Sans';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    /* identical to box height */


    color: #4E4E4E;

}


.yourcart {
    padding-top: 68px;
    font-size: var(--font-size-24px);
    font-weight: var(--font-weight-500);
    line-height: 28px;
  }
  input[type="text"] {
    box-sizing: border-box;
   // position: absolute;
    width: 388px;
    height: 48px;
    left: 730px;
    top: 385px;
    background: #FFFFFF;
    border: 1px solid #26649D;
    border-radius: 8px;
    margin-top: 7px;
  }

  input[type="email"] {
    box-sizing: border-box;
//    position: absolute;
    width: 388px;
    height: 48px;
    left: 730px;
    top: 385px;
    background: #FFFFFF;
    border: 1px solid #26649D;
    border-radius: 8px;
    margin-top: 10px;
    margin-bottom:15px;
  }

  input[type="password"] {
    box-sizing: border-box;
  //   position: absolute;
    width: 388px;
    margin-top: 10px;
    height: 48px;
    left: 730px;
    top: 385px;
    background: #FFFFFF;
    border: 1px solid #26649D;
    border-radius: 8px;
  }

  .shipping p {
    font-family: Work Sans;
    font-size: 12px;
    font-weight: 300;
    line-height: 14px;
  }
  
.row1{
        margin-left: 15px;
        height: 18px;
  }

  .continue {
    margin-top: 40px;
    margin-left:40px;
  }
  .continue button {
    background-color: #22669c;
    /* box-shadow: 0px 8px 16px rgba(30, 30, 30, 0.3); */
    
    border: none;
    padding: 10px 0px;
    color: white;
    width:100%;
  }

  .label-align {
    padding-top: 22px;
    font-family: Work Sans;
    font-size: 16px;
    font-weight: 500;
    line-height: 19px;
  }
  
  .alignment-order {
    padding-bottom: 10px;
    margin-top: 80px;
    margin-right: 170px;
  }





`

export default Signup