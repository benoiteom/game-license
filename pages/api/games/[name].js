import { ref, child, get } from "firebase/database";
import { db } from '../../../firebase';

export default async function handler(req, res) {
    const dbRef = ref(db);
    await get(child(dbRef, `games/${req.query.name}`)).then((snapshot) => {
        if (snapshot.exists()) {
            let game = snapshot.val();
            res.status(200).json(game);
        } else {
            res.status(404).json({ status: 'Not Found' });
        }
    }).catch((error) => {
        console.error(error);
    });
}
