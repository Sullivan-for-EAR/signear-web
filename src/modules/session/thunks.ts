import { AppThunk } from '@/store';

import { createSessionSuccess, deleteSession } from '@/modules/session/index';
import { createAccessToken } from '@/modules/session/requests';

export const initializeSession = ({
  email,
  password,
}: {
  email: string;
  password: string;
}): AppThunk => async (dispatch) => {
  try {
    const sessionResult = await createAccessToken({ email, password });
    dispatch(
      createSessionSuccess({
        accessToken: sessionResult.access_token,
      })
    );
  } catch {
    console.log('에러');
  }
};

export const destroySession = (): AppThunk => async (dispatch) => {
  try {
    deleteSession();
  } catch {
    console.log('에러');
  }
};
