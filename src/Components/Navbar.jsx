import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full flex gap-10 text-[#5B657E] font-semibold border-[1px] border-opacity-50 border-white shadow-md px-5 py-4 rounded-3xl '>
        <div className='bg-white rounded-xl px-2 py-1 w-[300px] flex items-center'>
            <input type='text' placeholder='Search...' className='bg-transparent w-full px-2 placeholder:font-semibold' />
            <FontAwesomeIcon icon={faSearch} size='sm' color='#5B657E' />
        </div>
        <div className='flex items-center gap-2'>
            <select className='bg-transparent' >
               <option>Relevance</option>
            </select>
            <select className='bg-transparent' >
               <option>All Brands</option>
            </select>
            
        </div>
    </div>
  )
}

export default Navbar