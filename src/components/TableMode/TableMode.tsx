import { Box } from '@mui/material';
import ListBar from '../ListBar/ListBar';
import TableList from '../TableList/TableList';

const TableMode = (): JSX.Element => {
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
