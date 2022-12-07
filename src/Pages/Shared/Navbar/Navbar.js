import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import etherum from "../../../assets/ethereum.png";
import { WalletContext } from "../../../Context/WalletContextProvider";
import { IoWallet } from "react-icons/io5";
import WalletModal from "../../../Components/WalletModal/WalletModal";
const Navbar = () => {
   const { selectedWallet, setSelectedWallet } = useContext(WalletContext);
   const [wallets, setWallets] = useState([]);
   const [showWalletMenu, setShowWalletMenu] = useState(false);
   const [showMenu, setShowMenu] = useState(false);
   useEffect(() => {
      fetch("wallets.json")
         .then((res) => res.json())
         .then((data) => setWallets(data))
         .catch((err) => console.log(err));
   }, []);

   return (
      <>
         <nav className="px-[30px] flex justify-between h-[79px] items-center  ">
            <div>
               <Link to='/'><h2 className="text-primary text-2xl font-bold  ">Faucets</h2></Link>
            </div>
            <div className="flex items-center gap-3">
               <div className="">
                  <div
                     className="cursor-pointer  rounded relative flex items-center gap-2  px-1 sm:px-3  py-1 sm:py-2 border-gray-400 border box-border"
                     onClick={() => setShowWalletMenu(!showWalletMenu)}
                  >
                     <img
                        src={selectedWallet ? selectedWallet.img : etherum}
                        alt={
                           selectedWallet
                              ? selectedWallet.wallet_name
                              : "Ethereum Karvon"
                        }
                        className="w-[15px] h-[15px]"
                     />

                     <span className="text-sm  hidden sm:block  ">
                        {selectedWallet
                           ? selectedWallet.wallet_name
                           : "Etherum Karvon"}
                     </span>
                     <MdOutlineKeyboardArrowDown></MdOutlineKeyboardArrowDown>

                     <div
                        className={`absolute shadow-lg  w-[250px] p-[10px] bg-white  text-sm font-light border border-gray-200 rounded ${
                           showWalletMenu
                              ? " top-[50px] right-0 "
                              : "top-[-999px]  hidden"
                        }`}
                     >
                        {wallets.map((w) => (
                           <div
                              onClick={() => setSelectedWallet(w)}
                              key={w.id}
                              className="px-[10px] py-[6px] capitalize duration-500 transition-all  hover:bg-slate-100 flex items-center  gap-2 "
                           >
                              <img
                                 src={w.img}
                                 alt={w.wallet_name}
                                 className="w-[15px] h-[15px]"
                              />
                              <span className="text-sm ">{w.wallet_name}</span>
                           </div>
                        ))}
                     </div>
                  </div>
               </div>
               <div>
                  <label
                     htmlFor="walletModal"
                     className="cursor-pointer flex items-center gap-[10px] sm:border-2 sm:border-primary sm:px-[10px] sm:py-1 rounded capitalize "
                  >
                     <IoWallet className="text-2xl sm:text-sm   text-primary "></IoWallet>
                     <span className="text-primary font-semibold  sm:block hidden ">
                        connect wallet
                     </span>
                  </label>
               </div>

               <div
                  className=" text-sm border border-gray-300  relative p-2 text-gray-600  rounded-full bg-gray-200 flex items-center justify-center "
                  onClick={() => setShowMenu(!showMenu)}
               >
                  <CgProfile className="text-[25px]"></CgProfile>
                  <div
                     className={`flex gap-1 absolute   w-[140px] px-[10px] py-[7px] border border-gray-100 shadow-md flex-col bg-white ${
                        showMenu
                           ? " right-0 top-[50px]"
                           : "right-0 top-[-999px]"
                     }`}
                  >
                     <Link
                        className="hover:bg-gray-100  duration-500 transition-all px-2 py-1"
                        to="/login"
                     >
                        Login
                     </Link>
                     <Link
                        className="hover:bg-gray-100  duration-500 transition-all px-2 py-1"
                        to="/register"
                     >
                        Register
                     </Link>
                     <Link
                        className="hover:bg-gray-100  duration-500 transition-all px-2 py-1"
                        to="/fqa"
                     >
                        FQA
                     </Link>
                  </div>
               </div>
            </div>
         </nav>
         <WalletModal></WalletModal>
      </>
   );
};

export default Navbar;
