import { ThemeProvider } from 'styled-components';

import theme from '@/global/theme';

export const withTheme = (component: React.ReactNode) => (
  <ThemeProvider theme={theme}>{component}</ThemeProvider>
);
