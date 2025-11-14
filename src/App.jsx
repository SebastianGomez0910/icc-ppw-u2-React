import PerfilPage from './perfilpages/perfilpage.tsx'; 
import './App.css';
import { NavBar } from './Components/Nav-Bar/Nav-bar.jsx';
import Homepage from './homepage/homepage.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import { ProyectosProvider } from './context/proyectoContext.jsx';
import ProyectoPage from './ProyectoPage/proyecto-page.jsx';
import ProyectoDosPage from './ProyectoDosPage/proyecto-dos-page.jsx';

function App(){
  return(
    
    <ProyectosProvider>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Homepage />}/>
          <Route path="/Perfil" element={<PerfilPage/>}></Route>
          <Route path="/proyecto" element={<ProyectoPage />} />
          <Route path="/proyectoDos" element={<ProyectoDosPage />} />
        </Routes>
      </BrowserRouter>
    </ProyectosProvider>  
   
  );
}

export default App;