import { Box, TextField, Typography } from '@mui/material';
import { useRef, ChangeEvent } from 'react';
import useAppApiContext from '../../../hooks/useAppApiContext';
import useThemeContext from '../../../hooks/useThemeContext';
import useTextContext from '../../../hooks/useTextContext';
import { EditorFieldProps } from '../../../types/types';

const EditorTextField = ({ note, setNote }: EditorFieldProps) => {
  const { mode } = useThemeContext();

  const { setSelectedText } = useTextContext();
  const inputRef = useRef<HTMLInputElement>();
  const { putNote } = useAppApiContext();

  const renderBody = (body: string) => {
    return body
      .replace(/(\*|_)\1(.+?)\1\1/g, '<strong>$2</strong>')
      .replace(/(\*|_)(.+?)\1/g, '<em>$2</em>'); //replace md symbols for text formatting with formatted text
  };

  const renderContent = () => {
    const { value } = note;
    const title = (value.match(/.+\n/) || []).join(''); //first line only
    const body = (value.match(/(?<=\n)(.|\n)+/) || []).join(''); //any symbols after first line
    const newTitle = title.replace(/^#+\s/, ''); //replace header md marks
    const newBody = renderBody(body);
    return (
      <Box component='div' sx={{ height: '85vh' }}>
        <Typography variant='h4'>{newTitle}</Typography>
        <Typography variant='body2' dangerouslySetInnerHTML={{ __html: newBody }}></Typography>
      </Box>
    );
  };
  console.log(note);
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { value } = e.target;
    const newDate = new Date();
    putNote({ value, date: newDate, id: 1 })
      .then(() => setNote({ value, date: newDate }))
      .then(() => console.log(note, value));
  };

  const handleSelect = (e: React.SyntheticEvent<HTMLDivElement, Event>) => {
    const target = e.target as HTMLInputElement;
    const { selectionStart, selectionEnd } = target;
    setSelectedText({ start: selectionStart ?? 0, end: selectionEnd ?? 0 });
  };

  return (
    <Box sx={{ textAlign: 'left', color: '#7c7c7c', overflowY: 'auto' }}>
      <Typography variant='body2'>{note.date.toString()}</Typography>
      {mode.format === 'edit' && (
        <TextField
          multiline
          fullWidth
          inputRef={inputRef}
          defaultValue={note.value}
          sx={{ overflowY: 'auto' }}
          onChange={handleChange}
          onSelect={handleSelect}
          InputProps={{ style: { color: '#d5d5d5' } }}
        />
      )}
      {mode.format === 'view' && renderContent()}
    </Box>
  );
};
export default EditorTextField;
