import { AppBar, Toolbar, Divider, IconButton, Typography } from '@mui/material';
import ListIcon from '@mui/icons-material/List';
import GridViewIcon from '@mui/icons-material/GridView';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import styles from './ListBar.module.css';
import { styled } from '@mui/material/styles';

const StyledButton = styled(IconButton)`
  outline: none;
  border-radius: 10px;
  padding: 4px;
  & {
  }
  &:hover {
    background-color: #57575c;
  }
  &: focus {
    outline: none;
  }
`;

const ListBar = (): JSX.Element => {
  return (
    <>
      <AppBar
        elevation={0}
        color='transparent'
        component='div'
        sx={{ position: 'relative', height: '10%' }}
      >
        <Toolbar disableGutters sx={{ alignItems: 'center' }}>
          <StyledButton>
            <ListIcon sx={{ color: '#8f8f94', width: '30px' }} />
          </StyledButton>
          <StyledButton sx={{ marginLeft: '10px' }}>
            <GridViewIcon sx={{ color: '#8f8f94', width: '30px' }} />
          </StyledButton>
          <StyledButton
            sx={{
              marginLeft: 'auto',
            }}
          >
            <DeleteOutlinedIcon sx={{ color: '#8f8f94', width: '30px' }} />
          </StyledButton>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default ListBar;
