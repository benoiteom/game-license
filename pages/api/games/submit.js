import { ref, child, set } from "firebase/database";
import { db } from '../../../firebase';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        let name = req.body.game.name;
        delete req.body.game.name;
        await set(ref(db, 'unverified/' + name + '--' + Math.floor(Math.random() * 100000)), req.body.game).then(() => {
            res.status(200).json({ status: "Success" });
        });
    }
}
