    import React from 'react';
    import{ NavLink } from 'react-router-dom';

    export function NavBar(){
        return(
            <nav 
            style={{background: '#159',padding: '1rem',overflow:'hidden', position:'fixed', top:0, left:0, width: '100%',zIndex:1000}}>
                <NavLink
                to="/"
                end
                style={({isActive})=>({color:isActive ? 'yellow': 'white', fontWeight:'bold'})}
                >
                    Home
                </NavLink>

                <NavLink 
                to="/Perfil"
                style={({isActive})=>({color:isActive ? 'yellow':'white',fontWeight:'bold',marginLeft:'1rem'})}
                >
                    Perfil
                </NavLink>

                <NavLink 
                to="/Proyecto"
                style={({isActive})=>({color:isActive ? 'yellow':'white',fontWeight:'bold',marginLeft:'1rem'})}
                >
                    Proyecto
                </NavLink>

                <NavLink 
                to="/ProyectoDos"
                style={({isActive})=>({color:isActive ? 'yellow':'white',fontWeight:'bold',marginLeft:'1rem'})}
                >
                    Perfil Dos
                </NavLink>

                <NavLink 
                to="/Formulario"
                style={({isActive})=>({color:isActive ? 'yellow':'white',fontWeight:'bold',marginLeft:'1rem'})}
                >
                    Formulario
                </NavLink>
            </nav>
        );
    }