import React from 'react'

const CountBox = ({ title, value, isRemainingDays }) => {
  return (
    <div className="flex flex-col items-center w-[150px]">
      {isRemainingDays?
         <h4 className="font-epilogue font-bold text-[18px] text-white p-3 bg-[#1c1c24] rounded-t-[10px] w-full text-center truncate">{value > 0 ? value : "Ended"}</h4>
         :
         <h4 className="font-epilogue font-bold text-[18px] text-white p-3 bg-[#1c1c24] rounded-t-[10px] w-full text-center truncate">{value}</h4>
      }
     
      <p className="font-epilogue font-normal text-[12px] text-[#808191] bg-[#28282e] px-3 py-2 w-full rounded-b-[10px] text-center">{title}</p>
    </div>
  )
}

export default CountBox