import React from 'react'
import { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useGlobalContext } from '../context_AppProvider'
import { FaSearch } from 'react-icons/fa';


const SearchForm = () => {

    const navigate = useNavigate();
    const searchText = useRef('');

    const {loading, books, setSearchTerm, resultTitle, setResultTitle} = useGlobalContext();
    useEffect(() => {
    console.log("loading:", loading);
    console.log("books:", books);
    console.log("setSearchTerm:", setSearchTerm);
    console.log("resultTitle:", resultTitle);
    console.log("setResultTitle:", setResultTitle);
    }, [loading, books, setSearchTerm, resultTitle, setResultTitle]);

    useEffect(() => searchText.current.focus(), []);

    function handleSubmit(e){
        e.preventDefault();
        let tempSearchTerm = searchText.current.value.trim();
        if((tempSearchTerm.replace(/[^\w\s]/gi,"")).length === 0){
            setSearchTerm("the lost world");
            setResultTitle("Please Enter Something ...");
        } 
        else{
            setSearchTerm(searchText.current.value)
        }
        navigate("/book");
    }

    return (
        <div className='search-form-content'>
            <form className='search-form' onSubmit={handleSubmit}>
                <div className='search-form-elem bg-white'>
                    <input type="text" className='form-control' placeholder='The Lost World ...' ref={searchText} />
                    <button type="submit" className='flex flex-c' onClick={handleSubmit}>
                        <FaSearch className='text-purple' size={32} />
                    </button>
                </div>
            </form>
        </div>
    )
}
export default SearchForm
