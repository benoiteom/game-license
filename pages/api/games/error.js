import axios from 'axios';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        await axios
        .post('http://localhost:8080/submit-error', req.body.error)
        .then(() => {
            console.log('Error Submitted')
        })
        .catch(err => {
            console.error(err);
        });
        res.status(200).json({ status: "Success" })
    }
}
