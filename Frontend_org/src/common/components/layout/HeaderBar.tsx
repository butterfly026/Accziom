import React, { useEffect, useState } from 'react';
import { useIntl } from 'react-intl';


import { Box, Flex, Image, Input } from '@chakra-ui/react';
import { NAVBAR_HEIGHT } from '@common/consts/globals';
import { Link } from 'react-router-dom';
import ACZLogo from '@assets/images/logo.svg';
import { SearchInput } from '../inputs/SearchInput';
import { useDispatch, useSelector } from '@common/store';
import { setSearchInfo } from '@common/slices/user';

export default ({ user, account }: any) => {

  const intl = useIntl();
  const dispatch = useDispatch();
  const { userInfo, inviteInfo, searchInfo, isSearching } = useSelector((state) => state.user);
  const handleSearch = async (q: string): Promise<void> => {
    // searchApi.current?.onSearch?.(q);
  };
  useEffect(() => {
    dispatch(setSearchInfo({
      hasButton: true,
      placeHolder: 'Business Information ...'
    }));
  }, []);
  return (
    <Flex>
      <Box
        w='full'
        sx={{
          height: NAVBAR_HEIGHT + 'px',
          display: 'flex',
          alignItems: 'center',
          px: {
            sm: '70px',
            md: '70px',
            lg: 'calc(1.5% + 70px)',
            xl: 'calc(1.5% + 70px)'
          }
        }}
      >
        <Link to='/'>
          <Image
            src={ACZLogo}
            alt='AIEarn Logo'
            height={4}
          />
        </Link>
        <SearchInput
          placeholder={searchInfo?.placeHolder ? searchInfo.placeHolder : ''}
          hasButton={!!searchInfo?.hasButton}
          onSearch={handleSearch}
          isSearching={isSearching}
          disabled={false}
        />
        <Box flexGrow={1} />
        
      </Box>

    </Flex>
  );
};
