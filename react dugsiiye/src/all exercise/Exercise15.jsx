
import LanguageContext from "./LanguageContext";
import React, { useContext } from 'react'

const Exercise15 = () => {
  const language  = useContext(LanguageContext)

    const messages = {
    en: 'Hello!',
    es: '¡Hola!',
  };

  return (
     <h1> {messages[language]}</h1>
  )
}

export default Exercise15;