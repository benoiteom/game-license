import { ref, set } from "firebase/database";
import { db } from '../../../firebase';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const name = req.body.edit_game.name;
        delete req.body.edit_game.name;
        await set(ref(db, 'games/' + name), req.body.edit_game).then(() => {
            res.status(200).json({ status: "Success" });
        });
    }
}
