import { promises as fsPromises, existsSync } from 'fs';
import { Router } from 'express';
import csv from 'csvtojson';

const router = Router();

const filePath = './users.csv';
const outputPath = 'users.json';

router.get('/convert', async (req, res) => {
  res.send(`<h1>File is Processing now...</h1>`);

  try {
    if (existsSync(outputPath)) {
      console.log('File already exists');
      return;
    } else {
      console.log('file not found');
    }
    const usersData = await csv().fromFile(filePath);
    const newData = usersData.map(
      (item: { first_name: string; last_name: string; phone: string }) => ({
        first_name: item.first_name,
        last_name: item.last_name,
        phone: item.phone === '' ? 'missing data' : item.phone
      })
    );
    fsPromises.writeFile(outputPath, JSON.stringify(newData));
  } catch (error) {
    console.log(`ERROR: ${error}`);
  }
});

export default router;
