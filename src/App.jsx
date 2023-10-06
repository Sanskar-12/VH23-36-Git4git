
import Navbar from "./Components/Navbar/navbar";
import About from "./Components/About/About"
import Hero from "./Components/Hero/Hero";
import Footer from "./Components/Footer/Footer"
<<<<<<< HEAD
<<<<<<< HEAD
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
=======
=======

>>>>>>> eb3536f1de1af371f62ee31ec3ca41b2a52a1ea0
import Services from "./Components/Services/services"
import Help from "./Components/Help/help"
import Technology from "./Components/Technology/technology"
import Login from "./Components/Login/login"
import Register from "./Components/Register/register"
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
<<<<<<< HEAD
>>>>>>> 6df1bf2c4dd7f4a1724634a19ce2fca344ded7b5
=======
>>>>>>> eb3536f1de1af371f62ee31ec3ca41b2a52a1ea0


const App = () => {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
<<<<<<< HEAD
<<<<<<< HEAD
        <Route path="/Home" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>

    </Router>
      
      <Hero />
=======
=======

>>>>>>> eb3536f1de1af371f62ee31ec3ca41b2a52a1ea0
        <Route path="/home" element={<Hero/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/help" element={<Help/>}/>
        <Route path="/technology" element={<Technology/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>

<<<<<<< HEAD
>>>>>>> 6df1bf2c4dd7f4a1724634a19ce2fca344ded7b5
=======
>>>>>>> eb3536f1de1af371f62ee31ec3ca41b2a52a1ea0
      <Footer />
    </Router>
      
    </>
  );
}
export default App;