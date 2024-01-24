import { Box, CircularProgress, Input } from '@chakra-ui/react';
import { BiSearch } from 'react-icons/bi';
import { BACKGROUND_BTN_ACTIVE_COLOR, BACKGROUND_DEEP, PAPER_COLOR } from '@common/consts/globals';
import { setQuery } from '@common/slices/user';
import { AppDispatch, AppThunk, useDispatch, useSelector } from '@common/store';
import { FC, useState } from 'react';

const styles = {
  Input: {
    fontSize: 15,
    backgroundColor: 'background.paper',
    borderRadius: '3px',
    height: '39px',
    
  },
  SearchButtonRegion: {
    position: 'absolute',
    zIndex: 1000,
    right: 0,
    top: 0,
    width: '43px',
    height: '39px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  SearchButton: {
    width: '37px',
    height: '32px',
    borderRadius: '2px',
    color: PAPER_COLOR,
    _hover: {
      backgroundColor: BACKGROUND_DEEP
    },
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: '.3s',
  }
}

export const SearchInput: FC<{
  placeholder?: string;
  onSearch: (query: string) => void;
  hasButton: boolean;
  isSearching?: boolean;
  disabled?: boolean;
}> = ({
  placeholder,
  onSearch,
  hasButton,
  isSearching,
  disabled
}) => {
    const [isFocused, setFocused] = useState<boolean>(false);
    const { query } = useSelector((state) => state.user);
    const dispatch = useDispatch();

    return (
      <Box
        sx={{
          flexGrow: 1,
          position: 'relative',
          pl: 3
        }}
      >
        <Box
          sx={{
            position: 'relative',
            transition: '.3s',
            transitionDelay: '.2s',
            width: isFocused ? '100%' : '60%'
          }}
        >
          <Input
            w='full'
            onFocus={() => setFocused(true)}
            onBlur={() => {
              setFocused(false);
            }}
            sx={{
              ...styles.Input,
              ...(hasButton && { pr: 4 })
            }}
            _hover={{ borderColor: 'gray.500' }} // Set the hover border color            
            onChange={(e) => {
              dispatch(setQuery(e.target.value));
              if (!hasButton) onSearch(e.target.value);
            }}
            onKeyDown={async (e) => {
              if ((e.code === 'Enter' || e.code === 'NumpadEnter')) {
                onSearch(query);
              }
            }}
            placeholder={disabled ? '' : placeholder}
            value={query}
            size="md"
            disabled={isSearching || disabled}
          />
          {!disabled && hasButton && (
            <Box
              sx={styles.SearchButtonRegion}
            >
              <Box
                sx={{
                  ...styles.SearchButton,
                  backgroundColor: isSearching ? 'transparent' : BACKGROUND_BTN_ACTIVE_COLOR,
                  opacity: isSearching || isFocused ? 1 : 0.3
                }}
                onClick={() => {
                  if (!isSearching) onSearch(query);
                }}
              >
                {isSearching ? (
                  <CircularProgress
                    size={16}
                  />
                ) : (
                  <BiSearch
                    style={{
                      width: 18,
                      height: 18
                    }}
                  />
                )}
              </Box>
            </Box>
          )}
        </Box>
      </Box>
    );
  };


