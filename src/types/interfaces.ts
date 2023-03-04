export interface Notes {
  id?: number;
  date: Date;
  title: string;
  message: string;
}

export interface ApiCallback {
  (result: Notes[]): void;
}

export interface ApiContextProps {
  putNote: (note: Notes) => void;
  deleteNote: (id: number) => void;
  getNotes: () => Promise<Notes[]>;
  getNote: (id: number) => Promise<Notes>;
}

export interface ThemeContextProps {
  setMode: React.Dispatch<
    React.SetStateAction<{
      type: string;
      format: string;
    }>
  >;
  items: Notes[];
  setItems: React.Dispatch<React.SetStateAction<Notes[]>>;
  currentNote: number;
  setCurrentNote: React.Dispatch<React.SetStateAction<number>>;
}

export interface TableListItemProps {
  ({ item }: { item: Notes }): JSX.Element;
}
