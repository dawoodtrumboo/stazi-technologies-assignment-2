import React, { useState, useEffect } from 'react';
import { CarCard } from '../Components';
import { faArrowLeft, faArrowRight, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useParams, useNavigate } from 'react-router-dom';
import carData from '../constants/cars.json'

const CarSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredCars, setFilteredCars] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const carsPerPage = 6;
  const navigate = useNavigate(); // Get the navigate function from react-router-dom

  // Fetch car data and set it in filteredCars
  useEffect(() => {
    // You can fetch car data from your carData file here
    // For demonstration purposes, I'll use the carData directly
    setFilteredCars(carData);
  }, []);

  // Handle input changes
  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Handle search icon click
  const handleSearchClick = () => {
    const updatedFilteredCars = carData.filter((car) =>
      car.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredCars(updatedFilteredCars);
    // After filtering, navigate back to page 1
    navigate('/page/1');
  };

  // Pagination
  const totalPages = 10;
  const { page } = useParams();

  // Update currentPage based on the URL
  useEffect(() => {
    if (page && !isNaN(page) && page >= 1 && page <= totalPages) {
      setCurrentPage(parseInt(page));
    } else {
      setCurrentPage(1);
    }
  }, [page, totalPages]);

  // Calculate the slice range for pagination
  const startIndex = (currentPage - 1) * carsPerPage;
  const endIndex = startIndex + carsPerPage;
  const currentCars = filteredCars.slice(startIndex, endIndex);

  return (
    <div className='flex items-center flex-col gap-10'>
      {/* Search Bar Starts Here */}
      <div className='w-full flex gap-10 text-[#5B657E] font-semibold border-[1px] border-opacity-50 border-white shadow-md px-5 py-4 rounded-3xl'>
        <div className='bg-white rounded-xl px-2 py-1 w-[300px] flex items-center'>
          <input
            type='text'
            placeholder='Search...'
            className='bg-transparent w-full px-2 placeholder:font-semibold'
            value={searchQuery}
            onChange={handleInputChange}
          />
          <FontAwesomeIcon
            icon={faSearch}
            size='sm'
            color='#5B657E'
            onClick={handleSearchClick}
            style={{ cursor: 'pointer' }}
          />
        </div>
        <div className='flex items-center gap-2'>
          <select className='bg-transparent'>
            <option>Relevance</option>
          </select>
          <select className='bg-transparent'>
            <option>All Brands</option>
          </select>
        </div>
      </div>
      {/* Search Bar Ends Here */}

      {/* Car Cards */}
      <div className='grid grid-cols-3 gap-x-20 gap-y-10'>
        {currentCars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>

      {/* Pagination */}
      <div className='w-full text-[10px] flex items-center justify-between text-[#5B657E] font-semibold border-[1px] border-opacity-50 border-white shadow-md px-5 py-4 rounded-3xl'>
        
        <div>
            {currentPage} from {totalPages}
        </div>
        <div>
        {totalPages > 1 && (
          <ul className='flex justify-center space-x-2'>
            {/* {currentPage > 1 && ( */}
              <li className='bg-white w-[20px] h-[20px] flex items-center justify-center rounded-md'>
                <Link to={`/page/${currentPage - 1}`}> 
                <FontAwesomeIcon icon={faArrowLeft} size='xs'/>
                </Link>
              </li>
            {/* )} */}

            {Array.from({ length: 3 }).map((_, index) => (
            <li
                key={index}
                className={`bg-white w-[20px] h-[20px] flex items-center justify-center rounded-md ${
                index + 1 === currentPage ? 'font-bold bg-[#4999ED] text-white' : ''
                }`}
            >
                <Link to={`/page/${index + 1}`}>{index + 1}</Link>
            </li>
            ))}

            <li
                className={`bg-white w-[20px] h-[20px] flex items-center justify-center rounded-md`}
            >...</li>
            
            {Array.from({ length: Math.min(totalPages - 7, 3) }).map((_, index) => (
            <li
                key={index}
                className={`bg-white w-[20px] h-[20px] flex items-center justify-center rounded-md ${
                index + 8 === currentPage ? 'font-bold bg-[#4999ED] text-white' : ''
                }`}
            >
                <Link to={`/page/${index + 8}`}>{index + 8}</Link>
            </li>
            ))}

            {currentPage < totalPages && (
              <li className='bg-white w-[20px] h-[20px] flex items-center justify-center rounded-md'>
                <Link to={`/page/${currentPage + 1}`}>
                <FontAwesomeIcon icon={faArrowRight} size='xs'/>
                </Link>
              </li>
            )}
          </ul>
        )}
        </div>
      </div>
    </div>
  );
};

export default CarSearch;
