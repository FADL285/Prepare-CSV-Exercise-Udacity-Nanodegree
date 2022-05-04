import express from 'express';

const app = express();
const port = process.env.PORT || 3000;

// start the Express server
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
