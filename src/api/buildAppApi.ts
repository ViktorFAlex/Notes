import { ApiCallback, Notes } from '../types/interfaces';

const buildAppApi = () => {
  const storeName = 'notes';
  const dbName = 'appIDb';
  const version = 1;

  const createDb = () => {
    const openRequest = indexedDB.open(dbName, version);
    openRequest.onupgradeneeded = () => {
      const db = openRequest.result;
      if (!db.objectStoreNames.contains(storeName)) {
        db.createObjectStore(storeName, { keyPath: 'id', autoIncrement: true });
        console.log('dbCreated');
      }
    };
    openRequest.onsuccess = () => {
      const db = openRequest.result;
    };
  };

  const putNote = (note: Notes) => {
    const openRequest = indexedDB.open(dbName, version);
    openRequest.onsuccess = () => {
      const db = openRequest.result;
      const request = db.transaction(storeName, 'readwrite').objectStore(storeName).put(note);
      request.onsuccess = () => {
        console.log('note added', request.result);
      };
    };
  };

  const deleteNote = (id: number) => {
    const openRequest = indexedDB.open(dbName, version);
    openRequest.onsuccess = () => {
      const db = openRequest.result;
      const request = db.transaction(storeName, 'readwrite').objectStore(storeName).delete(id);
      request.onsuccess = () => {
        console.log('note deleted', request.result);
      };
    };
  };

  const getNotes = () => {
    return new Promise<Notes[]>((resolve) => {
      const openRequest = indexedDB.open(dbName, version);
      openRequest.onsuccess = () => {
        const db = openRequest.result;
        const request = db.transaction(storeName, 'readonly').objectStore(storeName).getAll();
        request.onsuccess = () => {
          resolve(request.result);
        };
      };
    });
  };
  const getNote = (id: number) => {
    return new Promise<Notes>((resolve) => {
      const openRequest = indexedDB.open(dbName, version);
      openRequest.onsuccess = () => {
        const db = openRequest.result;
        const request = db.transaction(storeName, 'readonly').objectStore(storeName).get(id);
        request.onsuccess = () => {
          resolve(request.result);
        };
      };
    });
  };

  createDb();

  return {
    putNote,
    deleteNote,
    getNotes,
    getNote,
  };
};

export default buildAppApi;
