import React from 'react';
import ThemeProvider from './components/Providers/ThemeProvider/ThemeProvider';
import AppApiProvider from './components/Providers/AppApiProvider/AppApiProvider';
import App from './components/App/App';

const init = async () => {
  return (
    <AppApiProvider>
      <ThemeProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </ThemeProvider>
    </AppApiProvider>
  );
};

export default init;
