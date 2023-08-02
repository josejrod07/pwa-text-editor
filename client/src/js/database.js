import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// Method that accepts content and adds it to the database with an ID of 1
export const putDb = async (content) => {
  console.log('Update to database');
  const db = await openDB('jate', 1); // open the database
  const text = db.transaction('jate', 'readwrite'); // start transaction
  const store = text.objectStore('jate'); // reference to object store
  const request = store.put({ id: 1, value: content }); // create a request to put the provided content into the database
  const result = await request;
  console.log('Data Saved', result.value);
}


// Method that gets all the content from the database
export const getDb = async () => {
  console.log('Get from database');
  const db = await openDB('jate', 1); // open the database
  const text = db.transaction('jate', 'readonly'); // start transaction
  const store = text.objectStore('jate'); // reference to object store
  const request = store.get(1); // create a request to get content from the database
  const result = await request;
  console.log('Data Retrieved', result.value);
  return result.value;
}

initdb();
