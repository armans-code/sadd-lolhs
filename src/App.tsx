import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import PageNotFound from './pages/PageNotFound';
import ProjectsPage from './pages/ProjectsPage';
import ResourcesPage from './pages/ResourcesPage';

function App() {
	return (
		<div>
			<Layout>
				<Routes>
					<Route path='*' element={<PageNotFound />} />
					<Route path='/' element={<HomePage />} />
					<Route path='/resources' element={<ResourcesPage />} />
					<Route path='/projects' element={<ProjectsPage />} />
					<Route path='/contact' element={<ContactPage />} />
				</Routes>
			</Layout>
		</div>
	);
}

export default App;
