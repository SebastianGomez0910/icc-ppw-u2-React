import React, { useState } from "react";
import { useProyectos } from "../hooks/useProyectos";
import { ProyectoList } from "../ListaProyecto/lista-proyecto";

export default function ProyectoDosPage() {

    const { proyectos, AddProyecto, EliminarPrimerProyecto } = useProyectos();

    const [name, setName] = useState("");
    const [descripcion, setDescripcion] = useState("");

    const handleAdd = () => {
        const nuevo = {
            id: Date.now(),
            nombre: name,
            descripcion: descripcion,
        };

        AddProyecto(nuevo);
        setName("");
        setDescripcion("");
    };

    return (
        <section style={{ marginTop: "90px" }}>
            <h1>Listado Proyectos desde servicio</h1>

            <p>Aqui deberia estar un componente que agregue al servicio</p>

            <h3>Agregar proyecto</h3>

            <h4>Proyecto a agregar:</h4>

            
            <input 
                type="text"
                placeholder="Nombre del proyecto"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <input 
                type="text"
                placeholder="Descripción del proyecto"
                value={descripcion}
                onChange={(e) => setDescripcion(e.target.value)}
            />

            <button onClick={handleAdd}>Agregar</button>
            <button onClick={EliminarPrimerProyecto}>Eliminar</button>

           
            <ProyectoList proyectos={proyectos} />
        </section>
    );
}
