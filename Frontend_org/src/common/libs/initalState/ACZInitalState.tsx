import { useColorMode } from '@chakra-ui/react'
import { useEffect } from 'react'
import { Outlet, useSearchParams } from 'react-router-dom'
import { stateActions, useMyState } from '../..'

export function ACZInitalState() {
  const { snap } = useMyState()
  const { colorMode, toggleColorMode } = useColorMode()

  // inviteCode
  const [searchParams] = useSearchParams()
  // useEffect(() => {
  //   var inviteCode = searchParams.get("invite_code");
  //   if (inviteCode) stateActions.setInviteCode(inviteCode);
  // }, []);

  // colorMode
  useEffect(() => {
    var color = searchParams.get('theme')
    var colorMode = localStorage.getItem('chakra-ui-color-mode')
    if (color) {
      // console.log(color, colorMode);
      if (color !== colorMode) toggleColorMode()
    }
  }, [colorMode])

  useEffect(() => {

    if (!snap.storage.token && location.pathname !== '/resetPassword') {
      stateActions.loginFailed()
    } else {
      stateActions.loginSuccess()
    }
  }, [snap.storage.isLogin])

  if (snap.session.ready) return <Outlet />  
}
