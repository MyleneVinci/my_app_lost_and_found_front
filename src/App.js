import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import LogIn from './pages/logIn/LogIn';
import SignIn from './pages/signIn/SignIn';
import Declaration from './pages/declaration/Declaration';
import Profile from './pages/profile/Profile';
import MapRoom from './pages/mapRoom/MapRoom';
import Chat from './pages/chat/Chat';
import Infos from './pages/infos/Infos';

import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/accueil' element={<Home />} />
        <Route path='/inscription' element={<LogIn />} />
        <Route path='/connexion' element={<SignIn />} />
        <Route path='/declaration' element={<Declaration />} />
        <Route path='/profil' element={<Profile />} />
        <Route path='/carte' element={<MapRoom />} />
        <Route path='/conversations' element={<Chat />} />
        <Route path='/informations' element={<Infos />} />
      </ Routes>
    </div>
  );
}

export default App;
