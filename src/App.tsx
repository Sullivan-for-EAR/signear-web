import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Flex from './components/Flex';
import { DefaultLayoutProvider } from './templates/DefaultLayout';
import DefaultSidebar from './components/DefaultSidebar';
import Box from './components/Box';

import TodayEars from './pages/todayEars';

const App: React.FC = () => {
  return (
    <Flex height="100%">
      <DefaultLayoutProvider>
        <DefaultSidebar />
        <BrowserRouter>
          <Box p="36px 33px">
            <TodayEars />
          </Box>
        </BrowserRouter>
      </DefaultLayoutProvider>
    </Flex>
  );
};

export default App;
