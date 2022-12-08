import React from "react";

const Tabel = ({ tableData }) => {
   
   return (
      <div className="w-full overflow-x-scroll sm:overflow-hidden">
         <table className="text-center ">
            <thead>
               <tr className="text-center font-bold capitalize text-sm ">
                  <th className="min-w-[80px] border border-gray-300   text-center p-2 ">Sr</th>
                  <th className="min-w-[80px] border border-gray-300   text-center p-2 ">Time</th>
                  <th className="min-w-[80px] border border-gray-300   text-center p-2 ">Amount</th>
                  <th className="p-2 min-w-[80px] border border-gray-300   text-center ">Hash</th>
               </tr>
            </thead>
            <tbody>
               {
                  tableData.map(item => <tr key={item.id} className="text-center text-sm text-accent"  >
                     <td className="text-center border border-gray-300 min-w-[80px] p-2">{item.id + 1}</td>
                     <td className="text-center border border-gray-300 min-w-[80px] p-2">{item.time}</td>
                     <td className="text-center border border-gray-300 min-w-[80px] p-2">{item.amount}</td>
                     <td className="text-center border border-gray-300 min-w-[80px] p-2">{item.hash}</td>
                  </tr>)
               }
            </tbody>
         </table>
      </div>
   );
};

export default Tabel;
