import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Prediction from "./pages/Prediction";
import Detail from "./pages/Detail";
import Statistics from "./pages/Statistics";


function App() {
	
return (
	<>
	<BrowserRouter>
	<Routes>
		<Route exact path="/" element={<Home/>}/>
		<Route exact path="/about" element={<About/>}/>
        <Route exact path="/contact" element={<Contact/>}/>
		<Route exact path='/prediction' element={<Prediction/>}/>
		<Route exact path='/detail' element = {<Detail/>}/>
		<Route exact path="/statistics" element={<Statistics/>} />
	</Routes>
	</BrowserRouter>
	
	</>
);
}

export default App;