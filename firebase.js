import { initializeApp } from '@firebase/app';
import { getDatabase } from '@firebase/database';
import { getStorage } from '@firebase/storage';

export const firebaseApp = initializeApp({
    apiKey: '',
    authDomain: '',
    databaseURL: 'https://game-license-default-rtdb.firebaseio.com/',
    projectId: 'game-license',
    storageBucket: 'gs://game-license.appspot.com'
});
export const db = getDatabase(firebaseApp);
export const storage = getStorage(firebaseApp);