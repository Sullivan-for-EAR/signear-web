import React from 'react';
import { useLocation } from 'react-router-dom';

import Box from '@/components/Box';
import Flex from '@/components/Flex';

import { ReactComponent as AlarmIcon } from '../../images/icons-alarm.svg';
import { ReactComponent as NewAlarmIcon } from '../../images/icons-new-alarm.svg';

import MenuRoutes from '@/config/menuRoutes';

const DefaultHeader: React.FC = () => {
  const location = useLocation();
  const headerInfo = MenuRoutes.filter(
    (menu) => menu.url === location.pathname
  );
  const currentAlarm = true;
  return (
    <Box mb="38px">
      <Flex justifyContent="space-between" alignItems="center" mb="8px">
        <Box fontSize="24px" fontWeight="700">
          {headerInfo[0].title}
        </Box>
        <Flex>
          <Box mr="32px" width="16px" height="16px">
            {currentAlarm ? <NewAlarmIcon /> : <AlarmIcon />}
          </Box>
          <Box paddingLeft="32px" borderLeft="2px solid #DFE0EB">
            강동 1 테스트
          </Box>
        </Flex>
      </Flex>
      <Box color="#9FA2B4">{headerInfo[0].subTitle}</Box>
    </Box>
  );
};

export default DefaultHeader;
