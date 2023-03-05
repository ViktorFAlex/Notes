import { useState, useMemo, useEffect } from 'react';
import { ThemeContext } from '../../../contexts';
import { Notes } from '../../../types/interfaces';
import useAppApiContext from '../../../hooks/useAppApiContext';

const ContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [items, setItems] = useState<Notes[]>([]);
  const [currentNote, setCurrentNote] = useState(1);
  const { getNotes } = useAppApiContext();
  useEffect(() => {
    const getStore = async () => {
      const response = await getNotes();
      setItems(response);
    };
    getStore();
  }, []);
  const defaultMode = 'table';
  const defaultFormat = 'view';
  const [mode, setMode] = useState({ type: defaultMode, format: defaultFormat });
  const changeMode = (type: string, format: string) => setMode({ type, format });
  const handlers = useMemo(
    () => ({ mode, changeMode, items, setItems, currentNote, setCurrentNote }),
    [setMode, items, mode],
  );

  return <ThemeContext.Provider value={handlers}>{children}</ThemeContext.Provider>;
};

export default ContextProvider;
