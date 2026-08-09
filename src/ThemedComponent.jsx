import React, { useContext } from 'react'
import ThemeContext from './ThemeContext'
const ThemedComponent = () => {
   const theme= useContext(ThemeContext)
  const style = {
    backgroundColor: theme === 'light' ? '#fff' : '#333',
    color: theme === 'light' ? '#000' : '#fff',
    padding: '20px',
    textAlign: 'center',
  };
  return (
    <div style={style}> This is a {theme}-themed componen</div>
  )
}

export default ThemedComponent;