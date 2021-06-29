import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const DefaultLayout = createContext([{}, () => undefined]);

const DefaultLayoutProvider = ({ children }: { children: React.ReactNode }) => {
  const [layout, setLayout] = useState({
    type: 'default',
    data: {},
  });
  return (
    <DefaultLayout.Provider value={[layout, setLayout]}>
      {children}
    </DefaultLayout.Provider>
  );
};

export { DefaultLayout, DefaultLayoutProvider };

DefaultLayoutProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
