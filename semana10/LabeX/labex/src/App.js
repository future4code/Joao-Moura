import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Router/Routes';
const App = () => {
  return(
    <BrowserRouter>
      <Routes/>
    </BrowserRouter>
  )
}
export default App;
