import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Flex from '@/components/Flex';
import DefaultLayout from '@/templates/DefaultLayout';

import TodayEars from '@/pages/todayEars';

const App: React.FC = () => {
  return (
    <Flex height="100%">
      <BrowserRouter>
        <DefaultLayout>
          <Route path="/" exact component={TodayEars} />
        </DefaultLayout>
      </BrowserRouter>
    </Flex>
  );
};

export default App;
