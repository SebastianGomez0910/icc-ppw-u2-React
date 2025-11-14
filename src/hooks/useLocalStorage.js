import { useState, useEffect } from 'react';

const STORAGE_KEY = 'proyectosApp'; 

export function useLocalStorage(initialValue) {
    const [value, setValue] = useState(() => {
        try {
            const stored = localStorage.getItem(STORAGE_KEY);
            const parsed = stored ? JSON.parse(stored) : initialValue;

            // Siempre aseguramos que sea un array de proyectos
            return Array.isArray(parsed) ? parsed : initialValue;
        } catch {
            return initialValue;
        }
    });

    useEffect(() => {
        // Solo guardamos si "value" es realmente un array
        if (Array.isArray(value)) {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(value));
        }
    }, [value]);

    return [value, setValue];
}