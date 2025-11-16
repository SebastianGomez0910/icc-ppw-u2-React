import React, { useState, useCallback, useMemo } from 'react';

const initialValidations = {
  nombre: { required: true, minLength: 3 },
  edad: { required: true, min: 18 },
  correo: { required: true, email: true },
};

const Formulario = () => {
  const [formValues, setFormValues] = useState({
    nombre: '',
    edad: '', 
    correo: '',
  });

  const [formTouched, setFormTouched] = useState({
    nombre: false,
    edad: false,
    correo: false,
  });

  const onInputChange = useCallback((event) => {
    const { name, value } = event.target;
    setFormValues(prevValues => ({
      ...prevValues,
      [name]: value,
    }));
  }, []);

  const onInputBlur = useCallback((event) => {
    const { name } = event.target;
    setFormTouched(prevTouched => ({
      ...prevTouched,
      [name]: true,
    }));
  }, []);
  
  const getFieldErrors = useCallback((fieldName) => {
    const value = formValues[fieldName];
    const validations = initialValidations[fieldName];
    
    if (!validations) return null;

    if (validations.required && (value === '' || value === 0)) {
        return 'Este campo es requerido';
    }

    if (validations.minLength && typeof value === 'string' && value.length < validations.minLength) {
        return `Mínimo de ${validations.minLength} caracteres.`;
    }

    if (validations.min && !isNaN(Number(value)) && Number(value) < validations.min) {
        return `Valor mínimo de ${validations.min}`;
    }

    if (validations.email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
        if (!emailRegex.test(value)) {
            return 'Formato de correo inválido';
        }
    }

    return null; 
  }, [formValues]);

  const isFormInvalid = useMemo(() => {
    for (const field in formValues) {
      if (getFieldErrors(field)) {
        return true; 
      }
    }
    return false; 
  }, [formValues, getFieldErrors]);

  const isValidField = useCallback((fieldName) => {
    return getFieldErrors(fieldName) && formTouched[fieldName];
  }, [formTouched, getFieldErrors]);

  const onSubmit = useCallback((event) => {
    event.preventDefault(); 
    
    setFormTouched({
      nombre: true,
      edad: true,
      correo: true,
    });

    if (isFormInvalid) {
      return;
    }

    console.log('Datos del formulario', formValues);
    alert('Formulario válido. Datos enviados correctamente');

    setFormValues({
      nombre: '',
      edad: '',
      correo: '',
    });
    setFormTouched({
      nombre: false,
      edad: false,
      correo: false,
    });
  }, [isFormInvalid, formValues]);

  return (
    <div className="row">
      <div className="col">
        <form 
          autoComplete="off"
          onSubmit={onSubmit}
        >
          
          <div className="mb-3 row">
            <label className="col-sm-3 col-form-label">Nombre</label>
            <div className="col-sm-9">
              <input
                type="text"
                className="form-control"
                placeholder="Nombre del usuario"
                name="nombre"
                value={formValues.nombre}
                onChange={onInputChange}
                onBlur={onInputBlur}
              />
              {isValidField('nombre') && (
                <p className="text-danger mt-1">
                  {getFieldErrors('nombre')}
                </p>
              )}
            </div>
          </div>
          
          <div className="mb-3 row">
            <label className="col-sm-3 col-form-label">Edad</label>
            <div className="col-sm-9">
              <input
                type="number"
                className="form-control"
                placeholder="Edad del usuario"
                name="edad"
                value={formValues.edad}
                onChange={onInputChange}
                onBlur={onInputBlur}
              />
              {isValidField('edad') && (
                <p className="text-danger mt-1">
                  {getFieldErrors('edad')}
                </p>
              )}
            </div>
          </div>
          
          <div className="mb-3 row">
            <label className="col-sm-3 col-form-label">Correo</label>
            <div className="col-sm-9">
              <input
                type="email"
                className="form-control"
                placeholder="correo del usuario"
                name="correo"
                value={formValues.correo}
                onChange={onInputChange}
                onBlur={onInputBlur}
              />
              {isValidField('correo') && (
                <p className="text-danger mt-1">
                  {getFieldErrors('correo')}
                </p>
              )}
            </div>
          </div>

          <div className="row">
            <div className="col">
              <button
                type="submit"
                className="btn btn-primary float-end"
                disabled={isFormInvalid} 
              >
                Guardar
              </button>
            </div>
          </div>

        </form>
      </div>
    </div>
  );
};

export default Formulario;