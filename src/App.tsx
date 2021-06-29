import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Flex from '@/components/Flex';
import { DefaultLayoutProvider } from '@/templates/DefaultLayout';
import DefaultSidebar from '@/components/DefaultSidebar';

import TodayEars from '@/pages/todayEars';

const App: React.FC = () => {
  return (
    <Flex height="100%">
      <DefaultLayoutProvider>
        <DefaultSidebar />
        <BrowserRouter>
          <Flex p="36px 33px" flex="1 0 auto">
            <Route path="/" exact component={TodayEars} />
          </Flex>
        </BrowserRouter>
      </DefaultLayoutProvider>
    </Flex>
  );
};

export default App;
