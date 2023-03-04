import { Box, Container } from '@mui/material';
import './App.css';
import TableMode from '../TableMode/TableMode';
import Editor from '../Editor/Editor';

function App() {
  return (
    <Container
      disableGutters
      maxWidth='xl'
      sx={{
        margin: '0',
        height: '100vh',
        display: 'flex',
        flexWrap: 'nowrap',
        flexDirection: 'row',
      }}
    >
      <TableMode />
      <Editor />
    </Container>
  );
}

export default App;
