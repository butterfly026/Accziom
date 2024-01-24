import AuthContext from '@common/contexts/AmplifyContext';
import { useContext } from 'react';

const useAuth = () => useContext(AuthContext);

export default useAuth;
