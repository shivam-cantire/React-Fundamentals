import { Routes, Route } from 'react-router-dom';
import React from 'react';
import FirstPage from 'src/pages/first-page';
import SecondPage from 'src/pages/second-page';
import Home from 'src/pages/home';
export default function RoutesPath() {
	return (
		<>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='first-page' element={<FirstPage />} />
				<Route path='second-page' element={<SecondPage />} />
			</Routes>
		</>
	);
}
