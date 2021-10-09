import React, {useState} from 'react'
function Formulario({busqueda,setBusqueda,setConsultar}) {
    const {ciudad,pais} = busqueda;
    
    const handleInput = e => {
        setBusqueda({
            ...busqueda,
            [e.target.name]: e.target.value
        })
    }

    const enviarFormulario = e => {
        e.preventDefault();        
        setConsultar(true)
    }
    return (
        <form onSubmit={enviarFormulario}>
        
            <div className="form-group">
                <label htmlFor="ciudad">Ciudad:</label>
                <select
                    className="custom-select"
                    type="text" 
                    id="ciudad"
                    name="ciudad"
                    placeholder="Escriba su ciudad..."
                    className="form-control"
                    value={ciudad}
                    onChange={handleInput}
                >
                    <option value="">--Seleccione una ciudad--</option>
                    <option value="Aguilares">Aguilares</option>
                    <option value="Apopa">Apopa</option>
                    <option value="Ayutuxtepeque">Ayutuxtepeque</option>
                    <option value="Ciudad Delgado">Ciudad Delgado</option>
                    <option value="Cuscatancingo">Cuscatancingo</option>
                    <option value="El Paisnal">El Paisnal</option>
                    <option value="Guazapa">Guazapa</option>
                    <option value="Ilopango">Ilopango</option>
                    <option value="Mejicanos">Mejicanos</option>
                    <option value="Nejapa">Nejapa</option>
                    <option value="Panchimalco">Panchimalco</option>
                    <option value="Rosario de Mora">Rosario de Mora</option>
                    <option value="San Marcos">San Marcos</option>
                    <option value="San Martín">San Martín</option>
                    <option value="San Salvador">San Salvador</option>
                    <option value="Santiago Texacuangos">Santiago Texacuangos</option>
                    <option value="Santo Tomás">Santo Tomás</option>
                    <option value="Soyapango">Soyapango</option>
                    <option value="Tonacatepeque">Tonacatepeque</option>
                    
                </select>
            </div>

            <input type="submit" className="btn btn-outline-dark btn-lg btn-block" value="Consultar"/>
        </form>
    )
}

export default Formulario
