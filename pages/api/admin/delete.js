import { ref, child, set } from "firebase/database";
import { db } from '../../../firebase';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const name = req.body.deleted_game.name;
        delete req.body.deleted_game.name;
        if (req.body.deleted_game.type == 'unverified') {
            await set(ref(db, 'unverified/' + name), null).then(() => {
                res.status(200).json({ status: "Success" });
            });
        } else {
            await set(ref(db, 'games/' + name), null).then(() => {
                res.status(200).json({ status: "Success" });
            });
        }
    }
}
