const express = require('express');
const app = express();
const port = process.env.PORT || 5000; // או פורט אחר אם יש צורך

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
