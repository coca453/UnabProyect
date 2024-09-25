import React from 'react'

const Email = ({ email,setEmail,setShowEmailAlert,showEmailAlert}) => {
return (
    <>
    <input type="text"
            class='form-control'
            placeholder="email" 
            aria-label="First name" 
            value={email} 
            onChange={(e)=>{
                setEmail(e.target.value)
                setShowEmailAlert(false) } 
            } />
        {showEmailAlert ? 
        <div class="alert alert-danger myAlert" role="alert">
            Ingrese un Email Válido
        </div> : null
        }
    </>
)
}

export default Email