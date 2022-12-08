import React from "react";

const FQA = () => {
   return (
      <div className="flex items-center justify-center flex-col gap-[10px] mb-5  ">
         <h2 className="text-[30px] font-semibold capitalize mt-[30px] mb-5 text-primary ">
            Frequently asked questions
         </h2>
         <div
            tabIndex={0}
            className="collapse collapse-arrow border w-[90%] md:w-[65%]"
         >
            <div className="collapse-title text-[17px] m-0  font-semibold  py-[15px] px-[9px] ">
               What is a blockchain oracle ?
            </div>
            <div className="collapse-content" tabIndex={0}>
               <p className="text-sm">
                  A blockchain oracle is any system that services a smart
                  contract by providing it with data from an off-chain source or
                  connecting it with an off-chain system. Oracles enable
                  connectivity between blockchains and real-world data by
                  interfacing with external APIs and data feeds, allowing them
                  to pull data for or push data from a smart contract.
               </p>
            </div>
         </div>
         <div
            tabIndex={1}
            className="collapse collapse-arrow border w-[90%] md:w-[65%]"
         >
            <div className="collapse-title text-[17px]  font-semibold  py-[15px] px-[9px]">
               Why do blockchains need oracles??
            </div>
            <div className="collapse-content" tabIndex={1}>
               <p className="text-sm">
                  Oracles enable smart contracts to interact with off-chain
                  resources. Without oracles, smart contracts can only access
                  data within a blockchain, severely limiting their potential
                  applications. The majority of industry-changing real-world use
                  cases for smart contracts require off-chain data and
                  computation for proper execution and often an integration with
                  existing payment rails to settle a contract. For example, a
                  smart contract may require high-quality weather data from a
                  reputable source like AccuWeather to trigger a transaction. It
                  may also require the ability to pay out escrowed fiat currency
                  through existing financial infrastructure, such as a bank
                  checking account.
               </p>
            </div>
         </div>
         <div
            tabIndex={2}
            className="collapse collapse-arrow border w-[90%] md:w-[65%]"
         >
            <div className="collapse-title text-[17px]  font-semibold  py-[15px] px-[9px]">
               What is the Chainlink Network?
            </div>
            <div className="collapse-content" tabIndex={2}>
               <p className="text-sm">
                  The Chainlink Network refers to all of the decentralized
                  oracle networks actively operating using the Chainlink
                  protocol, including individual oracles, data providers running
                  their own node, and node operators. By enabling smart
                  contracts to quickly and securely connect to off-chain data
                  sources using decentralized oracle networks, the Chainlink
                  Network helps developers build more robust and diverse
                  blockchain applications using real-world inputs and outputs.
                  Additionally, as middleware between low-level blockchain
                  protocols and external, off-chain data sources, the Chainlink
                  Network serves as an abstraction layer for data providers to
                  easily sell their existing APIs to any blockchain network.
               </p>
            </div>
         </div>

         <div
            tabIndex={3}
            className="collapse collapse-arrow border w-[90%] md:w-[65%]"
         >
            <div className="collapse-title text-[17px]  font-semibold  py-[15px] px-[9px]">
               Where can I explore the performance and reliability of the
               Chainlink Network?
            </div>
            <div className="collapse-content" tabIndex={3}>
               <p className="text-sm">
                  The Chainlink Price Feeds page provides real-time
                  visualizations of each decentralized price feed that provides
                  on-chain exchange rates for cryptocurrencies, stablecoins,
                  commodities, and indices. Users can explore each individual
                  price feed, which offers transparency around which nodes power
                  each feed, each node’s latest response, how often feed updates
                  occur, the gas price paid by each node, the users sponsoring
                  each feed, and hyperlinks to on-chain transactions.requests,
                  average response times, and more.
               </p>
            </div>
         </div>
         <div
            tabIndex={4}
            className="collapse collapse-arrow border w-[90%] md:w-[65%]"
         >
            <div className="collapse-title text-[17px]  font-semibold  py-[15px] px-[9px]">
               What is Chainlink Verifiable Random Function (VRF)?
            </div>
            <div className="collapse-content" tabIndex={4}>
               <p className="text-sm">
                  Chainlink VRF brings secure random number generation to the
                  blockchain. Chainlink VRF solves the difficult problem of
                  providing an on-chain source of randomness that is publicly
                  verifiable to be authentic and tamper-proof. Many smart
                  contracts are augmenting the value they can create by
                  utilizing Chainlink VRF, specifically applications such as
                  gaming dApps that must prove to their users that their source
                  of randomness is provably fair and resistant to manipulation
                  from any external entity. Chainlink VRF enables and
                  accelerates the development of smart contracts focused on
                  blockchain gaming, security, layer-two protocols, and various
                  other use cases
               </p>
            </div>
         </div>
         <div
            tabIndex={5}
            className="collapse collapse-arrow border w-[90%] md:w-[65%]"
         >
            <div className="collapse-title text-[17px]  font-semibold  py-[15px] px-[9px]">
               What is Chainlink Proof of Reserve?
            </div>
            <div className="collapse-content" tabIndex={5}>
               <p className="text-sm">
                  Chainlink Proof of Reserve provides smart contracts with the
                  data required to calculate the true collateralization of any
                  on-chain asset backed by off-chain reserves such as
                  stablecoins and cross-chain assets. Operated by a
                  decentralized network of oracles, Chainlink Proof of Reserve
                  enables the autonomous auditing of collateral used within DeFi
                  in real-time, ensuring users’ funds are protected from
                  unforeseen fractional reserve practices and other fraudulent
                  activity from off-chain custodians. This provides both the
                  growing DeFi ecosystem and the traditional financial system a
                  way to increase the transparency of operations with definitive
                  on-chain proof of any asset’s true collateralization.
               </p>
            </div>
         </div>
         <div
            tabIndex={6}
            className="collapse collapse-arrow border w-[90%] md:w-[65%]"
         >
            <div className="collapse-title text-[17px]  font-semibold  py-[15px] px-[9px]">
               Who can use Chainlink?
            </div>
            <div className="collapse-content" tabIndex={6}>
               <p className="text-sm">
                  Any individual or group that needs real-world data to power
                  and secure the execution of their smart contracts can benefit
                  from Chainlink’s robust and customizable framework for
                  creating decentralized oracle networks. Today, hundreds of
                  teams working on dApps, blockchains, industry consortiums,
                  enterprise projects, and more rely on Chainlink to provide
                  tamper-proof inputs and outputs for their smart contracts.
                  Chainlink has become the de facto oracle solution for the DeFi
                  space, supporting top projects like Aave, Synthetix, and
                  Compound, and securing billions in value across the sector.If
                  you’d like more information on how Chainlink could provide
                  solutions for your project, join us in the Official Discord
                  Channel and reach out through the integrations submission
                  form.
               </p>
            </div>
         </div>
         <div
            tabIndex={7}
            className="collapse collapse-arrow border w-[90%] md:w-[65%]"
         >
            <div className="collapse-title text-[17px]  font-semibold  py-[15px] px-[9px]">
            How do I keep up with current protocol development?
            </div>
            <div className="collapse-content" tabIndex={7}>
               <p className="text-sm">
                  The Chainlink development team is continuously building the
                  network and protocol. To keep up to date with current progress
                  you can follow the Chainlink Github. You can find a full list
                  of open roles on the Chainlink Labs careers page.
               </p>
            </div>
         </div>
         <div
            tabIndex={9}
            className="collapse collapse-arrow border w-[90%] md:w-[65%]"
         >
            <div className="collapse-title text-[17px]  font-semibold  py-[15px] px-[9px]">
               How do I participate in building Chainlink?
            </div>
            <div className="collapse-content" tabIndex={9}>
               <p className="text-sm">
                  There are numerous projects working on the development of the
                  Chainlink ecosystem, including Chainlink Labs. You can find a
                  full list of open roles on the Chainlink Labs careers page.
               </p>
            </div>
         </div>
         <div
            tabIndex={8}
            className="collapse collapse-arrow border w-[90%] md:w-[65%]"
         >
            <div className="collapse-title text-[17px]  font-semibold  py-[15px] px-[9px]">
               How can I reach out to Chainlink for support?
            </div>
            <div className="collapse-content" tabIndex={8}>
               <p className="text-sm">
                  For inquiries related to security and support, please reach
                  out to the admins of official Chainlink channels or email
                  support@chain.link‍. You can also find more technical
                  information in the documentation. Always practice a security
                  mindset and ensure that users you are interacting with on
                  community channels have verifiable trusted identities. You can
                  confirm the accounts of official Chainlink community admin by
                  clicking their names in the chat or viewing their handles
                  under the official channel info.
               </p>
            </div>
         </div>
      </div>
   );
};

export default FQA;
