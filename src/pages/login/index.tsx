import React from 'react';
import { useForm } from 'react-hook-form';

import Box from '@/components/Box';
import Input from '@/components/Input';

import useSession from '@/hooks/useSession';

const Login: React.FC = () => {
  const { register, handleSubmit } = useForm();
  const { session, login, logout } = useSession();

  const canLogin =
    session.status === 'loggedOut' || session.status === 'unknown';

  const handleLogin = (data: { email: string; password: string }) => {
    if (canLogin) {
      login(data);
    }
    logout();
  };

  return (
    <Box as="form" onSubmit={handleSubmit(handleLogin)}>
      로그인 페이지
      <Input {...register('email')} />
      <Input {...register('password')} type="password" />
      <Box as="button" mr="8px">
        {canLogin ? '로그인' : '로그아웃'}
      </Box>
    </Box>
  );
};

export default Login;
