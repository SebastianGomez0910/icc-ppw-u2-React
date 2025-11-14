import React from "react";

export function ProyectoList({ proyectos }) {
    return (
        <div>
            <h3>Listado</h3>
            <ul>
                {proyectos.map((proy) => (
                    <li key={proy.id}>
                        {proy.nombre} - {proy.descripcion}
                    </li>
                ))}
            </ul>
        </div>
    );
}
