import React, { createContext, useState } from 'react';

const WalletContext = createContext(); 
const WalletContextProvider = ({children}) => {
   const [wallet, setWallet] = useState(''); 
   const GetInfo  = {wallet, setWallet}; 
   return (
      <WalletContext.Provider value={GetInfo}>
          {
            children
          }
      </WalletContext.Provider>
   );
};

export default WalletContextProvider;