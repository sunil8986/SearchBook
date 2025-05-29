import React from 'react';
import { useGlobalContext } from '../context_AppProvider';
import Book from './Book';
import Loader from './Loader';
import coverImg from "../images/cover_not_found.jpg";
import { useLocation } from 'react-router';


const BookList = () => {
  const {books, loading, resultTitle} = useGlobalContext();
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  console.log(books)
  
  const booksWithCovers = books.map((singleBook) => {
    return {
      ...singleBook,
      id: (singleBook.id).replace("/works/", ""),
      cover_img: singleBook.cover_id ? `https://covers.openlibrary.org/b/id/${singleBook.cover_id}-L.jpg` : coverImg
    }
  });

  if(loading) return <Loader />;

  return (
    <section className='home booklist'>
        {!isHomePage && (
          <div className='section-title'>
            <h2>{resultTitle}</h2>
          </div>
        )}

        <div className='booklist-content'>
          {
            booksWithCovers.slice(0, 30).map((item, index) => {
              return (
                <Book key = {index} {...item} />
              )
            })
          }
        </div>
    </section>
  )
}

export default BookList