import axios from 'axios';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        await axios
        .post('http://localhost:8080/verify-game', req.body.verify_game)
        .then(() => {
            console.log('Game Verified')
        })
        .catch(err => {
            console.error(err);
        });

        res.status(200).json({ status: "Success" })
    }
}
