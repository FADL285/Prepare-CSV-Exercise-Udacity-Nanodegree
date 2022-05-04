import { Router } from 'express';

const router = Router();

router.get('/convert', (req, res) => {
  res.send(`<h1>File is Processing now...</h1>`);
});

export default router;
