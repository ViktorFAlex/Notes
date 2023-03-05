import { Notes } from './interfaces';

export type EditorFieldProps = {
  note: Notes;
  setNote: React.Dispatch<React.SetStateAction<Notes>>;
};
