import React, { useState } from "react";
import { useProyectos } from "../hooks/useProyectos";
import { ProyectoList } from "../ListaProyecto/lista-proyecto";

export default function ProyectoPage() {
    const { proyectos, AddProyecto } = useProyectos();

    const [name, setName] = useState("");
    const [descripcion, setDescripcion] = useState("");

    const handleAdd = () => {
        const nuevo = {
            id: Date.now(),
            nombre: name,
            descripcion: descripcion
        };

        AddProyecto(nuevo);
        setName("");
        setDescripcion("");
    };

    return (
        <section style={{ marginTop: "90px" }}>
            <h1>Proyectos</h1>

            <div>
                <h3>Agregar proyecto</h3>
                <h4>proyecto a agregar: {name}</h4>

                <input 
                    type="text"
                    placeholder="Nombre del proyecto"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <input 
                    type="text"
                    placeholder="Descripción"
                    value={descripcion}
                    onChange={(e) => setDescripcion(e.target.value)}
                />

                
                <button onClick={handleAdd}>Agregar</button>
            </div>

            <ProyectoList proyectos={proyectos} />
        </section>
    );
}
