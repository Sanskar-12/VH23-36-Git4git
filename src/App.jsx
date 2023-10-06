
import Navbar from "./Components/Navbar/navbar";
import About from "./Components/About/About"
import Hero from "./Components/Hero/Hero";
import Footer from "./Components/Footer/Footer"
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import Home from "./Components/Home/Home";
import Services from "./Components/Services/services"
import Help from "./Components/Help/help"
import Technology from "./Components/Technology/technology"
import Login from "./Components/Login/login"
import Register from "./Components/Register/register"


const App = () => {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
]
        <Route path="/Home" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>

    </Router>
      
      <Hero />
        <Routes>
        <Route path="/home" element={<Hero/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/help" element={<Help/>}/>
        <Route path="/technology" element={<Technology/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/form" element={<Form/>}/>
      </Routes>

      <Footer />
      
    </>
  );
}
export default App;