import { Box, Flex, useColorMode, useDisclosure } from '@chakra-ui/react';
import {
  MouseEventHandler,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { Outlet } from 'react-router-dom';
import { MyTransitionerContainer, useMyState } from '@/common';
import Footer from './layout/Footer';
import HeaderBar from './layout/HeaderBar';
import Sidebar from './layout/Sidebar';
import { styles } from './layout.styles';

export default function layout() {
  const [getSidebarStatus, setSidebarStatus] = useState(1);
  const { snap } = useMyState();
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

  const startResizing = useCallback<MouseEventHandler<HTMLDivElement>>(
    (mouseDownEvent) => {
      (layoutDesktopContentRef.current! as HTMLDivElement).style.setProperty(
        '--sidebar-transition',
        'none',
      );
      setIsResizing(true);
    },
    [],
  );

  const stopResizing = useCallback(() => {
    setIsResizing(false);
    (layoutDesktopContentRef.current! as HTMLDivElement).style.setProperty(
      '--sidebar-transition',
      'all 200ms linear',
    );
  }, []);

  const resize = useCallback(
    (mouseMoveEvent: MouseEvent) => {
      if (isResizing) {
        const sidebarWidth =
          document.documentElement.clientWidth - mouseMoveEvent.clientX;
        (layoutDesktopContentRef.current! as HTMLDivElement).style.setProperty(
          '--right-sidebar-width',
          `${sidebarWidth}px`,
        );
      }
    },
    [isResizing],
  );

  useEffect(() => {
    window.addEventListener('mousemove', resize);
    window.addEventListener('mouseup', stopResizing);
    return () => {
      window.removeEventListener('mousemove', resize);
      window.removeEventListener('mouseup', stopResizing);
    };
  }, [resize, stopResizing]);
  const { colorMode } = useColorMode();
  return (
    <Flex sx={styles.CDSProvider}>
      <Box sx={styles.Large}>
        <Box sx={styles.LayoutContainer}>
          <Flex sx={styles.LayoutDesktop}>
            {snap?.session?.user?.status == 'Enable' ? (
              <Box
                sx={styles.LayoutDesktopContent}
                ref={layoutDesktopContentRef}
              >
                <MyTransitionerContainer>
                  <Sidebar
                    showSidebar={getSidebarStatus}
                    user={snap.session.user}
                  />
                </MyTransitionerContainer>
                <Box
                  id='main-area'
                  sx={{
                    ...(isDrawerOpen
                      ? styles.MainContentFlex2
                      : styles.MainContentFlex),
                    ...styles.Transition,
                  }}
                >
                  <HeaderBar
                    user={snap.session.user}
                    account={snap.storage}
                    onSidebarChange={() => {
                      setSidebarStatus(getSidebarStatus + 1);
                    }}
                  />
                  <Flex sx={styles.MainContentWrapper}>
                    <Flex sx={styles.StyledContent}>
                      <Flex sx={styles.MainContent}>
                        <Outlet />
                      </Flex>
                    </Flex>
                  </Flex>
                  <Footer />
                </Box>
               
              </Box>
            ) : (
              <Flex/>
            )}
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
}
