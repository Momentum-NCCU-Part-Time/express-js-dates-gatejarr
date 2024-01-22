const express = require('express');
const morgan = require('morgan');
const dayjs = require('dayjs')
const port = 3000;

const app = express();

app.use(morgan("tiny"));

//routes
app.get("/api/dates/yesterday", (req, res) => {
  const yesterdaysDate = dayjs().subtract(1, 'day').format("ddd MMM D, YYYY");
  res.status(200).json({"Yesterday's date was": yesterdaysDate})
})

app.get("/api/dates/today", (req, res) => {
  const todaysDate = dayjs().format("ddd MMM D, YYYY");
  res.status(200).json({'Today is': todaysDate})
})

app.get("/api/dates/tomorrow", (req, res) => {
  const tomorrowsDate = dayjs().add(1, 'day').format("ddd MMM D, YYYY");
  res.status(200).json({"Tomorrow is": tomorrowsDate})
})

app.listen(port, () => {
  {
    console.log(`Server is running on port ${port}`);
  }
});
