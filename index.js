const express = require('express');
const morgan = require('morgan');
const dayjs = require('dayjs')
const port = 3000;

const app = express();

app.use(morgan("tiny"));

app.listen(port, () => {
  {
    console.log(`Server is running on port ${port}`);
  }
});
