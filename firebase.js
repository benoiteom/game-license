import { initializeApp } from '@firebase/app';
import { getDatabase } from '@firebase/database';

export const firebaseApp = initializeApp({
    apiKey: '',
    authDomain: '',
    databaseURL: 'https://game-license-default-rtdb.firebaseio.com/',
    projectId: 'game-license',
    storageBucket: 'gs://game-license.appspot.com'
});
export const db = getDatabase(firebaseApp);