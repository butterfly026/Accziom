import { useChainModal } from '@rainbow-me/rainbowkit';
import React, { RefObject, useEffect, useState, useCallback } from 'react';
import data from '@emoji-mart/data';
import Picker from '@emoji-mart/react';
import { FormattedMessage, useIntl } from 'react-intl';
import { useLocation, useNavigate } from 'react-router';
// import { useNetwork } from 'wagmi';
import {
  PrimaryButton,
  getMyHostname,
  request,
  stateActions,
  useACZState,
  useMyToast,
} from '@common/index';
import useWebSocket from 'react-use-websocket';
import { Flex } from '@chakra-ui/react';


let lotteryLogs: any[] = [];
const styles = {
  BaseHeader: {
    WebkitBoxAlign: 'center',
    alignItems: 'center',
    padding: '16px 24px',
    borderBottom: '1px solid var(--cds-colors-line)',
    position: 'fixed',
    left: '0px',
    // transition: 'top 350ms ease 0s',
    top: '0px',
    right: '0px',
    zIndex: '100',
    marginLeft: { base: '0', sm: '0', md: '87px', lg: '240px' },
    WebkitBoxPack: 'justify',
    justifyContent: 'space-between',
    minHeight: '68px',
    maxHeight: '68px',
    _light: { bg: 'gray.0' },
    _dark: { bg: 'gray.99' },
  },
  BaseHeaderWithSidebarOpen: {
    WebkitBoxAlign: 'center',
    alignItems: 'center',
    padding: '16px 24px',
    borderBottom: '1px solid var(--cds-colors-line)',
    position: 'fixed',
    left: '0px',
    transition: 'top 350ms ease 0s',
    top: '0px',
    right: '0px',
    zIndex: '100',
    marginLeft: { base: '0', sm: '0', md: '87px', lg: '240px' },
    WebkitBoxPack: 'justify',
    justifyContent: 'space-between',
    minHeight: '68px',
    maxHeight: '68px',
    _light: { bg: 'gray.0' },
    _dark: { bg: 'gray.99' },
    marginRight: 'var(--right-sidebar-width, 200px)',
  },
  Logo: {
    display: { base: 'block', sm: 'block', md: 'none', lg: 'none' },
  },
  LogoImg: {
    w: '32px',
    h: '32px',
  },
  BaseHeaderLeft: {
    flexDirection: 'row',
    height: '100%',
    fontSize: '20px',
    fontWeight: 'var(--cds-fontWeights-medium)',
    WebkitBoxAlign: 'center',
    alignItems: 'center',
    flexShrink: '0',
    paddingRight: '16px',
    marginBottom: '5px',
    display: { base: 'none', sm: 'none', md: 'block', lg: 'block' },
  },
  BaseHeaderCenter: {
    display: 'flex',
    flexDirection: 'row',
    height: '100%',
    overflowX: 'auto',
    whiteSpace: 'nowrap',
  },
  BaseHeaderRight: {
    display: 'flex',
    flexDirection: 'row',
    height: '100%',
    flexShrink: '0',
  },
  BadgeBtn: {
    position: 'absolute',
    width: '10px',
    height: '10px',
    top: '5px',
    right: '5px',
    backgroundColor: '#cf202f',
    borderRadius: '100%',
  },
  Transition: {
    transition: 'var(--sidebar-transition)',
  },
  Avatar: {
    display: 'block',
    width: '50px',
    height: '50px',
    borderRadius: '50%',
  },
  Level: {
    position: 'absolute',
    top: '38px',
    left: '2px',
    color: '#000',
    background: 'rgba(255, 175, 0)',
    borderRadius: '6px',
    width: '46px',
    textAlign: 'center',
    fontWeight: 600,
  },
};

export default ({user, account}: any) => {
  const { snap } = useACZState();
  const location = useLocation();
  const navigate = useNavigate();
  const [getPageName, setPageName] = useState(
    location.pathname.replace('/home/', ''),
  );
  const intl = useIntl();
  
  
  return (
    <Flex>
      This is header
    </Flex>
  );
};
