import React, { useContext, useState } from "react";
import NoticeTitle from "./NoticeTitle/NoticeTitle";
import { AiFillWarning } from "react-icons/ai";
import { WalletContext } from "../../Context/WalletContextProvider";
import ReCAPTCHA from "react-google-recaptcha";
const Home = () => {
   const { selectedWallet } = useContext(WalletContext);
   const [verified, setVerifed] = useState(false); 
   const onChange = () => {
         setVerifed(true); 
   }
   console.log(process.env.REACT_APP_RECAPTCHA_KEY); 
   return (
      <div className="">
         <NoticeTitle></NoticeTitle>
         <div className="px-[30px] w-full bg-warning pb-5">
            <div className="py-12 sm:w-[680px] w-full ">
               <h2 className="text-[35px] font-semibold  text-primary mb-5">
                  Request testnet LINK
               </h2>
               <p className="text-base text-info ">
                  Get testnet LINK for an account on one of the supported
                  blockchain testnets so you can create and test your own oracle
                  and Chainlinked smart contract
               </p>
            </div>
            <div className=" bg-white px-[25px] py-5 ">
               <div className="flex w-full p-[10px] text-accent  items-center justify-start gap-2 bg-warning ">
                  <AiFillWarning className="text-xl text-primary "></AiFillWarning>
                  <p className="text-sm ">
                     Your wallet  is connected to
                     <span className="text-accent font-bold  ">
                        {selectedWallet.wallet_name
                           ? selectedWallet.wallet_name
                           : "Ethereum Kovan"}
                     </span>
                     , so you are requesting
                     <span className="text-accent font-bold  ">
                        {selectedWallet.wallet_name
                           ? selectedWallet.wallet_name
                           : "Ethereum Kovan"}
                     </span>{" "}
                     Link/ETH.
                  </p>
               </div>
               <form className="w-full  sm:w-1/2">
                  <div className="flex flex-col gap-[5px] capitalize mt-[15px]">
                     <label
                        htmlFor="wallet-address"
                        className="text-[13px] font-semibold text-primary "
                     >
                        wallet address
                     </label>
                     <input
                        type="text"
                        className="border p-[6px] text-sm font-normal capitalize placeholder:text-sm rounded border-gray-200 outline-none"
                        placeholder="wallet address..."
                     />
                  </div>

                  <div className="w-full flex flex-col gap-[5px] capitalize mt-[15px]">
                     <label
                        htmlFor="wallet-address"
                        className="text-[13px] font-semibold text-primary "
                     >
                        Result Type
                     </label>
                     <div className="flex items-center gap-[15px] w-full">
                        <input
                           type="text"
                           className="w-full border p-[6px] text-sm font-normal capitalize placeholder:text-sm rounded border-gray-200 outline-none bg-gray-100"
                           readonly
                           defaultValue="20 Test Link"
                           disabled
                        />
                        <input
                           type="text"
                           className="w-full border p-[6px] text-sm font-normal capitalize placeholder:text-sm rounded border-gray-200 outline-none bg-gray-100"
                           readonly
                           defaultValue="0.5 ETH"
                           disabled
                        />
                     </div>
                  </div>
                  <div className="my-[15px]">
                     <ReCAPTCHA
                        sitekey={process.env.REACT_APP_RECAPTCHA_KEY}
                        onChange={onChange}
                     />
                  </div>
                  <button type="submit" className="cursor-pointer text-[13px] rounded-[3px] py-[10px] px-[15px] bg-primary text-secondary font-semibold  capitalize hover:bg-opacity-70 duration-1000" disabled={!verified}>send request</button>
               </form>
            </div>
         </div>
      </div>
   );
};

export default Home;
