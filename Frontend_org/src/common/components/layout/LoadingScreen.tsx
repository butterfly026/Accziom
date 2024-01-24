import { Flex, Image } from "@chakra-ui/react";
import ACZLogo from '@assets/images/logo.svg';
import { ThreeDots } from 'react-loader-spinner';
import { PRIMARY_COLOR } from "@common/consts/globals";
import './styles/loading.css';

export default ({ }: any) => {

  return <Flex
    sx={{
      height: '100vh',
      width: '100vw',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
    <Image
      src={ACZLogo}
      w={60}
      className='loading-logo'
    />
    <ThreeDots
      height={40}
      width={80}
      color={PRIMARY_COLOR} />
  </Flex>
};
