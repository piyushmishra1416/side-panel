import React from 'react';
import './styles.css';

interface ICheckboxFieldsetProps {
  legend?: string;
  dir?: 'vertical' | 'horizontal';
}

const CheckboxFieldset: React.FC<ICheckboxFieldsetProps> = ({
  legend,
  children,
  dir = 'veritcal',
}) => (
  <fieldset className={`checkbox-fieldset checkbox-fieldset--${dir}`}>
    {legend && <legend>{legend}</legend>}
    {children}
  </fieldset>
);

export default CheckboxFieldset;

