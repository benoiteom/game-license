import axios from 'axios';

export default async function handler(req, res) {
    const games = await axios.get('http://localhost:8080/');
    res.status(200).json(games.data);
}
