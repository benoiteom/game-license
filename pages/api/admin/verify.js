import { ref, set } from "firebase/database";
import { db } from '../../../firebase';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const name = req.body.verify_game.name;
        delete req.body.verify_game.name;
        await set(ref(db, 'games/' + name), req.body.verify_game).then(() => {
            res.status(200).json({ status: "Success" });
        });
    }
}
