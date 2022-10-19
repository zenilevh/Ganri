import './App.css';
import React from 'react';

// import UnauthorizedCallback from './pages/UnauthorizedCallback';
import Docs from './pages/Docs';
import VersionSelector from './Components/VersionSelector';

function App() {
  return (
    <div className="App">
      <VersionSelector />
      <Docs />
    </div>
  );
}

export default App;
