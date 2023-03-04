import { useState, useMemo, useEffect } from 'react';
import { ThemeContext } from '../../../contexts';
import { Notes } from '../../../types/interfaces';
import useAppApiContext from '../../../hooks/useAppApiContext';

const ContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [items, setItems] = useState<Notes[]>([]);
  const [currentNote, setCurrentNote] = useState(0);
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

  const handlers = useMemo(
    () => ({ setMode, items, setItems, currentNote, setCurrentNote }),
    [setMode, items],
  );

  return <ThemeContext.Provider value={handlers}>{children}</ThemeContext.Provider>;
};

export default ContextProvider;
