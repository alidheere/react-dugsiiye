
import { useState } from "react";


import LanguageContext from "./all exercise/LanguageContext";
import Exercise15 from "./all exercise/Exercise15";
import MultipForm from "./all exercise/Exercise14";
function App() {
const[Language, setLanguage]= useState('en')

const  ToggleLanguage=()=>{
  setLanguage((prevLanguage)=> (prevLanguage==="en" ? "es" : "en"))
}

return (
  <>
  
  < MultipForm/>



  
  <LanguageContext.Provider value={Language}>
<button
onClick={ ToggleLanguage}
>  switchto {Language === "en"? "English" : "spanish"}</button>

<Exercise15/>
  </LanguageContext.Provider>

</>

)

}
export default App;

