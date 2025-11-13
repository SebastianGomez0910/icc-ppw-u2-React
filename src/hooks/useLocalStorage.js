import { useState, useEffect } from 'react';

const STORAGE_KEY = 'proyectosApp'; 

export function useLocalStorage(initialValue) {
    const [value, setValue] = useState(() => {
        try {
            const storedData = localStorage.getItem(STORAGE_KEY);
            return storedData ? JSON.parse(storedData) : initialValue;
        } catch (error) {
            console.error("Error al cargar localStorage:", error);
            return initialValue;
        }
    });

    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(value));
        console.log("Datos guardados en localStorage:", value);
    }, [value]); 

    return [value, setValue]; 
}