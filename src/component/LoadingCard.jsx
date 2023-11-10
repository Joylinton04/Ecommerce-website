import React from 'react'

const LoadingCard = () => {
  return (
    <div className=" h-80 border-2 w-64 rounded-3xl p-4 flex flex-col gap-4">
        <div className="h-[65%] rounded-lg animate"></div>
        <div className="h-[35%] rounded-lg animate"></div>
    </div>
  )
}

export default LoadingCard