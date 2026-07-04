import React, { useState } from 'react'
import Titel from '../../components/Titel'
import { assets, dashboardDummyData } from '../../assets/assets'

const DashBoard = () => {

    const[dashboardData , setDashnoard] = useState(dashboardDummyData);
  return (
    
        <div className='mt-10'>
    <Titel
        align='left'
        font='outfit'
        titel='DashBoard'
        subTitel='Monitor Your room listing, track bookings and analyze revenue-all in one place. Stay updated with real-time insights to ensure smooth operations.'
    />

    {/* Cards Container */}
    <div className='flex gap-4 my-8'>

        {/* Total Booking */}
        <div className='bg-primary/3 border border-primary/10 rounded flex p-4 pr-8 w-1/5'>
            <img
                src={assets.totalBookingIcon}
                alt=""
                className='max-sm:hidden h-10'
            />
            <div className='flex flex-col sm:ml-4 font-medium'>
                <p className='text-blue-500 text-lg'>Total Booking</p>
                <p className='text-neutral-400 text-base'>
                    {dashboardData.totalBookings}
                </p>
            </div>
        </div>

        {/* Total Revenue */}
        <div className='bg-primary/3 border border-primary/10 rounded flex p-4 pr-8 w-1/5'>
            <img
                src={assets.totalRevenueIcon}
                alt=""
                className='max-sm:hidden h-10'
            />
            <div className='flex flex-col sm:ml-4 font-medium'>
                <p className='text-blue-500 text-lg'>Total Revenue</p>
                <p className='text-neutral-400 text-base'>
                    $ {dashboardData.totalRevenue}
                </p>
            </div>
        </div>

    </div>
     {/* Recent Booking */}
     <h2 className='text-xl text-blue-950/70 font-medium mb-5'>Recent Bokings</h2>
     <div className='w-full max-w-full text-left border border-gray-50-300 rounded-lg max-h-80 overflow-y-scroll'>
        <table className='w-full'>
            <thead className='bg-gray-50'>
                <tr>
                    <th className='py-3 px-4 text-gray-800 font-medium'>User Name</th>
                     
                      <th className='py-3 px-4  text-gray-800 font-medium'>Room Name</th>
                       <th className='py-3 px-4 text-center text-gray-800 font-medium'>Total Amount</th>
                        <th className='py-3 px-4 text-center text-gray-800 font-medium'>Payment Status</th>
                </tr>

            </thead>
           
           <tbody className='text-sm'>
            {dashboardData.bookings.map((item,index)=>(
                <tr key={index}>
                    <td className='py-3 px-4 text-gray-700 border-t border-gray-300'>
                        {item.user.username}
                    </td>
                     <td className='py-3 px-4 text-gray-700 border-t border-gray-300 max-sm:hidden'>
                        {item.room.roomType}
                    </td>

                     <td className='py-3 px-4 text-gray-700 border-t border-gray-300'>
                        $ {item.totalPrice}
                    </td>

                    <td className='py-3 px-4 border-t border-gray-300 flex'>
                        <button className={`py-3 px-4 border-t border-gray-50-300 flex mx-auto ${item.isPaid?'bg-green-200 text-green-600' : 'bg-amber-200 text-yellow-600'}`}>
                            {item.isPaid ? 'Complete':'Pending'}
                        </button>

                    </td>

                </tr>
            ))}
           </tbody>


        </table>

     </div>





 
</div>
  )
}

export default DashBoard
