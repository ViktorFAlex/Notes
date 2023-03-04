import { Typography, Divider, Stack } from '@mui/material';
import useAppApiContext from '../../hooks/useAppApiContext';
import useThemeContext from '../../hooks/useThemeContext';
import { Notes } from '../../types/interfaces';
import EmptyList from './EmptyList/EmptyList';
import { useEffect, useState } from 'react';
import TableListItem from './TableListItem/TableListItem';

const TableList = (): JSX.Element => {
  const { items } = useThemeContext();

  const renderItems = (notes: Notes[]) => {
    if (notes.length === 0) {
      return <EmptyList />;
    }
    return (
      <Stack>
        {items.map((item) => (
          <TableListItem key={item.id} item={item} />
        ))}
      </Stack>
    );
  };

  return (
    <>
      <Typography
        variant='subtitle2'
        align='left'
        gutterBottom
        sx={{ color: '#8f8f94', fontWeight: '700', display: 'block' }}
      >
        Сегодня
      </Typography>
      <Divider
        variant='fullWidth'
        sx={{
          position: 'relative',
          margin: '0 -5px 0 -10px',
          borderColor: '#8f8f94',
          height: '2px',
        }}
      />
      {renderItems(items)}
    </>
  );
};

export default TableList;
