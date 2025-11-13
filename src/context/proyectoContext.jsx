import React from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { ProyectosContext } from './ProyetoContextBase';

const INITIAL_PROYECTOS = [
    { id: 1, nombre: 'Proyecta A', descripcion: 'descripcion' }
];

export function ProyectosProvider({ children }) {
    const [proyectos, setProyectos] = useLocalStorage(INITIAL_PROYECTOS);


    const AddProyecto = (newProyecto) => {
        setProyectos(prevProyectos => [...prevProyectos, newProyecto]);
    };
    
    const EliminarPrimerProyecto = () => {
        setProyectos(prevProyectos => prevProyectos.slice(1));
    };

    const contextValue = {
        proyectos, 
        AddProyecto,
        EliminarPrimerProyecto,
    };

    return (
        <ProyectosContext.Provider value={contextValue}>
            {children}
        </ProyectosContext.Provider>
    );
}
