import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import EditorBar from './EditorBar/EditorBar';
import EditorTextField from './EditorTextField/EditorTextField';
import useAppApiContext from '../../hooks/useAppApiContext';
import { Notes } from '../../types/interfaces';

const Editor = (): JSX.Element => {
  const [items, setItems] = useState<Notes[]>([]);
  const { getNotes } = useAppApiContext();
  useEffect(() => {
    const getStore = async () => {
      const response = await getNotes();
      setItems(response);
    };
    getStore();
  }, []);

  return (
    <Box sx={{ flex: '1', backgroundColor: '#1e1e1e', height: '100%' }}>
      <EditorBar />
      {!!items.length && <EditorTextField />}
    </Box>
  );
};

export default Editor;
