import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css'
import {Route,Routes} from 'react-router-dom'
import FormDemo from './components/form';
import TableDemo from './components/table';

function App() {
  return (
    <Routes>
      <Route path='/form' Component={FormDemo}/>
      <Route path='/' Component={TableDemo}/>
    </Routes>
  );
}

export default App;