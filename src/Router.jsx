import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Login } from './pages/Login/index.jsx';
import { Registration } from './pages/Registration/index.jsx';
import Profile from './pages/UserProfile/index.jsx';

export function Router() {
	return (
		<Routes>
			<Route path="/" element={<Login />}/>
			<Route path="/Registration" element={<Registration />}/>
			<Route path="/Profile" element={<Profile />}/>
		</Routes>
	)
} 