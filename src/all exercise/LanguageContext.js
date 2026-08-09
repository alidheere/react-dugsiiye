import { createContext } from "react";

const LanguageContext= createContext('en')

export default LanguageContext;

const[Language, setLanguage]= useState('en')

const  ToggleLanguage=()=>{
  setLanguage((prevLanguage)=> (prevLanguage==="en" ? "es" : "en"))
}
  <LanguageContext.Provider value={Language}>
<button
onClick={ ToggleLanguage}
>  switchto {Language === "en"? "English" : "spanish"}</button>

<Exercise15/>
  </LanguageContext.Provider>