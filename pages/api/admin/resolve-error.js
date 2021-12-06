import { ref, child, set } from "firebase/database";
import { db } from '../../../firebase';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        await set(ref(db, 'errors/' + req.body.deleted_error.game), null).then(() => {
            res.status(200).json({ status: "Success" });
        });
    }
}
