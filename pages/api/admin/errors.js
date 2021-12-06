import { ref, child, get } from "firebase/database";
import { db } from '../../../firebase';

export default async function handler(req, res) {
    const dbRef = ref(db);
    await get(child(dbRef, `errors`)).then((snapshot) => {
        if (snapshot.exists()) {
            let errors = snapshot.val();
            res.status(200).json(errors);
        } else {
            res.status(404).json({ status: 'Not Found' });
        }
    }).catch((error) => {
        console.error(error);
    });
}
