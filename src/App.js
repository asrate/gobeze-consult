import React from "react";
import {BrowserRouter as Router, Route, Routes,  Redirect, Switch} from 'react-router-dom';
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Footer from "./Components/Footer/Footer";
function App() {
  return (
    <div >
      <div >
 <Router>
      <Navbar/>
      
     <main>
       
      <Routes>
       <Route path ='/'  element={<Home/>} />
         
     
       <Route path='about'  element={<About/>} />

       {/* <Route path='news'  element={<News/>} /> */}
       {/* <Route path='companies'  element={<Companies/>} /> */}
      
      </Routes>
       
     </main>
     <Footer/>
   </Router>
    
    </div>

    </div>
  );
}

export default App;
