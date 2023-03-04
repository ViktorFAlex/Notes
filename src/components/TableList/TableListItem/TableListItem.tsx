import { ListItemButton, ListItemText } from '@mui/material';
import { Notes, TableListItemProps } from '../../../types/interfaces';
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
  const getSubtitle = (html: string) => {
    const parser = new DOMParser();
    const response = parser.parseFromString(html, 'text/html');
    const body = response.querySelector('body');
    return body?.textContent;
  };
  const subtitle = getSubtitle(item.message);
  return (
    <ListItemButton
      selected={item.id === currentNote}
      onClick={() => {
        console.log(item.id, currentNote);
        setCurrentNote(item?.id ?? 0);
      }}
    >
      <StyledListItem primary={item.title} secondary={subtitle} />
    </ListItemButton>
  );
};

export default TableListItem;
