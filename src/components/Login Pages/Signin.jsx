import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from "styled-components";
import outline from "../../assets/outline.svg";
import { useState } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import Swal from 'sweetalert2';
import Axios from 'axios';
import { useEffect } from 'react';
import art1 from '../../assets/art.png';

function Signin() {

  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  var obj = {}
  const [emailerror, setEmailerror] = useState("");
  const [passworderror, setPassworderror] = useState("");
  const [user,setUser]=useState();

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUser(foundUser);
    }
  }, []);

  const navigate = useNavigate();

  function validate() {

    let emailerror = "";
    let passworderror = "";


    ///VALIDATION CHECKS

    //   if(ShippingToEmail!==ShippingToEmailC){
    //    emailerror2="Email does not match";
    //   }
    if (Email.includes("@") === false) {
      emailerror = "Email is not valid";
    }

    var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;

    if (Password === null || Password.length !== 8 || !Password.match(passw)) {
      passworderror = "Invalid Password (Add Special and Numeric Characters ,UpperCase and LowerCase Letters)";
    }

    if (emailerror !== "" || passworderror !== "") {
      setEmailerror(emailerror);
      setPassworderror(passworderror);
      return false;
    }

    //////////////////////////////////////////////////////////////////


    if (emailerror) {
      console.log("Email error", emailerror);
      setEmailerror(emailerror);
      return false;
    }

    if (passworderror) {
      console.log("Password error", passworderror);
      setPassworderror(passworderror);
      return false;
    }
    return true;
  }





  function handleClickSignIn(event) {


    event.preventDefault();

    const isValid = validate();
    console.log("isValid", validate());


    if (isValid) {
      obj = {
        "emailaddress": "Haroonahmad@highbitsol.com",
        "Password": "Harr77@!",
        "Url": "/login"
      }

      obj["emailAddress"] = Email;
      obj["Password"] = Password;

      //localStorage.setItem("Check_User_Login", 0);
      var stat;
      var api = 'https://5qrg7as0r4.execute-api.us-east-1.amazonaws.com/isticks/signin';
      Axios.post(api, obj).then(res => {
        console.log("Axios Response: ", res.data);
        stat = res.data;
        console.log("stat", stat["StatusCode"]);
        if (stat["StatusCode"] === 0) {
          Swal.fire({
            icon: 'success',
            title: 'Added!',
            text: `Logged In...`,
            showConfirmButton: false,
            timer: 3500,
          });

          var obj_local={userid:stat.Data.UserId,email:Email,password:Password};

          localStorage.setItem("userid-local_storage", JSON.stringify(obj_local));
          localStorage.setItem("local_id_store", stat.Data.UserId);
          localStorage.setItem("Check_User_Login", res.data);
          let data=localStorage.getItem("Check_User_Login");
          console.log("data local",data);
          localStorage.setItem("Check_User_Login", "true");
          //setUser("Check_User_Login");
          navigate('/');
        }
        else {
          Swal.fire({
            icon: 'warning',
            title: 'Invalid Credentials',
            text: "Invalid Details Added, Please Enter Again!",
            showCancelButton: false,
            confirmButtonText: 'Try Again!',
          })
        }
      })
    }
  }

  const handleClick = () => {
    // 👇️ navigate programmatically
    navigate('/Signup');
  }

  const handleClickbtn = () => {
    // // 👇️ navigate programmatically
    // navigate('/Signup');
  }


  return (
    <Wrapper>
      <Navbar />
     
      <div>
        <section className='login-content'>
          <div className="row container">
            <section className='col-md-6 new'>
            <img src={art1} alt="Cart_icon" className='img-here'/>
            </section>

            <div className="col-md-6 pad-right">
              <div className="row">
                <div class="col yourcart">
                  Login
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

                      <label for="Email" class="label-align word">
                        Email :
                      </label>
                    </div>
                    <div class="row">
                      <input
                        type="email"
                        name="Email"
                        placeholder=""
                        value={Email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>


                    <div class="row">

                      <label for="Password" class="label-align word">
                        Password :
                      </label>
                    </div>
                    <div class="row">
                      <input
                        type="password"
                        name="Password"
                        placeholder=""
                        value={Password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      {/* <div style={{color:'red',fontsize:'12px'}}>{addresserror}</div> */}
                    </div>


                  </div>
                </form>
              </section>

              <div class="frgtdiv">
                <span>
                  <br />
                  <a onClick={handleClickbtn} style={{ color: "black" }} className="Remove">
                    Forgot your password?
                  </a>
                  &emsp;&emsp;
                </span>
              </div>


              <div class="alignment-order">
                <div class="col continue">
                  <button onClick={handleClickSignIn} type="submit" value="Submit" className='LoginBtn'>
                    <a
                      style={{ textDecoration: "none", color: "white", textAlign: "center" }}
                    >
                      Login
                    </a>
                  </button>
                </div>
              </div>

              <div class="alignment-order">
                <div class="col continue1">
                  <button onClick={handleClick} type="submit" value="Submit" className='SignupBtn'>
                    <a
                      style={{ textDecoration: "none", color: "#26649d", textAlign: "center"}}
                    >
                      Signup
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </Wrapper>
  )
}
const Wrapper = styled.section`

.login-content { 
  color: var(--font-color-for-content);
  font-weight: var(--font-weight-300);
  font-size: var(--font-size-16px);
  color: var(--color-white);
  line-height: 19px;
}
.login-content p {
  
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

.frgtdiv{
text-align: right;
margin-right:90px;
}

.pad-right{
     margin-right: 10px;
    // padding-left: 100px;
    // margin-top: 120px;
    //padding-right: 10%;
    padding-left: 10%;
    margin-top: 100px;
    display items: center;
    background-color: white;

}

.LoginBtn{
  width: 388px;
  height: 48px;
  left: 730px;
  top: 548px;
  filter: drop-shadow(0px 4px 8px rgba(38, 100, 157, 0.25));


}

.SignupBtn{
  width: 388px;
  height: 48px;
  left: 730px;
  top: 548px;
  filter: drop-shadow(0px 4px 8px rgba(38, 100, 157, 0.25));
  //background-color: var(--color-white);
}

.word{

    
  width: 225px;
  //height: 19px;
 // left: 730px;
  top: 283px;
  
  font-family: 'Work Sans';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  
  color: #4E4E4E;

}

.forgt_pw{

}

.yourcart {
    padding-top: 80px;
    padding-left: -10px;
    margin-bottom: 10px;

    font-size: var(--font-size-24px);
    font-weight: var(--font-weight-500);
    line-height: 28px;
    color: black;
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
  }

  input[type="password"] {
    box-sizing: border-box;
  //  position: absolute;
    width: 388px;
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


  .continue {
    margin-top: 10%;
    margin-left:10%;
    margin-right:10%;
  }
  .continue button {
    background-color: #22669c;
    /* box-shadow: 0px 8px 16px rgba(30, 30, 30, 0.3); */
    
    border: none;
    padding: 10px 0px;
    color: white;
    width:100%;
  }

  .continue1 {
    margin-top: 5%;
    margin-left:10%;
    margin-right:10%;
  }
  .continue1 button {
    background-color: white;
    /* box-shadow: 0px 8px 16px rgba(30, 30, 30, 0.3); */
    
    border: none;
    padding: 10px 0px;
    color: white;
    width:100%;
  }

  .Remove{
    
    //margin-right:20px;
    width: 225px;
  height: 19px;
  left: 893px;
  top: 473px;

font-family: 'Work Sans';
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 19px;
/* identical to box height */

text-align: right;
text-decoration-line: underline;

color: #4E4E4E;
  }

  .Remove:hover{
    cursor: pointer;
  }

  .label-align {
    padding-top: 22px;
    font-family: Work Sans;
    font-size: 16px;
    font-weight: 500;
    line-height: 40px;
  }
  
  .alignment-order {
    padding-bottom: 10px;
    margin-right: 100px;
  }





`

export default Signin