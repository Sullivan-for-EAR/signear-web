import React from 'react';
import { SWRConfig } from 'swr';
import { BrowserRouter, Route } from 'react-router-dom';

import { fetcher } from '@/config/axios';

import Flex from '@/components/Flex';
import DefaultLayout from '@/templates/DefaultLayout';

import TodayEars from '@/pages/todayEars';
import Reservation from '@/pages/reservation';
import UserManage from '@/pages/userManage';

const App: React.FC = () => {
  return (
    <Flex height="100%">
      <BrowserRouter>
        <DefaultLayout>
          <SWRConfig value={{ fetcher }}>
            <Route path="/" exact component={TodayEars} />
            <Route path="/reservation" component={Reservation} />
            <Route path="/userManage" component={UserManage} />
          </SWRConfig>
        </DefaultLayout>
      </BrowserRouter>
    </Flex>
  );
};

export default App;
