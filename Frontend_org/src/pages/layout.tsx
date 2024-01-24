import React, { useRef } from 'react'
import {
  ACZChakraProvider,
  ACZIntlProvider
} from '@/common'
import { ACZSeoProvider } from '@common/libs/ACZSeoProvider'
export const ACZAlertRootContext = React.createContext({})
import store from '@common/store';
import { Provider as ReduxProvider } from 'react-redux';
import useMounted from '@common/hooks/useMounted';
import { AuthProvider } from '@common/contexts/AmplifyContext';
import App from './App';

export default function layout() {
  const alertRef = useRef();
  const mounted = useMounted();

  return (
    <ReduxProvider store={store}>
      <ACZIntlProvider>
        <ACZSeoProvider />
        <ACZChakraProvider>
          <AuthProvider>
            <ACZAlertRootContext.Provider value={alertRef}>
              <App/>
            </ACZAlertRootContext.Provider>
          </AuthProvider>
        </ACZChakraProvider>
      </ACZIntlProvider>
    </ReduxProvider>

  )
}
