import SettingsContext, { SettingsContextValue } from '@common/contexts/SettingsContext';
import { useContext } from 'react';

const useSettings = (): SettingsContextValue => useContext(SettingsContext);

export default useSettings;
