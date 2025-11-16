import { useState, useEffect } from 'react';

const STORAGE_KEY = 'proyectosApp'; 

export function useLocalStorage(initialValue) {
    const [value, setValue] = useState(() => {
        try {
            const stored = localStorage.getItem(STORAGE_KEY);
            const parsed = stored ? JSON.parse(stored) : initialValue;

            return Array.isArray(parsed) ? parsed : initialValue;
        } catch {
            return initialValue;
        }
    });

    useEffect(() => {
        if (Array.isArray(value)) {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(value));
        }
    }, [value]);

    return [value, setValue];
}