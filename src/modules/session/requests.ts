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
): Promise<TokenResponse> => {
  const res = await API.post<TokenResponse>(
    `login/sign?email=${params.email}&password=${params.password}`
  );
  return res.data;
};
