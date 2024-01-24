import SearchContext from '@common/contexts/SearchContext';
import { useContext } from 'react';

const useSearch = () => useContext(SearchContext);

export default useSearch;
