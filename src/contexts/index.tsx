import { createContext } from 'react';
import { ApiContextProps, ThemeContextProps, TextContextProps } from '../types/interfaces';

export const ThemeContext = createContext<ThemeContextProps>({} as ThemeContextProps);

export const AppApiContext = createContext<ApiContextProps>({} as ApiContextProps);

export const TextContext = createContext<TextContextProps>({} as TextContextProps);
