import './App.css';
import React, { useState } from 'react';
import {
  BrowserRouter as Router, Route,
} from 'react-router-dom';
// import UnauthorizedCallback from './pages/UnauthorizedCallback';
import Docs from './pages/Docs';
import VersionSelector from './Components/VersionSelector';


const App = () => {
  const [isAuthorized, setIsAuthorized] = useState(true);

  return (
    <div className="App">
      <VersionSelector />
      <Docs isAuthorized={isAuthorized} setIsAuthorized={setIsAuthorized} />
    </div>
  );
};

export default App;
