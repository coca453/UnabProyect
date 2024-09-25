import React from 'react'

const PromedioInput = ({ promedio,setPromedio,setShowPromedioAlert,showPromedioAlert,handleBlur}) => {

return (
    <>
    <input type="text"
            class='form-control'
            placeholder="40 a 70" 
            aria-label="promedio" 
            value={promedio}
            maxLength='2'
            onBlur={(e)=>handleBlur(e,true,40,70)}  
            onChange={(e)=>{
                setPromedio(e.target.value.replace(/[^\d]+/gi,''))
                setShowPromedioAlert(false) } 
            } />
        {showPromedioAlert ? 
        <div class="alert alert-danger myAlert" role="alert">
            Ingrese un valor entre 40 y 70
        </div> : null
        }
    </>
)
}

export default PromedioInput