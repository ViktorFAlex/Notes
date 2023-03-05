import { ListItemButton, ListItemText } from '@mui/material';
import { Notes } from '../../../types/interfaces';
import { styled } from '@mui/material/styles';
import useThemeContext from '../../../hooks/useThemeContext';

type Props = {
  item: Notes;
};

const StyledListItem = styled(ListItemText)`
  color: #d5d5d5;
  font-weight: 700;
  & {
  }
  & > .MuiTypography-body2 {
    color: #898989;
  }
  &: hover {

  }
`;

const TableListItem = ({ item }: Props) => {
  const { currentNote, setCurrentNote } = useThemeContext();

  const { value } = item;
  const [title, ...body] = value.split('\n');
  return (
    <ListItemButton
      selected={item.id === currentNote}
      onClick={() => {
        console.log(item.id, currentNote);
        setCurrentNote(item?.id ?? 0);
      }}
    >
      <StyledListItem primary={title} secondary={body.join('\n')} />
    </ListItemButton>
  );
};

export default TableListItem;
