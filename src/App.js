import Header from './Components/Layout/Header';
import React from 'react';
import Meals from './Components/Meals/Meals';

function App() {
  return (
   <React.Fragment>
    <Header />
    <main>
      <Meals/>
    </main>
   </React.Fragment>
  );
}

export default App;
