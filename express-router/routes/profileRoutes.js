import express from 'express';
import { signup, login, getUser } from '../controllers/profileController.js';
const router = express.Router();


router.get('/', (req, res) => {
  return res.json({ message: "Fetched all users" });
});

router.post('/signup', signup )

router.get('/login', login);

router.get('/:id', getUser);

export default router;