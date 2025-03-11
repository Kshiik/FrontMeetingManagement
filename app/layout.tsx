"use client";

import { ThemeProvider } from '@mui/material/styles';
import theme from '../src/styles/theme';
import '../src/styles/global.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body>
        <ThemeProvider theme={theme}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}