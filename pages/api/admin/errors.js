import axios from 'axios';

export default async function handler(req, res) {
    const errors = await axios.get('http://localhost:8080/errors');
    res.status(200).json(errors.data);
}
