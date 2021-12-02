import axios from 'axios';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        await axios
        .post('http://localhost:8080/admin/login', req.body.info)
        .then(() => {
            console.log('Game Submitted')
        })
        .catch(err => {
            console.error(err);
        });

        res.status(200).json({ status: "Success" })
    }
}
