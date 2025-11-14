import React from "react";
import { useProyectos } from "../hooks/useProyectos";
import { ProyectoList } from "../ListaProyecto/lista-proyecto";

export default function ProyectoDosPage() {
    const { proyectos } = useProyectos();

    return (
        <section style={{ marginTop: "90px" }}>
            <h1>Listado de Proyectos (desde servicio/contexto)</h1>

            <ProyectoList proyectos={proyectos} />
        </section>
    );
}
