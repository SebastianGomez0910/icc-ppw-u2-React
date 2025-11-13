import { useState } from "react";

interface PerfilPage {
  name: string;
  lastName: string;
  age: number;
}

const INITIAL_DATA: PerfilPage = {
  name: "Jean Pierre",
  lastName: "Valarezo",
  age: 21,
};

export default function PerfilPage() {
  const [perfil, setPerfil] = useState<PerfilPage>(INITIAL_DATA);

  const { name, lastName, age } = perfil;

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