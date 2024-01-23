import {
  Flex,
  Image,
  Text,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import { useConnectModal } from '@rainbow-me/rainbowkit';
import { useEffect, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import LogoSvg from '@assets/images/logo.svg';
import MyLineSvg from '@assets/images/line.svg';
import {
  PrimaryButton,
  stateActions,
  useACZState
} from '@common';
import './scss/nav.scss';
import { ChatIcon } from '@chakra-ui/icons';

const styles = {
  lab: {
    cursor: 'pointer',
    textIndent: '-9999px',
    width: '52px',
    height: '27px',
    background: 'grey',
    borderRadius: '100px',
    position: 'relative',
    margin: '0',
  },
  AiTradeC: {
    fontWeight: 200,
    fontSize: { base: '1.2rem', sm: '1.6rem', md: '1.8rem', lg: '1.8rem' },
  },
  AiTag: {
    padding: '0 0.4em',
    backgroundColor: '#57b4fc',
    borderRadius: '0.6em 0',
    fontWeight: '400',
    // letterSpacing: "0.1em",
    color: '#fff',
  },
  navbar: {
    display: 'flex',
    position: 'fixed',
    zIndex: '1000',
    width: '100%',
    top: '0',
    padding: {
      base: '1rem 0.5rem',
      sm: '1.5rem 0.5rem',
      md: '1.5rem 0.5rem',
      lg: '1.5rem 0.5rem',
    },
    backgroundColor: '#a3a3a31f',
    backdropFilter: 'blur(5px)',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
  },
};

export default function PageNav({
  showLogin,
  onHideLogin,
  isDrawerOpen,
  onDrawerOpen,
  onDrawerClose,
}: any) {
  const { toggleColorMode } = useColorMode();
  const { snap } = useACZState();
  const getThemeStatus = useColorModeValue('toggle', 'toggle theme_switch_btn');

  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignUpModal, setShowSignUpModal] = useState(false);
  const [showForgotModal, setShowForgotModal] = useState(false);
  const [showSocialModal, setShowSocialModal] = useState(false);

  useEffect(() => {
    // console.log('useEffect', address, connector, chain, snap.storage.isLogin);
    if (!snap.storage.token) {
      stateActions.loginFailed();
    } else {
      stateActions.loginSuccess();
    }
  }, [snap.storage.isLogin]);

  useEffect(() => {
    setShowLoginModal(showLogin);
  }, [showLogin]);

  function handleToggleSidebar() {
    if (isDrawerOpen) {
      onDrawerClose();
    } else {
      onDrawerOpen();
    }
  }

  return (
    <Flex sx={styles.navbar}>
      <Flex
        w={{ base: '100%', sm: '100%', md: '100%', lg: '1270px' }}
        justifyContent='space-between'
      >
        <Flex alignItems='center'>
          <Flex>
            <Link to='/'>
              <Image
                src={LogoSvg}
                alt='AIEarn Logo'
                w={{ base: '30px', sm: '30px', md: '45px', lg: '45px' }}
              />
            </Link>
          </Flex>
          <Flex px={3}>
            <Image src={MyLineSvg} alt='seperator' />
          </Flex>
          <Flex sx={styles.AiTradeC} alignItems='center'>
            <Text
              sx={styles.AiTag}
              mr={{ base: 1, sm: 2, md: 2, lg: 3 }}
              textAlign='center'
            >
              AI
            </Text>
            Earn
          </Flex>
        </Flex>
        <Flex alignItems='center'>
          <Flex animation='heartbeat 1.5s ease-in-out infinite both'>
            <PrimaryButton
              fontSize={{
                base: '0.8rem',
                sm: '0.8rem',
                md: '1.2rem',
                lg: '1.2rem',
              }}
              h={{ base: '35px', sm: '40px', md: '40px', lg: '40px' }}
              w={{ base: '90px', sm: '90px', md: '150px', lg: '150px' }}
              onClick={() => {
                stateActions.setIsLogin(true);
                setShowLoginModal(true);
              }}
            >
              <FormattedMessage id='text.GetStart' />
            </PrimaryButton>
          </Flex>
          <Flex
            p={{ base: '0 5px', sm: '0 5px', md: '0 14px', lg: '0 14px' }}
            className={getThemeStatus}
            onClick={() => {
              toggleColorMode();
            }}
          >
            <Text sx={styles.lab} className='label'>
              <FormattedMessage id='text.Toggle' />
            </Text>
          </Flex>
          <Flex>
          </Flex>
        </Flex>
      </Flex>
      
    </Flex>
  );
}
