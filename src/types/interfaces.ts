export interface Notes {
  id?: number;
  date: Date;
  value: string;
}

export interface ApiCallback {
  (result: Notes[]): void;
}

export interface ApiContextProps {
  putNote: (note: Notes) => Promise<IDBValidKey>;
  deleteNote: (id: number) => void;
  getNotes: () => Promise<Notes[]>;
  getNote: (id: number) => Promise<Notes>;
}

export interface ThemeContextProps {
  mode: { type: string; format: string };
  changeMode: (type: string, format: string) => void;
  items: Notes[];
  setItems: React.Dispatch<React.SetStateAction<Notes[]>>;
  currentNote: number;
  setCurrentNote: React.Dispatch<React.SetStateAction<number>>;
}

export interface TableListItemProps {
  ({ item }: { item: Notes }): JSX.Element;
}

export interface TextContextProps {
  isBold: (text: string, substring: string) => boolean;
  isItalic: (text: string, substring: string) => boolean;
  makeItalic: (text: string) => string;
  textFormat: { bold: boolean; italic: boolean };
  setTextFormat: React.Dispatch<React.SetStateAction<{ bold: boolean; italic: boolean }>>;
  selectedText: { start: number; end: number };
  setSelectedText: React.Dispatch<React.SetStateAction<{ start: number; end: number }>>;
}

export interface EditorTextFieldProps {
  ({
    note,
    setNote,
  }: {
    note: Notes;
    setNote: React.Dispatch<React.SetStateAction<Notes>>;
  }): JSX.Element;
}
