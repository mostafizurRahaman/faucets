import React, { createContext, useState } from 'react';

export const WalletContext = createContext(); 
const WalletContextProvider = ({children}) => {
   const [selectedWallet, setSelectedWallet] = useState(''); 
   const GetInfo  = {selectedWallet, setSelectedWallet}; 
   return (
      <WalletContext.Provider value={GetInfo}>
          {
            children
          }
      </WalletContext.Provider>
   );
};

export default WalletContextProvider;