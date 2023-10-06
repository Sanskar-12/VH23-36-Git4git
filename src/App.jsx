// import Navbar from './components/Navbar';
// import Footer from './components/Footer';
import Navbar from "./Components/Navbar/navbar";
import Hero from "./Components/Hero/Hero";
import Footer from "./Components/Footer/Footer"
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import Home from "./Components/Home/Home";
import About from "./Components/About/About";


const App = () => {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>

    </Router>
      
      <Hero />
      <Footer />
    </>
  );
}
export default App;