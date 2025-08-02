import React, { useState } from 'react';
import { ThemeProvider, CssBaseline, IconButton } from '@mui/material';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { getTheme } from './theme';
import HomePage from './pages/HomePages';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

const queryClient = new QueryClient();

const App: React.FC = () => {
  const [mode, setMode] = useState<'light' | 'dark'>('light');

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={getTheme(mode)}>
        <CssBaseline />
        <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '1rem' }}>
          <IconButton onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}>
            {mode === 'light' ? <Brightness4Icon /> : <Brightness7Icon />}
          </IconButton>
        </div>
        <HomePage />
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
