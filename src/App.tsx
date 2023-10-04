import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Layout from './components/Layout';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import MeetTheTeam from './pages/MeetTheTeam';
import PageNotFound from './pages/PageNotFound';
import ProjectsPage from './pages/ProjectsPage';
import ResourcesPage from './pages/ResourcesPage';


function App() {
    return (
        <div>
            <ToastContainer
            progressStyle={{ background: '#d53369' }}
            autoClose={2500}
            />
            <Layout>
                <Routes>
                    <Route path="*" element={<PageNotFound />} />
                    <Route path="/" element={<HomePage />} />
                    <Route path="/resources" element={<ResourcesPage />} />
                    <Route path="/projects" element={<ProjectsPage />} />
                    <Route path="/team" element={<MeetTheTeam />} />
                    <Route path="/contact" element={<ContactPage />} />
                </Routes>
            </Layout>
        </div>
    );
}

export default App;
