import { AppBar, Toolbar, IconButton, InputBase, Box, Typography } from '@mui/material';
import { useContext } from 'react';
import NoteAltOutlinedIcon from '@mui/icons-material/NoteAltOutlined';
import TextFormatOutlinedIcon from '@mui/icons-material/TextFormatOutlined';
import SearchIcon from '@mui/icons-material/Search';
import StyledButton from '../../StyledButton/StyledButton';
import { padding } from '@mui/system';
import useAppApiContext from '../../../hooks/useAppApiContext';

const EditorBar = (): JSX.Element => {
  const apiContext = useAppApiContext();
  const { putNote, getNotes } = apiContext;
  const note = {
    title: 'foldy',
    date: new Date(),
    message: 't<b>this is bold</b>est',
  };

  const handleClick = () => {
    putNote(note);
  };
  const get = () => {
    getNotes();
  };
  return (
    <AppBar
      elevation={0}
      component='div'
      sx={{ backgroundColor: '#1e2323', position: 'relative', height: '10%' }}
    >
      <Toolbar disableGutters sx={{ alignItems: 'center' }}>
        <StyledButton sx={{ marginLeft: '10px' }} onClick={handleClick}>
          <NoteAltOutlinedIcon sx={{ color: '#8f8f94', width: '30px' }} />
        </StyledButton>
        <StyledButton sx={{ marginLeft: '10%' }} onClick={get}>
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
