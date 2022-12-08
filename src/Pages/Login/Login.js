import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./login.css";
import {FaInstagram, FaFacebook} from 'react-icons/fa'; 
import {CgGoogle} from 'react-icons/cg'; 
import {AiFillEye} from 'react-icons/ai'; 
import {AiFillEyeInvisible} from 'react-icons/ai'; 
import useTitle from "../../hooks/useTitle";

const Login = () => {
   const [show, setShow] = useState(false); 

   const handleSubmit = (event) =>{
      event.preventDefault() ; 
      const form = event.target; 
      console.log(form); 
      const email = form.email.value; 
      const password = form.password.value; 
      console.log({email, password}); 
   }
   // title change hook
   useTitle("Login"); 
   return (
      <div className="min-h-[80vh] flex items-center justify-center  bg-warning px-5">
         <div className="sm:w-4/5 lg:w-[30%] w-full shadow-lg p-[20px] faucets_form bg-white ">
             <h2 className="text-[30px] mb-5 text-center  font-semibold  capitalize">Login</h2>
            <form className="flex flex-col gap-[10px]   " onSubmit={handleSubmit}>
               <div className="flex flex-col ">
                  <label
                     htmlFor=""
                     className="text-xs font-semibold capitalize  mb-0"
                  >
                     Email
                  </label>
                  <input
                     className="focus:border-primary"
                     type="email"
                     placeholder="enter your email"
                     name="email"
                  />
               </div>
               <div className="flex flex-col  relative ">
                  <label
                     htmlFor=""
                     className="text-xs font-semibold capitalize  mb-0"
                    
                  >
                     Password
                  </label>
                  <input
                     className="focus:border-primary"
                     type={`${show ? 'text' : 'password'}`}
                     placeholder="enter your email"
                     name="password"
                  />
                  <div className="w-4 h-4 absolute right-0 bottom-3 text-xl" onClick={()=>setShow(!show)}>
                    {
                     show ? <AiFillEye></AiFillEye>  : <AiFillEyeInvisible></AiFillEyeInvisible> 
                     
                    }
                  </div>
               </div>

               <button type="submit" className="cursor-pointer text-[13px] rounded-[3px] py-[10px] my-5 px-[15px] bg-primary text-secondary font-semibold  capitalize ">
                  Login
               </button>
               <div>
                  <p className="text-[13px] font-semibold text-center ">
                     Don't have an account??{" "}
                     <Link to='/register' className="text-primary ">SignUp</Link>
                  </p>
               </div>
               <div>
                  <h4 className="text-base capitalize font-semibold  text-center ">
                     or
                  </h4>
               </div>
               
            </form>
            <div className="text-[20px] flex items-center justify-center gap-[10px] my-[10px]">
                  <CgGoogle></CgGoogle>
                  <FaFacebook></FaFacebook>
                  <FaInstagram></FaInstagram>
               </div>
         </div>
      </div>
   );
};

export default Login;
