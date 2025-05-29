import React, { useState } from 'react'
import { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useGlobalContext } from '../context_AppProvider'
import { FaSearch } from 'react-icons/fa';


const SearchForm = () => {

    const [inputValue, setInputValue] = useState('');

    const navigate = useNavigate();
    const searchText = useRef('');

    const {books, resultTitle, setSearchTerm, setResultTitle} = useGlobalContext();

    useEffect(() => {
    console.log("books:", books);
    console.log("setSearchTerm:", setSearchTerm);
    console.log("resultTitle:", resultTitle);
    }, [books, setSearchTerm, resultTitle ]);

    // useEffect(() => searchText.current.focus(), []);

    function handleSubmit(e){
        e.preventDefault();
        let tempSearchTerm = inputValue.trim();
        if ((tempSearchTerm.replace(/[^\w\s]/gi, "")).length === 0) {
            setSearchTerm("the lost world");
            setResultTitle("Please Enter Something ...");
        } else {
            setSearchTerm(inputValue);
        }
        setInputValue(''); // <-- clear the input
        navigate("/booklist");
    }

    return (
        <div className='search-form-content'>
            <form className='search-form' onSubmit={handleSubmit}>
                <div className='search-form-elem bg-white'>
                    <input type="text" className='form-control' placeholder='The Lost World ...' value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
                    <button type = "submit" className='searchfield' onClick={handleSubmit}>
                                    <FaSearch className='text-purple' size = {32} />
                                  </button>
                </div>
            </form>
        </div>
    )
}
export default SearchForm
