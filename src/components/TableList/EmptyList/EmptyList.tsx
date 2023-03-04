import { Typography } from '@mui/material';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';

const EmptyList = (): JSX.Element => {
  return (
    <>
      <Typography sx={{ color: '#dedede', textAlign: 'left' }}>
        Вы еще не создали ни одной записи.
      </Typography>
      <Typography sx={{ color: '#7c7c7c' }}>Создать?</Typography>
    </>
  );
};

export default EmptyList;
