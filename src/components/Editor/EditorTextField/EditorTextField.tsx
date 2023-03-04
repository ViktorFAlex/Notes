import { Box, TextField, Card, Typography } from '@mui/material';
import { useRef, useState, useEffect, Component, ChangeEvent, FormEventHandler } from 'react';
import useAppApiContext from '../../../hooks/useAppApiContext';

const EditorTextField = (): JSX.Element => {
  const renderInnerHtml = ({ title, body }: { title: string; body: string }): JSX.Element => {
    return (
      <>
        <Typography variant='h4' sx={{ color: '#d3d3d3' }}>
          {title}
        </Typography>
        <p dangerouslySetInnerHTML={{ __html: body }} />
      </>
    );
  };
  const [body, setBody] = useState('');
  const [title, setTitle] = useState('');
  const inputRef = useRef<HTMLInputElement>();
  const { getNote } = useAppApiContext();

  const parseUserContent = (html: string) => {
    const parser = new DOMParser();
    const parsedDom = parser.parseFromString(html, 'text/html');
    const title = parsedDom.querySelector('h4')?.textContent || '';
    const body = parsedDom.querySelector('p')?.innerHTML || '';
    console.log(body);
    setTitle(title);
    setBody(body);
  };
  const handleUserInput = (e: React.FocusEvent<HTMLDivElement>) => {
    console.log(e);
    const { innerHTML } = e.target as HTMLDivElement;
    parseUserContent(innerHTML);
  };

  useEffect(() => {
    const getStore = async () => {
      const response = await getNote(1);
      const { title, message } = response;
      setTitle(title);
      setBody(message);
    };
    getStore();
  }, []);

  return (
    <Box
      contentEditable
      suppressContentEditableWarning
      sx={{ textAlign: 'left', color: '#7c7c7c' }}
      component='div'
      onBlur={handleUserInput}
    >
      {renderInnerHtml({ title, body })}
    </Box>
  );
};
export default EditorTextField;
