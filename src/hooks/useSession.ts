import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import {
  creatSessionAndRedirect,
  destroySession,
} from '@/modules/session/thunks';
import { RootState } from 'store';

function useSession() {
  const dispatch = useDispatch();
  const session = useSelector((state: RootState) => state.session);
  const router = useHistory();

  const login = async (param: { email: string; password: string }) => {
    await dispatch(creatSessionAndRedirect(param));
    // router.push('/todayEars');
  };

  const logout = () => {
    dispatch(destroySession());
  };

  return {
    session,
    login,
    logout,
  };
}

export default useSession;
