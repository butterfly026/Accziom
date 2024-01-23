import {
  useEffect,
  useState,
  useRef,
  useCallback,
  MouseEventHandler,
} from 'react';
import { request } from '../common/';

import PageFooter from './home/index/PageFooter';
import PageNav from './home/index/PageNav';
import PageOne from './home/index/PageOne';
import { Box, useColorMode, useDisclosure } from '@chakra-ui/react';
import { styles } from './home/layout.styles';

export default function index() {
  const sidebarRef = useRef(null);
  const layoutDesktopContentRef = useRef(null);
  const [isResizing, setIsResizing] = useState(false);
  const [res, setRes] = useState<any>([]);
  const [showLogin, setShowLogin] = useState(false);
  useEffect(() => {
    request('home/home', {}).then((res) => {
      setRes(res.data);
    });
  }, []);

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

  const {
    isOpen: isDrawerOpen,
    onOpen: onDrawerOpen,
    onClose: onDrawerClose,
  } = useDisclosure();
  useEffect(() => {
    const widget = document.getElementById(
      'chat-widget-container',
    ) as HTMLElement;

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

  const { colorMode } = useColorMode();
  const [showLoginModal, setShowLoginModal] = useState(false);
  return (
    <>
      <Box sx={styles.LayoutDesktopContent} ref={layoutDesktopContentRef}>
        <Box
          sx={{
            ...(isDrawerOpen ? styles.RightSidebar : styles.RightSidebarClose),
            ...styles.Transition,
            position: 'fixed',
            right: '0',
            zIndex: '3000',
            ...(colorMode === 'light'
              ? {
                  background: 'var(--cds-colors-gray-0, #fff)',
                }
              : { background: 'var(--cds-colors-black, #000)' }),
          }}
          id='right-sidebar'
          ref={sidebarRef}
        >
          <Box
            sx={styles.RightSidebarResizer}
            className='right-sidebar-resizer'
            onMouseDown={startResizing}
          />
        </Box>
      </Box>
      <PageNav
        isDrawerOpen={isDrawerOpen}
        onDrawerOpen={onDrawerOpen}
        onDrawerClose={onDrawerClose}
        showLogin={showLogin}
        onHideLogin={() => setShowLogin(false)}
      />
      <PageOne onShowLogin={() => setShowLogin(true)} />
      <PageFooter />
      {/* <PageFs /> */}
    </>
  );
}
