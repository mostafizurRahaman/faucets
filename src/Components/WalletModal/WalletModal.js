import React from "react";
import {IoMdClose} from 'react-icons/io'; 
import metaMask from '../../assets/metamask.svg'; 
import walletConnect from '../../assets/walletconnet.svg'; 
const WalletModal = () => {
   return (
      <>
         {/* The button to open modal */}
         

         {/* Put this part before </body> tag */}
         <input type="checkbox" id="walletModal" className="modal-toggle" />
         <div className="modal rounded-none bg-black bg-opacity-50  ">
            <div className="modal-box relative rounded-none p-[25px]   w-4/5  sm:w-[450px] box-content">
               <label
                  htmlFor="walletModal"
                  className=" absolute right-6 top-6  cursor-pointer font-bold "
               >
                  <IoMdClose className="text-xl font-bold "></IoMdClose>
               </label>
               <h2 className="text-lg sm:text-[20px] font-bold mb-5 normal-case">
                 Connect your wallet 
               </h2>
               <div className="flex items-center sm:justify-between   text-center sm:flex-row flex-col ">
                  <div className="cursor-pointer  w-full sm:w-1/2 p-5 text-[18px] font-semibold text-primary flex items-center justify-center  flex-col bg-[#F5F7FD] m-[10px] ">
                     <img src={metaMask} className="sm:w-[100px] sm:h-[100px]"  alt="metaMask" />
                     <h3>MetaMask</h3>
                  </div>
                  <div className="cursor-pointer  w-full sm:w-1/2 p-5 text-[18px] font-semibold text-primary flex items-center justify-center  flex-col bg-[#F5F7FD] m-[10px]">
                     <img src={walletConnect}  alt="connectWallet" className="sm:w-[100px] w-[70px]  h-[70px] sm:h-[100px]"  />
                     <h3>ConnectWallet</h3>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default WalletModal;
