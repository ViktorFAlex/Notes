import { useState, useMemo } from 'react';
import { TextContext } from '../../../contexts';

const TextProvider = ({ children }: { children: React.ReactNode }) => {
  const [textFormat, setTextFormat] = useState({ bold: false, italic: false });
  const [selectedText, setSelectedText] = useState({ start: 0, end: 0 });
  const isBold = (text: string) => {
    const slicedText = text.slice(0, selectedText.start);
    const regex = /(\*\*[^*]+?\*\*)|(__[^_]+?__)/g;
    return (slicedText.match(regex) || []).length % 2 === 1;
  };

  const isItalic = (text: string) => {
    const slicedText = text.slice(0, selectedText.start);
    const regex = /(\*[^*]+?\*)|(_[^_]+?__)/g;
    return (slicedText.match(regex) || []).length % 2 === 1;
  };

  const makeItalic = (text: string) => {
    const { start, end } = selectedText;
    return `${text.slice(0, start)}*${text.slice(start, end)}*${text.slice(end)}`;
  };

  const textHandlers = useMemo(
    () => ({
      isBold,
      isItalic,
      makeItalic,
      textFormat,
      setTextFormat,
      selectedText,
      setSelectedText,
    }),
    [textFormat, selectedText],
  );

  return <TextContext.Provider value={textHandlers}>{children}</TextContext.Provider>;
};

export default TextProvider;
