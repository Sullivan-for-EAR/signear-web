import React from 'react';
import { SWRConfig } from 'swr';
import { BrowserRouter, Route } from 'react-router-dom';

import { fetcher } from '@/config/axios';

import Flex from '@/components/Flex';
import DefaultLayout from '@/templates/DefaultLayout';
import { SessionProvider } from '@/components/SessionProvider';

import TodayEars from '@/pages/todayEars';
import Reservation from '@/pages/reservation';
import UserManage from '@/pages/userManage';
import Login from '@/pages/login';
import MainPage from '@/pages/main';

const App: React.FC = () => {
  return (
    <Flex height="100%">
      <BrowserRouter>
        <SessionProvider>
          <DefaultLayout>
            <SWRConfig value={{ fetcher }}>
              <Route path="/" exact component={MainPage} />
              <Route path="/Login" component={Login} />
              <Route path="/todayEars" component={TodayEars} />
              <Route path="/reservation" component={Reservation} />
              <Route path="/userManage" component={UserManage} />
            </SWRConfig>
          </DefaultLayout>
        </SessionProvider>
      </BrowserRouter>
    </Flex>
  );
};

export default App;
