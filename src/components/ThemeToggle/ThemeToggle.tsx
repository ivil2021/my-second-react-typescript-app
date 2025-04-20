import React, { useState, useMemo } from 'react';
import { ThemeProvider } from '@emotion/react';
import { AppContainer, ToggleContainer, ToggleInput } from './index.styles';

const lightTheme = {
  background: '#ffffff',
  color: '#000000',
};

const darkTheme = {
  background: '#333333',
  color: '#ffffff',
};

export function ThemeToggle () {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const theme = useMemo(() => (isDarkMode ? darkTheme : lightTheme), [isDarkMode]);

  const toggleTheme = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsDarkMode(event.target.checked);
  };

  return (
    <ThemeProvider theme={theme}>
      <AppContainer theme={theme}>
        <ToggleContainer>
          <ToggleInput
            type="checkbox"
            checked={isDarkMode}
            onChange={toggleTheme}
            id="theme-toggle"
          />
          <label htmlFor="theme-toggle">
            Переключить на {isDarkMode ? 'светлую' : 'темную'} тему
          </label>
        </ToggleContainer>
      </AppContainer>
    </ThemeProvider>
  );
};
