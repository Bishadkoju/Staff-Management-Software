import React from 'react'
import CLEHeading from './CLEHeading'

const CheckLeaveEarningTable = () => {
    const select = "0" 
    // 0 -> check in/out 
    // 1 -> leave
    // 2 -> Earning 

    return (
        <div className='div_format mt-4 pt-4'>
            <CLEHeading select = {select} />
            <hr />
            
        </div>
    )
}

export default CheckLeaveEarningTable
