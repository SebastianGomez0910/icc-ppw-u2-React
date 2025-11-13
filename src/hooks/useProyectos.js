import { useContext } from 'react';
import { ProyectosContext } from '../context/ProyetoContextBase';

export function useProyectos() {
    return useContext(ProyectosContext);
}