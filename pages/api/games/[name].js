import axios from 'axios';

export default async function handler(req, res) {
    const { name } = req.query;
    const game = await axios.get('http://localhost:8080/get-game/' + name);
    res.status(200).json(game.data)
}
