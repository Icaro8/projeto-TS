import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyles from './GlobalStyles/GlobalStyles';



import RotasNav from './Pages/Routes';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles/>
      <RotasNav/>
    </BrowserRouter>
  );
}

export default App;
