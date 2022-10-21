import React from 'react';
import { RedocStandalone } from 'redoc';
import paperTheme from '../../theme/theme';
import V1 from '../../Data/v1.yaml';
import './Docs.css';

function Docs() {
  const handleRedocLoaded = () => {
    // Page header
    const buttonContainer = document.querySelector('.api-info p');
    buttonContainer.innerHTML = buttonContainer.innerHTML.slice(
      buttonContainer.innerHTML.indexOf('<'),
    );
    buttonContainer.querySelector('a').text = 'Download Open API spec';
  };

  return (
    <div>
      <RedocStandalone
        specUrl={V1}
        options={{
          expandDefaultServerVariable: true,
          theme: paperTheme,
        }}
        onLoaded={handleRedocLoaded}
      />
    </div>
  );
}

export default Docs;
