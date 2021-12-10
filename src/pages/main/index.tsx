import React from 'react';

import Flex from '@/components/Flex';
import Grid from '@/components/Grid';
import Card from '@/components/Card';

const MainPage: React.FC = () => {
  return (
    <Grid p="12px 0 9px" fontSize="15px">
      <Flex gridColumn="1 / 13" justifyContent="center">
        NO
      </Flex>
      <Flex
        flexDirection="column"
        gridColumn="13 / -1"
        justifyContent="center"
        gridRowGap="13px"
      >
        <Card title="완료" count={3} color="red" />
        <Card title="완료" count={3} color="blue" />
        <Card title="완료" count={3} />
        <Card title="완료" count={3} />
      </Flex>
    </Grid>
  );
};

export default MainPage;
