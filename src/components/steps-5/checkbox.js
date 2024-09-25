import React from 'react';
import Tooltip from './tooltip';

const Checkbox = ({ textos, tipo, step, tooltip, val, setChange, alert, setAlert, isStep4 }) => {
 const isChecked = (valueToCompare) => {
  return val === valueToCompare ? true : false;
 };
 return (
  <>
   <div class="form__title">
    {textos[tipo].title}
    {alert ? (
     <>
      <svg
       xmlns="http://www.w3.org/2000/svg"
       width="18"
       height="18"
       class="bi bi-exclamation-diamond-fill error_icon"
       viewBox="0 0 16 16">
       <path fill="#FF0000" d="M9.05.435c-.58-.58-1.52-.58-2.1 0L.436 6.95c-.58.58-.58 1.519 0 2.098l6.516 6.516c.58.58 1.519.58 2.098 0l6.516-6.516c.58-.58.58-1.519 0-2.098L9.05.435zM8 4c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995A.905.905 0 0 1 8 4zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
      </svg>
     </>
    ) : null}
   </div>
   <div class="form__flex">
    <div class="form__checkboxs">
     <div class="form__checkbox">
      <div class="form__input">
       <input
        type="radio"
        name={tipo + '-1'}
        value="SI"
        checked={val === 'SI'}
        onChange={(e) => {
         setChange(e.target.value);
         setAlert(false);
        }}
       />
      </div>
      <div class="form__text">Si</div>
     </div>
     <div class="form__checkbox">
      <div class="form__input">
       <input
        type="radio"
        name={tipo + '-2'}
        value="NO"
        checked={val === 'NO'}
        onChange={(e) => {
         setChange(e.target.value);
         setAlert(false);
        }}
       />
      </div>
      <div class="form__text">No</div>
     </div>
    </div>
    {isStep4 ? (
     <>
      <Tooltip
       textos={tooltip}
       step={step}
      />
     </>
    ) : null}
   </div>
  </>
 );
};

export default Checkbox;
