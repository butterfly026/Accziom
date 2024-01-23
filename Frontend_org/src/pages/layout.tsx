import React, { useRef } from 'react'
import {
  ACZChakraProvider,
  ACZInitalState,
  ACZIntlProvider
} from '@/common'
import { ACZSeoProvider } from '@common/libs/ACZSeoProvider'
export const ACZAlertRootContext = React.createContext({})

export default function layout() {
  const myAlertRef = useRef()

  return (
    <ACZIntlProvider>
      <ACZSeoProvider />
      <ACZChakraProvider>
        <ACZAlertRootContext.Provider value={myAlertRef}>
          <ACZInitalState />
        </ACZAlertRootContext.Provider>
      </ACZChakraProvider>
    </ACZIntlProvider>
  )
}
