import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import { ClickAwayListener } from '@mui/base';
import EditorBar from './EditorBar/EditorBar';
import EditorTextField from './EditorTextField/EditorTextField';
import useAppApiContext from '../../hooks/useAppApiContext';
import { Notes } from '../../types/interfaces';
import { styled } from '@mui/material/styles';
import useThemeContext from '../../hooks/useThemeContext';

const StyledScrollBox = styled(Box)({
  flex: '1',
  backgroundColor: '#1e1e1e',
  height: '100%',
  overflowY: 'auto',
});

type State = { value: string; date: Date };

const Editor = (): JSX.Element => {
  const { currentNote, mode, changeMode } = useThemeContext();
  const { getNote } = useAppApiContext();
  const [items, setItems] = useState<Notes[]>([]);
  const [note, setNote] = useState<State>({ value: '', date: new Date() });
  const { getNotes } = useAppApiContext();

  useEffect(() => {
    const getStore = async () => {
      const notes = await getNotes();
      setItems(notes);
    };
    getStore();
  }, []);

  useEffect(() => {
    const getCurrentNote = async () => {
      const current = await getNote(currentNote || 1);
      const { value, date } = current;
      setNote({ value, date });
    };
    getCurrentNote();
  }, []);

  return (
    <ClickAwayListener onClickAway={() => changeMode(mode.type, 'view')}>
      <StyledScrollBox
        onClick={() => changeMode(mode.type, 'edit')}
        sx={{
          '&::-webkit-scrollbar': { display: 'none' },
          '&': {
            msOverflowStyle: 'none',
            scrollbarWidth: 'none',
          },
        }}
      >
        <EditorBar note={note} setNote={setNote} />
        {!!items.length && <EditorTextField note={note} setNote={setNote} />}
      </StyledScrollBox>
    </ClickAwayListener>
  );
};

export default Editor;
