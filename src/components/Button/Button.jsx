import React from 'react'
import './Button.css'

const Button = ({ changePhrase }) => {
  return (
    <button onClick={changePhrase}>
      <i class="fa-solid fa-rotate"></i>
    </button>
  );
}

export default Button
