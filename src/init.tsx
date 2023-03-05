import React from 'react';
import ThemeProvider from './components/Providers/ThemeProvider/ThemeProvider';
import AppApiProvider from './components/Providers/AppApiProvider/AppApiProvider';
import TextProvider from './components/Providers/TextProvider/TextProvider';
import App from './components/App/App';

const init = async () => {
  return (
    <AppApiProvider>
      <ThemeProvider>
        <TextProvider>
          <React.StrictMode>
            <App />
          </React.StrictMode>
        </TextProvider>
      </ThemeProvider>
    </AppApiProvider>
  );
};

export default init;
