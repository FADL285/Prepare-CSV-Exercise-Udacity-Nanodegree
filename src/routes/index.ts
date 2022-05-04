import { Router } from 'express';
import convRouter from './api/convert';

const router = Router();

router.get('/', (req, res) => {
  res.send(
    `<h1>Process the CSV file from <a href="/api/convert">Here</a></h1>`
  );
});

router.use('/api', convRouter);

export default router;
