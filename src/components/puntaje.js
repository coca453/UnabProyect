import React from 'react'

const PuntajeInput = ({ points,setPoints,setShowPointsAlert,showPointsAlert,handleBlur}) => {

return (
    <>
    <input type="text"
            class='form-control'
            placeholder="100 a 1000 pts" 
            aria-label="points" 
            value={points}
            maxLength='4'
            onBlur={(e)=>handleBlur(e,false,100,1000)}
            onChange={(e)=>{
                setPoints(e.target.value.replace(/[^\d]+/gi,''))
                setShowPointsAlert(false) } 
            } />
        {showPointsAlert ? 
        <div class="alert alert-danger myAlert" role="alert">
            Ingrese un valor entre 100 y 1000
        </div> : null
        }
    </>
)
}

export default PuntajeInput