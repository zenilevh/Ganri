/* eslint-disable */
import React from 'react';

const VersionSelector = () => {

  return (
    <nav style={{
      height: '30px',
      borderBottom: '1px solid #d1d1d1',
      width: '100%',
      display: 'flex',
      paddingLeft: '18px',
      position: 'sticky',
      backgroundColor: 'white',
      zIndex: '700',
      top: '0',
    }}
    >
      <div style={{
        display: 'flex',
        margin: 'auto 0',
        flex: '1 1 0%',
      }}
      >
        version: V1
        {/* <select onChange={onChangeVersion} value={version} id="version" name="version" style={{ outline: 'none' }}>
          <option value="v1">v1</option>
        </select> */}
      </div>
    </nav>
  );
};
export default VersionSelector;
