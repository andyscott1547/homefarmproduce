import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route}
	from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Animals from './pages/animals';
import Farmshop from './pages/farmshop';
import Catering from './pages/catering';
import Error from './pages/error';

function App() {

return (
	<Router>
	<Routes>
    	<Route path='/' element={<Home/>} />
		<Route path='/home' element={<Home/>} />
		<Route path='/about' element={<About/>} />
		<Route path='/animals' element={<Animals/>} />
		<Route path='/farmshop' element={<Farmshop/>} />
    	<Route path='/catering' element={<Catering/>} />
		<Route path="*" element={<Error />} />
	</Routes>
	</Router>

);
}

export default App;
