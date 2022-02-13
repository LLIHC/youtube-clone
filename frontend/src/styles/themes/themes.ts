import { createTheme } from '@mui/material/styles';
import responsiveFontSizes from '@mui/material/styles/responsiveFontSizes';

import typography from './typography';

export default responsiveFontSizes(createTheme({ typography }));
