import React from 'react'
import Button from "../Button/Button";
import './Card.css'

const Card = ({ phraseRamdom, changePhrase, changeShadow }) => {
  return (
    <>
      <div className="card__container" style={changeShadow}>
        <p className="card__phrase">{phraseRamdom.phrase}</p>
        <Button changePhrase={changePhrase} />
      </div>
    </>
  );
};

export default Card
