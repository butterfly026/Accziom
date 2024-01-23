export const styles = {
  CDSProvider: { flex: '1 1 auto', display: 'flex' },
  Large: {
    w: '100%',
  },
  EmptyProvider: {},
  LayoutContainer: {
    display: 'flex',
    flex: '1 1 auto',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  LayoutDesktop: {
    display: 'flex',
    flex: '1 1 auto',
    flexDirection: 'column',
    minHeight: 'var(--full-view-height,100vh)',
  },
  LayoutDesktopContent: {
    display: 'flex',
    flex: '1 1 auto',
    flexDirection: 'column',
    position: 'relative',
    '--sidebar-transition': 'all 200ms linear',
    '--right-sidebar-width': '350px'
  },
  RightSidebar: {
    position: 'fixed',
    right: '0',
    display: 'flex',
    zIndex: 100,
    width: 'var(--right-sidebar-width, 200px)',
    '@media screen and (max-width: 800px)': {
      width: '100%'
    }
  },
  RightSidebarClose: {
    width: 0,
    heigh: '100vh',
    display: 'flex',
    overflow: 'hidden',
    position: 'fixed',
    right: 0,
    zIndex: 100,
  },
  RightSidebarContent: {
    flex: '1',
  },
  RightSidebarResizer: {
    position: 'absolute',
    width: '6px',
    cursor: 'col-resize',
    resize: 'horizontal',
    height: '100vh',
    borderLeft: '1px solid var(--cds-colors-chakra-border-color)',
  },

  MainContentFlex: {
    display: 'flex',
    flex: '1 1 auto',
    flexDirection: 'column',
    marginLeft: { base: '0', sm: '0', md: '87px', lg: '240px' },
    minHeight: 'var(--full-view-height,100vh)',
  },
  MainContentFlex2: {
    display: 'flex',
    flex: '1 1 auto',
    flexDirection: 'column',
    marginLeft: { base: '0', sm: '0', md: '87px', lg: '240px' },
    minHeight: 'var(--full-view-height,100vh)',
    marginRight: 'var(--right-sidebar-width, 200px)',
  },
  LayoutBackdrop: {
    position: 'absolute',
    zIndex: '-1',
    inset: '0px',
    background: 'rgba(50, 53, 61, 0.33)',
    opacity: '0',
    transition: 'opacity 0.5s ease 0s, z-index 0.5s ease 0s',
    pointerEvents: 'none',
  },
  HeaderBlank: {
    display: 'flex',
    flexDirection: 'row',
    transition: 'height 350ms ease 0s',
    height: '68px',
  },
  HeaderBlank2: {
    display: 'flex',
    flexDirection: 'row',
    transition: 'height 350ms ease 0s',
    height: '68px',
    marginRight: '320px', //
  },
  MainContentWrapper: {
    display: 'flex',
    flex: '1 1 auto',
    WebkitBoxAlign: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    position: 'relative',
    // border: '2px solid red',
    // padding: { base: "0", sm: "0", md: "0px 24px", lg: "0px 24px" },
    background: 'rgba(0,62,193,0.03)',
  },
  StyledContent: {
    display: 'flex',
    flexDirection: 'column',
    flex: '0 1 auto',
    margin: '0px',
    // padding: "24px 0px",
    height: '100%',
    width: '100%',
    position: 'relative',
    // maxWidth: "1450px",
  },
  MainContent: {
    position: 'relative',
    flex: '1 1 0%',
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    transition: 'none 0s ease 0s',
    opacity: '1',
  },
  Transition: {
    transition: 'var(--sidebar-transition)',
  },
  SidebarTransition: {
    transition: 'var(--sidebar-transition)',
  },
};
