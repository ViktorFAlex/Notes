import { Box, AppBar, Toolbar, Tabs, Tab } from '@mui/material';
import { color } from '@mui/system';
import ListBar from '../ListBar/ListBar';
import TableList from '../TableList/TableList';
import useAppApiContext from '../../hooks/useAppApiContext';
import useThemeContext from '../../hooks/useThemeContext';
import { Notes } from '../../types/interfaces';

const TableMode = (): JSX.Element => {
  const { items, setItems } = useThemeContext();
  console.log(items);
  return (
    <Box
      sx={{
        width: '25%',
        height: '100%',
        backgroundColor: '#1e2323',
        margin: '0',
        paddingLeft: '10px',
        paddingRight: '5px',
      }}
    >
      <ListBar />
      <TableList />
    </Box>
  );
};

export default TableMode;
