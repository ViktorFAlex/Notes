import { AppBar, Toolbar, InputBase, Box } from '@mui/material';
import NoteAltOutlinedIcon from '@mui/icons-material/NoteAltOutlined';
import TextFormatOutlinedIcon from '@mui/icons-material/TextFormatOutlined';
import SearchIcon from '@mui/icons-material/Search';
import StyledButton from '../../StyledButton/StyledButton';
import useAppApiContext from '../../../hooks/useAppApiContext';
import useThemeContext from '../../../hooks/useThemeContext';
import useTextContext from '../../../hooks/useTextContext';
import { Notes } from '../../../types/interfaces';
import { EditorFieldProps } from '../../../types/types';

const EditorBar = ({ setNote }: EditorFieldProps): JSX.Element => {
  const { items, currentNote } = useThemeContext();
  const { putNote } = useAppApiContext();
  const { makeItalic, textFormat } = useTextContext();
  const currentText = items.find((item) => item.id === currentNote) as Notes;
  const noted = {
    date: new Date(),
    value: '## Vasya loves vasya\nPetya is not\nHe love Maria',
  };

  const handleClick = () => {
    putNote(noted);
  };

  const handleFormatting = () => {
    const { id, value } = currentText;
    const italicized = makeItalic(value);
    console.log(value, italicized);
    const date = new Date();
    const newNote = { id, value: italicized, date };
    putNote(newNote);
    setNote({ value: italicized, date });
  };

  return (
    <AppBar
      elevation={0}
      component='div'
      sx={{ backgroundColor: '#1e2323', position: 'sticky', height: '10%' }}
    >
      <Toolbar disableGutters sx={{ alignItems: 'center' }}>
        <StyledButton sx={{ marginLeft: '10px' }} onClick={handleClick}>
          <NoteAltOutlinedIcon sx={{ color: '#8f8f94', width: '30px' }} />
        </StyledButton>
        <StyledButton
          sx={{ marginLeft: '10%' }}
          onClick={handleFormatting}
          disabled={textFormat.italic}
        >
          <TextFormatOutlinedIcon sx={{ color: '#8f8f94', width: '30px' }} />
        </StyledButton>
        <Box
          color='transparent'
          sx={{
            height: '30px',
            border: '1px solid rgba(131,132,136, 0.3)',
            borderRadius: '6px',
            marginLeft: 'auto',
            marginRight: '15px',
            paddingLeft: '0.3rem',
          }}
        >
          <InputBase
            placeholder='Поиск'
            sx={{ color: '#8f8f94', fontWeight: '700' }}
            startAdornment={<SearchIcon fontSize='small' sx={{ marginRight: '5px' }} />}
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default EditorBar;
