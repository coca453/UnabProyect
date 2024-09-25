import React from 'react'

const Telefono = ({ telefono,setTelefono,setShowTelefonoAlert,showTelefonoAlert}) => {
return (
    <>
    <span class="input-group-text" id="basic-addon1">+569</span>
        <input type="text" 
            class="form-control"
            id="telefono"
            placeholder="Teléfono celular" 
            aria-label="Teléfono celular"  
            value={telefono}
            maxLength="8"
            onChange={(e)=>{
                setTelefono(e.target.value.replace(/[^\d{8}]+/gi,''))
                setShowTelefonoAlert(false)
            }}/>
        {showTelefonoAlert ?
        <div class="alert alert-danger myAlert" role="alert">
            Ingrese un teléfono Válido
        </div> : null
        }
    </>
)
}

export default Telefono