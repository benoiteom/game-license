import axios from 'axios';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        await axios
        .post('http://localhost:8080/edit-game', req.body.edit_game)
        .then(() => {
            console.log('Game Edited')
        })
        .catch(err => {
            console.error(err);
        });

        res.status(200).json({ status: "Success" })
    }
}
