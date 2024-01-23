import EthBadge from '@assets/images/eth-logo.svg';
import PolygonBadge from '@assets/images/matic-logo.svg';
import {
  ChevronDownIcon,
  EmailIcon,
  ChatIcon,
  InfoOutlineIcon,
} from '@chakra-ui/icons';
import {
  Box,
  Select,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  HStack,
  Image,
  Input,
  Text,
  useColorMode,
  useDisclosure,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
  PopoverHeader,
  PopoverCloseButton,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  Heading,
  IconButton,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';
import { useChainModal } from '@rainbow-me/rainbowkit';
import React, { RefObject, useEffect, useState, useCallback } from 'react';
import data from '@emoji-mart/data';
import Picker from '@emoji-mart/react';
import { FormattedMessage, useIntl } from 'react-intl';
import { useLocation, useNavigate } from 'react-router';
// import { useNetwork } from 'wagmi';
import {
  MyDivider,
  MyIcon,
  MyIconButton,
  PrimaryButton,
  getMyHostname,
  request,
  stateActions,
  useMyState,
  useMyToast,
} from '../../common';
import BroadcastMsgModal from '@components/Modals/BroadcastMsgModal';
import AiTradeSwiper from './AiTradeSwiper';
import HeaderAvatar from './HeaderAvatar';
import MyRedEnvelope from './RedEnvelope';
import MyRefer from './Refer';
import PkLotteryAcceptModal from '@components/Modals/PkLotteryAcceptModal';
import useWebSocket from 'react-use-websocket';
import message from '@pages/home/notifications/icon/message';

interface MessageData {
  id: number;
  name: string;
  text: string;
  level: string;
  time: string;
  avatar: string;
}

const isImgUrl = (url: string) => {
  const regex = '^https://.*.(jpg|jpeg|png|gif|bmp|tiff|webp)$';
  return new RegExp(regex).test(url);
};

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
function DrawerExample({
  isDrawerOpen: isOpen,
  onDrawerOpen: onOpen,
  onDrawerClose: onClose,
}: {
  isDrawerOpen: boolean;
  onDrawerOpen: () => void;
  onDrawerClose: () => void;
}) {
  // const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef: RefObject<HTMLButtonElement> = React.useRef(null);

  const [input, setInput] = useState('');
  const [peopleVisible, setPeopleVisible] = useState(false);
  const [peopleList, setPeopleList] = useState<{ id: number; name: string }[]>(
    [],
  );
  const onCheckPeople = useCallback((name: string) => {
    setInput((val) => val + name + ' ');
    setPeopleVisible(false);
  }, []);
  useEffect(() => {
    if (input.slice(-1) === '@') {
      console.log('input: ', input);
      setPeopleVisible(true);
    }
  }, [input]);

  const handleSubmit = useCallback(() => {
    console.log('handleSubmit: ', handleSubmit);
  }, []);

  const [messages, setMessages] = useState<MessageData[]>([]);

  useEffect(() => {
    const mock = [
      {
        id: 1,
        name: 'N8ba1113',
        text: '@Scroogedmanx Sup fuzz',
        level: 'V40',
        time: '10:56',
        avatar: '',
      },
      {
        id: 2,
        name: 'SoakedInCider',
        text: '@SmokeyMacPot me?',
        level: 'V5',
        time: '10:56',
        avatar: '',
      },
      {
        id: 3,
        name: 'SoakedInCider',
        text: 'https://pic3.zhimg.com/v2-ae7a7f95ddce3e2a1ba28015c7e5d71c_b.jpg',
        level: 'V25',
        time: '10:56',
        avatar: '',
      },
    ];
    setMessages(mock);
    setPeopleList([
      { id: 1, name: 'LegendsWins' },
      { id: 2, name: 'Scroogedmanlx' },
      { id: 3, name: 'BitsThisThatGuy' },
    ]);
  }, []);

  const Message = ({ item }: { item: MessageData }) => {
    const { text, name, time, level } = item || {};
    const sender = 'user';
    return (
      <Box
        w='fit-content'
        borderRadius='lg'
        display='flex'
        mb={4}
        alignSelf={sender === 'user' ? 'flex-end' : 'flex-start'}
      >
        <div style={{ position: 'relative', width: '50px' }}>
          <img style={styles.Avatar} src='/img/default-avatar.svg' alt='' />
          <Text style={styles.Level as React.CSSProperties} fontSize='md'>
            {level}
          </Text>
        </div>
        <div style={{ flex: '1', paddingLeft: '6px' }}>
          <Text fontSize='16px' color={'rgba(99,106,105)'}>
            {name}
            <Text
              display='inline-block'
              paddingLeft='10px'
              fontSize='12px'
              color={'rgba(100, 100, 92)'}
            >
              {time}
            </Text>
          </Text>
          <Box bg={'rgba(28, 28, 32)'} p={3} w='fit-content' borderRadius='lg'>
            {isImgUrl(text) ? (
              <img
                style={{ display: 'block', width: '100%' }}
                src={text}
                alt=''
              />
            ) : (
              text
            )}
          </Box>
        </div>
      </Box>
    );
  };

  // image upload
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<EventTarget>) => {
    const fileInput = e.target as HTMLInputElement;
    const file = fileInput.files?.[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
      };

      reader.readAsDataURL(file);
    }
  };
  const addEmoji = (emoji: { native: string }) => {
    setInput((val) => val + emoji.native);
  };


  return (
    <>
      {/* <Button ref={btnRef} colorScheme='teal' rounded='full' onClick={onOpen}>
        <MyIconButton link='/home/notifications'>
          <ChatIcon ></ChatIcon>
        </MyIconButton>
        <ChatIcon ></ChatIcon>
      </Button> */}
      <MyIconButton onClick={onOpen}>
        <ChatIcon></ChatIcon>
      </MyIconButton>
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            Chat
            <InfoOutlineIcon
              position='absolute'
              right='44px'
              top='16px'
              fontSize='16px'
            />
          </DrawerHeader>
          <DrawerBody pl={4} pr={3}>
            <Box
              display='flex'
              flexDirection='column'
              overflowY='auto'
              maxHeight='80vh'
            >
              {messages.map((message: any, index: number) => (
                <Message key={index} item={message} />
              ))}
            </Box>
          </DrawerBody>

          <DrawerFooter display='block' pl={4} pr={3} bg='rgba(33,33,40)'>
            <HStack pt={1} pb={1} mb={3}>
              <InputGroup bg='rgba(29,30,35)' borderRadius='4px'>
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder='Your Message'
                  border='none'
                />
                <InputRightElement w='72px'>
                  <Input
                    type='file'
                    accept='image/*'
                    onChange={handleImageChange}
                    display='none'
                    id='file-upload'
                  />
                  <Box textAlign='center'>
                    <label htmlFor='file-upload'>
                      <MyIcon w='28px' fontSize='16px' icon='' />
                    </label>
                  </Box>
                  <Popover placement='top-start'>
                    <PopoverTrigger>
                      <MyIcon w='28px' fontSize='16px' icon='' />
                    </PopoverTrigger>
                    <PopoverContent inset='-474px auto auto -166px' w='296px'>
                      <PopoverArrow />
                      <PopoverBody>
                        <Picker
                          style={{ width: '296px' }}
                          data={data}
                          onEmojiSelect={addEmoji}
                        />
                      </PopoverBody>
                    </PopoverContent>
                  </Popover>
                  {/* <Popover strategy='fixed'>
                    <PopoverTrigger>
                      <MyIcon w='28px' fontSize='16px' icon='' />
                    </PopoverTrigger>
                    <PopoverContent w='296px' bottom='-92px'>
                      <PopoverArrow />
                      <PopoverBody>
                        <Picker
                          style={{ width: '320px' }}
                          data={data}
                          onEmojiSelect={addEmoji}
                        />
                      </PopoverBody>
                    </PopoverContent>
                  </Popover> */}
                </InputRightElement>
              </InputGroup>
              <IconButton
                width='80px'
                variant='outline'
                colorScheme='teal'
                aria-label='Send email'
                icon={<ChatIcon />}
                onClick={onSendMessage}
              />
            </HStack>

            <HStack>
              <Select variant='filled' w='140px'>
                <option value='English'>English</option>
                <option value='French'>French</option>
              </Select>
            </HStack>
          </DrawerFooter>
        </DrawerContent>
        <Modal isOpen={peopleVisible} onClose={() => setPeopleVisible(false)}>
          <ModalOverlay />
          <ModalContent
            position='absolute'
            right='0'
            bottom='48px'
            width='322px'
          >
            <ModalBody>
              {peopleList?.map(({ id, name }) => (
                <Heading
                  key={id}
                  as='h4'
                  size='md'
                  onClick={() => onCheckPeople(name)}
                >
                  {name}
                </Heading>
              ))}
            </ModalBody>
          </ModalContent>
        </Modal>
      </Drawer>
    </>
  );
}
export default ({
  user,
  account,
  onSidebarChange,
  isDrawerOpen,
  onDrawerOpen,
  onDrawerClose,
}: any) => {
  const { showRes, showError, showSuccess } = useMyToast();
  const { snap } = useMyState();
  const [get_has_new_message, sethas_new_message] = useState(false);
  const [getBroadcastMsgs, setBroadcastMsgs] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  const [getPageName, setPageName] = useState(
    location.pathname.replace('/home/', ''),
  );
  const { toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const intl = useIntl();

  const { openChainModal } = useChainModal();
  const WSS_FEED_URL = `wss://ws.${getMyHostname()}/ws/lottery`;
  const { sendJsonMessage, getWebSocket } = useWebSocket(WSS_FEED_URL, {
    onOpen: () => { },
    onClose: () => { },
    shouldReconnect: (closeEvent) => true,
    onMessage: (event) => processMessages(event),
  });

  const processMessages = (event: MessageEvent<any>) => {
    // parsing input socket data from backend
    const sktData = JSON.parse(event.data);
    if (sktData.type == 'MyGuessResult') {
      if (
        sktData.data?.gameMode == 'pk' &&
        sktData.data?.userid == snap.session.user?.id
      ) {
        stateActions.getMyPkInfo();
      }
    }
  };
  // const { chain } = useNetwork();
  // const [source, setSource] = useState(
  //   chain?.name === 'Ethereum' ? EthBadge : PolygonBadge,
  // );
  // useEffect(() => {
  //   const changeSource = chain?.name === 'Ethereum' ? EthBadge : PolygonBadge;
  //   if (changeSource !== source) {
  //     setSource(changeSource);
  //     setTimeout(() => {
  //       window.location.reload();
  //     }, 200);
  //   }
  // }, [chain]);
  const [source, setSource] = useState(PolygonBadge);

  const titleCase = (str: string) => {
    let tmp = str.toLowerCase();
    tmp = tmp.split('/')[0];
    tmp = tmp.charAt(0).toUpperCase() + tmp.slice(1);
    // console.log("tmp", str, tmp);
    return intl.formatMessage({ id: 'home.sidebar.' + tmp });
  };

  useEffect(() => {
    setPageName(location.pathname.replace('/home/', ''));
    if (snap.session.user?.id) {
      sendJsonMessage({
        userid: snap.session.user.id.toString(),
        url: location.pathname,
      });
    }
  }, [location.pathname]);

  useEffect(() => {
    if (snap.session.user?.id) {
      sendJsonMessage({
        userid: snap.session.user.id.toString(),
      });
    }
  }, [snap.session.user?.id]);

  const methods = {
    onSetTimeout: () => {
      setTimeout(() => {
        stateActions.me();
        methods?.onSetTimeout();
      }, 300000);
    },
  };

  useEffect(() => {
    const changeSource = PolygonBadge;
    if (changeSource !== source) {
      setSource(changeSource);
      setTimeout(() => {
        window.location.reload();
      }, 200);
    }
    methods?.onSetTimeout();
  }, []);


  function handleToggleSidebar() {
    if (isDrawerOpen) {
      onDrawerClose();
    } else {
      onDrawerOpen();
    }
  }
  return (
    <Flex
      sx={{
        ...(isDrawerOpen
          ? styles.BaseHeaderWithSidebarOpen
          : styles.BaseHeader),
        ...styles.Transition,
      }}
    >
      <Flex sx={styles.BaseHeaderLeft}>{titleCase(getPageName)}</Flex>
      <Flex sx={styles.BaseHeaderCenter}></Flex>
      <Flex sx={styles.BaseHeaderRight}>
        <HStack spacing='5px'>
          <Flex animation='heartbeat 1.5s ease-in-out infinite both'>
            <PrimaryButton
              colorScheme='primary'
              onClick={() => {
                if (user?.first_show_card_at || user?.trailed_at) {
                  navigate('/home/aitrade');
                } else {
                  onOpen();
                }
              }}
            >
              <FormattedMessage
                id='text.AiTrade'
                values={{ name: 'AI Earn' }}
              />
            </PrimaryButton>
          </Flex>
          {/* <DrawerExample
            isDrawerOpen={isDrawerOpen}
            onDrawerOpen={onDrawerOpen}
            onDrawerClose={onDrawerClose}
          /> */}
          <MyIconButton link='/home/notifications'>
            <MyIcon w='40px' fontSize='16px' icon='' />
            {get_has_new_message ? <Flex sx={styles.BadgeBtn}></Flex> : ''}
          </MyIconButton>
          <Text
            display={{ base: 'block', sm: 'block', md: 'none', lg: 'none' }}
            as='a'
            href='https://direct.lc.chat/16095027/'
          >
            <MyIconButton>
              <MyIcon w='40px' fontSize='16px' icon='' />
            </MyIconButton>
          </Text>
          <Flex
            onClick={() => {
              onSidebarChange(1);
            }}
            sx={{
              display: { base: 'block', sm: 'block', md: 'none', lg: 'none' },
            }}
          >
            <MyIconButton>
              <MyIcon w='40px' fontSize='16px' icon='' />
            </MyIconButton>
          </Flex>
          <HeaderAvatar account={account} user={user} />
        </HStack>
      </Flex>
      <AiTradeSwiper user={user} onModalClose={onClose} isModalOpen={isOpen} />
      <BroadcastMsgModal messages={getBroadcastMsgs} />
      <MyRefer />
      <MyRedEnvelope />
      <PkLotteryAcceptModal onCloseModal={() => { }} />
    </Flex>
  );
};
