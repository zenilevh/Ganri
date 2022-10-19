import React from 'react';
import { RedocStandalone } from 'redoc';
import paperTheme from '../../theme/theme';
import V1 from '../../Data/v1.yaml';
import './Docs.css';
// import mockSpec from '../../MockSpecData/specTemplate.yaml';
// import mockSpecTemp from '../../MockSpecData/spec.yaml';

function Docs() {
  return (
    <div>
      <div>
        <RedocStandalone
          specUrl={V1}
          options={{
            expandDefaultServerVariable: true,
            theme: paperTheme,
          }}
        />
      </div>
    </div>
  );
}

export default Docs;
