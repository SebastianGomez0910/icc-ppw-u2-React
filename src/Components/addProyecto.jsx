
import React, { useState } from 'react';

export function AddProyecto({ onNewProyecto }) { 
    const [name, setName] = useState('');
    const [descripcion, setDescripcion] = useState('');

    const handleAddProyecto = () => {
        const newProyecto = {
            id: Date.now(), 
            nombre: name,
            descripcion: descripcion,
        };
        
        onNewProyecto(newProyecto); 
        
        setName('');
        setDescripcion('');
    };

    return (
        <div className="add-proyecto-container">
            <h3>Agregar proyecto</h3>
            <h4>proyecto a agregar {name}</h4>
            <input 
                type="text"
                placeholder="nombre del proyecto"
                value={name}
                onChange={(e) => setName(e.target.value)} 
            />
            <input 
                type="text"
                placeholder="descripcion del proyecto"
                value={descripcion}
                onChange={(e) => setDescripcion(e.target.value)}
            />
            <button onClick={handleAddProyecto}>agregar</button>
        </div>
    );
}