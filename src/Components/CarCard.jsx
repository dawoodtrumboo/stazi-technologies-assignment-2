import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDharmachakra, faGasPump, faGauge, faUserGroup } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-regular-svg-icons'

const CarCard = ({car}) => {
  return (
    <div className='w-[330px]  p-2 rounded-xl shadow-md space-y-5 font-semibold text-gray-800'>
                <div className='h-[210px] overflow-hidden rounded-xl  flex items-center'>
                    <img src={car.image}
                    alt='carimg' className='h-full w-[110%]' />
                </div>
                <div className='flex justify-between items-center px-2'>
                    <h1 className='text-[20px] font-bold'>{car.title}</h1>
                    <div class='rounded-xl border-[1px] text-[10px] border-[#4999ED] border-dashed px-2 py-1'>
                     {car.start_production}
                    </div>
                </div>
                <div className='grid grid-cols-2 w-full text-[#515C76] px-3 text-[12px] gap-y-3'>
                    <div className='space-x-2'>
                        <FontAwesomeIcon icon={faUserGroup} size='sm' color='#4999ED' />
                        <span>{car.seats}</span>
                    </div>
                    <div className='space-x-2'>
                        <FontAwesomeIcon icon={faGasPump} size='sm' color='#4999ED' />
                        <span>{car.fuel_type}</span>
                    </div>
                    <div className='space-x-2'>
                        <FontAwesomeIcon icon={faGauge} size='sm' color='#4999ED' />
                        <span>{car.mileage_per_liter}km/ 1-litre</span>
                    </div>
                    <div className='space-x-2'>
                        <FontAwesomeIcon icon={faDharmachakra} size='sm' color='#4999ED' />
                        <span>{car.transmission_type}</span>
                    </div>
                </div>
                <hr className='border-gray-300'/>
                <div className='flex items-center justify-between pb-4 px-2 text-[12px]'>
                    <div > 
                        <span className='text-[22px]'>${car.rental_price}</span>
                         /month
                    </div>
                    <div className='flex gap-2 text-[12px]'>
                    <div className='bg-[#DBEAF9] rouned-lg flex justify-center items-center w-[30px] h-[30px] rounded-lg'>
                        <FontAwesomeIcon icon={faHeart} size='lg' color='#4999ED' />
                    </div>
                    <button type='button' 
                    className='bg-[#4999ED] text-white px-2 py-1 rounded-[10px]'
                    >Rent Now</button>
                    </div>
                </div>
            </div>
  )
}

export default CarCard