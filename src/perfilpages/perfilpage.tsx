import { useState } from "react";

// 1. Definición de la interfaz (esto requiere .tsx)
interface PerfilPage {
  name: string;
  lastName: string;
  age: number;
}

// 2. Datos iniciales para reutilizar en el reset
const INITIAL_DATA: PerfilPage = {
  name: "Jean Pierre",
  lastName: "Valarezo",
  age: 21,
};

export default function PerfilPage() {
  // 3. Uso de useState con tipado (esto también requiere .tsx)
  const [perfil, setPerfil] = useState<PerfilPage>(INITIAL_DATA);

  // Desestructuración para facilitar el acceso en el JSX
  const { name, lastName, age } = perfil;

  // Función que usa los datos
  const getFullName = (): string =>
    `${name} ${lastName} con edad ${age} años`;

  const changeData = (): void => {
    setPerfil({
      name: "Sebastian",
      lastName: "Gomez",
      age: 25,
    });
  };

  const changeAge = (): void => {
    setPerfil((prevPerfil) => ({
      ...prevPerfil, 
      age: 18,
    }));
  };

  const resetData = (): void => {
    setPerfil(INITIAL_DATA);
  };

  return (
    <div style={{ fontFamily: "Arial", margin: "20px" }}>
      <h1>{name}</h1>
      
      <dl>
        <dt>Nombre:</dt>
        <dd>{name}</dd>
        
        <dt>Apellido:</dt>
        <dd>{lastName}</dd>
        
        <dt>Edad:</dt>
        <dd>{age}</dd>
        
        <dt>Nombre completo:</dt>
        <dd>{getFullName()}</dd>
        
        <dt>Nombre y Apellido (Mayúsculas):</dt>
        <dd>{`${name.toUpperCase()} ${lastName.toUpperCase()}`}</dd>
      </dl>

      <button onClick={changeData} style={{ marginRight: '10px' }}>
        Cambiar datos
      </button>
      <button onClick={changeAge} style={{ marginRight: '10px' }}>
        Cambiar edad a 18
      </button>
      <button onClick={resetData}>
        Resetear datos
      </button>
    </div>
  );
}