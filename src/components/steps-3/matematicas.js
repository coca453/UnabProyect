import React from 'react';

const Matematicas = ({
  mate1,
  mate2,
  setMate1,
  setMate2,
  mate1Alert,
  setMate1Alert,
  mate2Alert,
  setMate2Alert,
  isDisabled,
}) => {
  const handleBlur = (val, tipo) => {
    let a = 100;
    let b = 1000;
    if (val >= a && val <= b) {
      tipo === 1 ? setMate1(val) : setMate2(val);
    } else {
      tipo === 1 ? setMate1('') : setMate2('');
    }
  };
  return (
    <>
      <div class="form__flex form__flex--inputs">
        <div class="form__element">
          <div class="form__title">
            Matemáticas 1
            {mate1Alert ? (
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
              placeholder="100 a 1.000 pts"
              value={mate1}
              onKeyDown={(evt) => {
                ['e'].includes(evt.key) && evt.preventDefault();
                ['E'].includes(evt.key) && evt.preventDefault();
                ['+'].includes(evt.key) && evt.preventDefault();
                ['-'].includes(evt.key) && evt.preventDefault();
              }}
              disabled={isDisabled}
              onChange={(e) => {
                setMate1(e.target.value.replace(/[^\d]+/gi, ''));
                setMate1Alert(false);
              }}
              onBlur={(e) => {
                handleBlur(e.target.value, 1);
              }}
            />
          </div>
        </div>
        <div class="form__element">
          <div class="form__title">
            Matemáticas 2
            {mate2Alert ? (
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
              placeholder="100 a 1.000 pts"
              value={mate2}
              disabled={isDisabled}
              onKeyDown={(evt) => {
                ['e'].includes(evt.key) && evt.preventDefault();
                ['E'].includes(evt.key) && evt.preventDefault();
                ['+'].includes(evt.key) && evt.preventDefault();
                ['-'].includes(evt.key) && evt.preventDefault();
              }}
              onChange={(e) => {
                setMate2(e.target.value.replace(/[^\d]+/gi, ''));
                setMate2Alert(false);
              }}
              onBlur={(e) => {
                handleBlur(e.target.value, 2);
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Matematicas;
