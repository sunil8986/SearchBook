import './App.css';
import { Routes, Route} from 'react-router';
import Home from './pages/Home';
import About from './pages/About';
import Footer from './components/Footer';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import BookList from './components/BookList';
import BookDetails from './components/BookDetails';

function App() {
  return (
    <>
      <Container>
        <div id='wrapper'>
          <Header/>
          <Routes>
            <Route path = "/" element = {<Home />} />
            <Route path = "about" element = {<About />} />
            <Route path = "booklist" element = {<BookList />} />
            <Route path = "/booklist/:id" element = {<BookDetails />} />
          </Routes>
          <Footer />
        </div>
      </Container>
    </>
  );
}

export default App;
