import React from 'react'
import Navigation from './Components/Navigation.jsx'
import { ThemeProvider } from "@material-tailwind/react";


function App() {
  return (
   
    <ThemeProvider>
      <Navigation />
      {/* rest of your app */}
    </ThemeProvider>
  )
}

export default App


