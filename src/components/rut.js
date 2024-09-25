import React from 'react'

const Rut = ({ rut,setRut,showRutAlert,setShowRutAlert}) => {
return (
    <>
    <input type="text" 
                class='form-control' 
                placeholder="RUT" 
                aria-label="Rut"  
                value={rut} 
                onChange={(e)=>{
                    setRut(e.target.value.replace(/[^0-9a-zA-Z\-]+/gi,''))
                    setShowRutAlert(false)
                }}/>
        {showRutAlert ?
            <div class="alert alert-danger myAlert" role="alert">
            Ingrese un RUT Válido
            </div> : null
        }
    </>
)
}

export default Rut