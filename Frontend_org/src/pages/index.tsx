import { Box, Flex, useColorMode, useDisclosure } from '@chakra-ui/react';
import {
  MouseEventHandler,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '@common/components/layout/Footer';
import HeaderBar from '@common/components/layout/HeaderBar';
import Sidebar from '@common/components/layout/Sidebar';
import { styles } from '@common/components/layout/styles/layout.styles';
import { useACZState } from '@common/state';

export default function layout() {
  const [getSidebarStatus, setSidebarStatus] = useState(1);
  const { snap } = useACZState();
  const {
    isOpen: isDrawerOpen,
    onOpen: onDrawerOpen,
    onClose: onDrawerClose,
  } = useDisclosure();
  useEffect(() => {
    const widget = document.getElementById(
      'chat-widget-container',
    ) as HTMLElement;

    // const mainArea = document.getElementById('main-area');
    const sidebar = document.querySelector('#right-sidebar') as HTMLDivElement;
    if (!widget || !sidebar) return;

    widget.style.transition = 'right 200ms linear';
    widget.style.right = sidebar.offsetWidth + 'px';

    const interval = setInterval(() => {
      if (sidebar && widget.style.right !== sidebar.offsetWidth + 'px') {
        widget.style.right = sidebar.offsetWidth + 'px';
      }
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, [isDrawerOpen]);

  const sidebarRef = useRef(null);
  const layoutDesktopContentRef = useRef(null);
  const [isResizing, setIsResizing] = useState(false);
  // const [sidebarWidth, setSidebarWidth] = useState(200);



  const { colorMode } = useColorMode();
  return (
    <Flex>
      <Box
        id='main-area'
        sx={{
          ...(isDrawerOpen
            ? styles.MainContentFlex2
            : styles.MainContentFlex),
          ...styles.Transition,
        }}
      >
        This is main area
      </Box>

    </Flex>
  );
}
