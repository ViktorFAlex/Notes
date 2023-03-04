import { createContext } from 'react';
import { ApiContextProps, ThemeContextProps } from '../types/interfaces';

export const ThemeContext = createContext<ThemeContextProps>({} as ThemeContextProps);

export const AppApiContext = createContext<ApiContextProps>({} as ApiContextProps);
