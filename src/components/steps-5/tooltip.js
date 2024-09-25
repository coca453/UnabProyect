import React, { useEffect } from "react";
const classMap = {
  3: {
    info: "section__form__info",
    circle: "section__form__circle",
    tooltip: "section__form__tooltip",
  },
  4: {
    info: "form__info",
    circle: "form__circle",
    tooltip: "form__tooltip",
  },
};

const Tooltip = ({ textos, step }) => {
  return (
    <>
      <div class={classMap[step].info}>
        <div class={classMap[step].circle}>
          <span>i</span>
        </div>
        <div class={classMap[step].tooltip}>
          <h5>{textos[0].titulo}</h5>
          <p>{textos[0].desc}</p>
        </div>
      </div>
    </>
  );
};

export default Tooltip;
