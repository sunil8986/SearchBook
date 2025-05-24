import React, {useRef, useEffect} from 'react';
import Navbar from './Navbar'
import { FaSearch } from 'react-icons/fa'
import SearchForm from './SearchForm';

const Header = () => {
    const searchText = useRef('');


    return (
        <>
            <Navbar />
            <div className='header-content text-center text-white'>
                <h2 className='header-title text-capitalize'>find your book of choice.</h2>
                <p className='header-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam beatae sapiente quibusdam consequatur perspiciatis facere laboriosam non nesciunt at id repudiandae, modi iste? Eligendi, rerum!</p>
                <SearchForm />
            </div>
        </>
    )
}

export default Header