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
            <div className="modal-box relative rounded-none p-[25px]   w-[450px] box-content">
               <label
                  htmlFor="walletModal"
                  className=" absolute right-6 top-6  cursor-pointer font-bold "
               >
                  <IoMdClose className="text-xl font-bold "></IoMdClose>
               </label>
               <h2 className="text-[25px] font-bold mb-5">
                 Connect Your Wallet 
               </h2>
               <div className="flex items-center md:justify-between   text-center">
                  <div className="cursor-pointer  w-1/2 p-5 text-[18px] font-semibold text-primary flex items-center justify-center gap-[10px] flex-col bg-[#F5F7FD] m-[10px]">
                     <img src={metaMask} className="w-[100px] h-[100px]"  alt="metaMask" />
                     <h3>MetaMask</h3>
                  </div>
                  <div className="cursor-pointer w-1/2 p-5 text-[18px] font-semibold text-primary flex items-center justify-center gap-[10px] flex-col bg-[#F5F7FD] m-[10px]">
                     <img src={walletConnect}  alt="connectWallet" className="w-[100px] h-[100px]"  />
                     <h3>ConnectWallet</h3>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default WalletModal;
