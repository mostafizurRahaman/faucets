import React from "react";
import { Link } from "react-router-dom";
import {CgProfile} from 'react-icons/cg'; 
const Navbar = () => {
   const wallets = [
      {
         id: 1, 
         img: '', 
         wallet_name: ''
      }
   ]
   return (
      <nav>
         <div>
            <h2 className="text-primary">Faucets</h2>
         </div>
         <div>
            <div>
               <select name="wallet" id="wallet">
                  <option value=""></option>
               </select>
            </div>
            <div>
            <CgProfile></CgProfile>  
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>            
            </div>
         </div>
      </nav>
   );
};

export default Navbar;
