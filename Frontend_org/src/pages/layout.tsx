import React, { useRef } from 'react'
import {
  ACZChakraProvider,
  ACZInitalState,
  ACZIntlProvider
} from '@/common'
import { ACZSeoProvider } from '@common/libs/ACZSeoProvider'
export const ACZAlertRootContext = React.createContext({})
import { Outlet } from 'react-router-dom';
import Footer from '@common/components/layout/Footer';
import HeaderBar from '@common/components/layout/HeaderBar';
import { styles } from '@common/components/layout/styles/layout.styles';
import { useACZState } from '@common/state';
import { Flex } from '@chakra-ui/react';

export default function layout() {
  const myAlertRef = useRef()
  const { snap } = useACZState();

  return (
    <ACZIntlProvider>
      <ACZSeoProvider />
      <ACZChakraProvider>
        <ACZAlertRootContext.Provider value={myAlertRef}>
          
            <HeaderBar
              user={snap.session.user}
              account={snap.storage}
            />
            <Flex sx={styles.MainContentWrapper}>
              <Flex sx={styles.StyledContent}>
                <Flex sx={styles.MainContent}>
                  <ACZInitalState/>
                </Flex>
              </Flex>
            </Flex>
            <Footer />
        </ACZAlertRootContext.Provider>
      </ACZChakraProvider>
    </ACZIntlProvider>
  )
}
