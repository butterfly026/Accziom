
import useAuth from '@common/hooks/useAuth';
import LoadingScreen from '@common/components/layout/LoadingScreen';

import { Outlet } from 'react-router-dom';
import Footer from '@common/components/layout/Footer';
import HeaderBar from '@common/components/layout/HeaderBar';
import { styles } from '@common/components/layout/styles/layout.styles';
import { Flex } from '@chakra-ui/react';

export default () => {
  const { isAuthenticated, isInitialized } = useAuth();

  return <>
    {isInitialized ? (
      <>
        <HeaderBar />
        <Flex sx={styles.MainContentWrapper}>
          <Flex sx={styles.StyledContent}>
            <Flex sx={styles.MainContent}>
              <Outlet />
            </Flex>
          </Flex>
        </Flex>
        <Footer />
      </>
    ) : (
      <LoadingScreen />
    )
    }
  </>
}