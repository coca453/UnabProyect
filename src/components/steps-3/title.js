import React from 'react';

const Title = ({ subtitle, title }) => {
  return (
    <>
      <div class="section__form__header__texts">
        <span class="section__form__subtitle">{subtitle}</span>
        <div class="section__form__title">{title}</div>
      </div>
    </>
  );
};

export default Title;
