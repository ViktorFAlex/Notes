import { IconButton } from '@mui/material';
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

export default StyledButton;
