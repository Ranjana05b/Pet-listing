import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import ErrorBoundary from './components/ErrorBoundary';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';

// Get the root element from the HTML
const container = document.getElementById('root');

// Create a root using the createRoot API
const root = createRoot(container);

// Render the app inside the ErrorBoundary
root.render(
  <React.StrictMode>
    <ErrorBoundary>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
    </ErrorBoundary>
  </React.StrictMode>
);
