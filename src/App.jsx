import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from './pages/About';
import Blog from './pages/Blog';
import Home from './pages/Home';
import PortfolioPage from './pages/PortfolioPage';
import Services from './pages/Services';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/blog' element={<Blog/>}></Route>
          <Route path='/services' element={<Services/>}></Route>
          <Route path='/portfolio' element={<PortfolioPage/>}></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
