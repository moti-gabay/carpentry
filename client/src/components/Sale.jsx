import React from 'react'

const Sale = () => {
  return (
    <div>
        <div className="absolute w-[12%] md:w-[10%] end-2 bg-gradient-to-br from-green-400 to-green-600 rounded-sm">
        <div className="p-2 py-4 md:py-6 text-center">
          <h5 className='font-semibold text-xs sm:text-base md:text-lg'>5% Off</h5>
          <p className='text-xs sm:text-sm md:text-sm lg:text-lg'>for registered customers </p>
        </div>
       </div>
    </div>
  )
}

export default Sale