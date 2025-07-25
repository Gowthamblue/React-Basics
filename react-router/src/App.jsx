import { BrowserRouter, Routes,Link, Route } from 'react-router-dom';
import './App.css';
import Greeting from './Greeting';
import About from './About';
import DarkElegantNavbar from './NavBar';
import Portfolio from './Port';
function App() {
  return (
    <BrowserRouter>


      <DarkElegantNavbar/>
      <Routes>
        <Route path='/' element={
    <h1 className='text-center '>This the HomePage</h1>

        }/>
        <Route 
          path="/blog" 
          element={
            <>
              <h1>Welcome to the Blog Page</h1>
            </>
          } 
        />
        <Route path="/about" element={<About />} />

        <Route path='/contact' element={
          <>
          <h2>Contact me using WhatsApp</h2>
          </>
        } />

        <Route path="/portfolio" element={<Portfolio/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
