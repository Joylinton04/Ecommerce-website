import React from 'react'

const LoadingSidebar = () => {
  return (
    <div className='mt-10'>
            <div className="flex justify-between items-center">
                <h1 className="animate h-16 w-24"></h1>
                <p className="animate h-16 w-24"></p>
            </div>
            <div className='mt-20 rounded-full animate'></div>
            <div className='mt-8 flex justify-center w-80 h-60 rounded-2xl animate'></div>
            <div className='mt-10'>
                <h1 className='animate'></h1>
                <div className='border-2 mt-6 rounded-2xl px-6 py-4'>
                    <div>
                        <h1 className='animate'></h1>
                        <p className='rounded-2xl border animate mt-2'></p>
                    </div>
                    <div className='mt-6'>
                        <h1 className='font-semibold'></h1>
                        <div className='border rounded-2xl h-36 mt-2 animate'>
                            <p className='animate'></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-10'>
                <h1 className='animate'></h1>
                <div className='border-2 mt-6 rounded-2xl px-6 py-4'>
                    <div>
                        <h1 className='animate'></h1>
                        <p className='rounded-2xl border animate mt-2'></p>
                    </div>
                    <div className='mt-6'>
                        <h1 className='font-semibold'></h1>
                        <div className='border rounded-2xl h-36 mt-2 animate'>
                            <p className='animate'></p>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default LoadingSidebar