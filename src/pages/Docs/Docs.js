import React from 'react';
import { RedocStandalone } from 'redoc';
import PropTypes from 'prop-types';
import paperTheme from '../../theme/theme';
import V1 from '../../Data/v1.yaml'

const Docs = () => {

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
};

Docs.propTypes = {
  isAuthorized: PropTypes.bool.isRequired,
  setIsAuthorized: PropTypes.func.isRequired,
};

export default Docs;
