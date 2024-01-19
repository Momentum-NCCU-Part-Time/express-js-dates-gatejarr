const express = require('express');
const morgan = require('morgan');
const dayjs = require('dayjs')
const port = 3000;

const app = express();

app.use(morgan("tiny"));

//routes
app.get("/api/dates/yesterday", (req, res) => {
  res.send('Yesterday')
})

app.get("/api/dates/today", (req, res) => {
  res.send('Today')
})

app.get("/api/dates/tomorrow", (req, res) => {
  res.send('Tomorrow')
})

app.listen(port, () => {
  {
    console.log(`Server is running on port ${port}`);
  }
});
