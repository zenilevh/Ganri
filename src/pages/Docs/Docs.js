import React from 'react';
import { RedocStandalone } from 'redoc';
import paperTheme from '../../theme/theme';
import V1 from '../../Data/v1.yaml';
import './Docs.css';

function Docs() {
  return (
    <div>
      <RedocStandalone
        specUrl={V1}
        options={{
          expandDefaultServerVariable: true,
          theme: paperTheme,
        }}
      />
    </div>
  );
}

export default Docs;
