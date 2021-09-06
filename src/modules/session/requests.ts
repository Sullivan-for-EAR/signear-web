import API from '@/config/axios';

interface LoginParams {
  email: string;
  password: string;
}

interface TokenResponse {
  access_token: string;
}

export const createAccessToken = async (
  params: LoginParams
): Promise<string> => {
  const res = await API.post<string>(
    `/login/signuser?email=${params.email}&password=${params.password}`
  );
  return res.data;
};
