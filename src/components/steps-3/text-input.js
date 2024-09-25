import React from 'react';

const TextInput = ({ val, setChange, titulo, tipo, alert, setAlert, isDisabled }) => {
  const handleBlur = (val) => {
    let a = tipo === 'promedio' ? 40 : 100;
    let b = tipo === 'promedio' ? 70 : 1000;
    if (val >= a && val <= b) {
      setChange(val);
      setAlert(false);
    } else {
      setChange('');
    }
  };
  return (
    <>
      <div class="form__element">
        <div class="form__title">
          {titulo}
          {alert ? (
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                class="bi bi-exclamation-diamond-fill error_icon"
                viewBox="0 0 16 16"
              >
                <path fill="#FF0000" d="M9.05.435c-.58-.58-1.52-.58-2.1 0L.436 6.95c-.58.58-.58 1.519 0 2.098l6.516 6.516c.58.58 1.519.58 2.098 0l6.516-6.516c.58-.58.58-1.519 0-2.098L9.05.435zM8 4c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995A.905.905 0 0 1 8 4zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
              </svg>
            </>
          ) : null}
        </div>
        <div class="form__input">
          <input
            type="number"
            number="points"
            name="#"
            placeholder={tipo === 'promedio' ? '40 a 70' : '100 a 1.000 pts'}
            disabled={isDisabled}
            value={val}
            step=".01"
            onKeyDown={(evt) => {
              ['e'].includes(evt.key) && evt.preventDefault();
              ['E'].includes(evt.key) && evt.preventDefault();
              ['+'].includes(evt.key) && evt.preventDefault();
              ['-'].includes(evt.key) && evt.preventDefault();
            }}
            onChange={(e) => {
              setChange(e.target.value);
              setAlert(false);
            }}
            onBlur={(e) => {
              handleBlur(e.target.value);
            }}
          />
        </div>
      </div>
    </>
  );
};

export default TextInput;
