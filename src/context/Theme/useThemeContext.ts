import { useContext } from 'react';

import ThemeContext from './context';

const useThemeContext = () => useContext(ThemeContext);

export default useThemeContext;
