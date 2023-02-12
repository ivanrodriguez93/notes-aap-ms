import express from 'express';

const app = express();
const port = 3000;

app.use(express.json());

app.get(`/`, async (req, res) => {
  res.json({ message: 'Ok!' });
});

const server = app.listen(3000, () =>
  console.log(`🚀 Server is running at: http://localhost:${port}`)
);
