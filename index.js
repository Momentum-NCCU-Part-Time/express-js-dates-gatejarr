const express = require('express');
const morgan = require('morgan');
const dayjs = require('dayjs')
const port = 3000;

const app = express();

app.use(morgan("tiny"));

//routes
app.get("/api/dates/yesterday", (req, res) => {
  const yesterdaysDate = dayjs().subtract(1, 'day').format("dddd MMM D, YYYY");
  res.status(200).json({"Yesterday's date was": yesterdaysDate})
})

app.get("/api/dates/today", (req, res) => {
  const todaysDate = dayjs().format("dddd MMM D, YYYY");
  res.status(200).json({'Today is': todaysDate})
})

app.get("/api/dates/tomorrow", (req, res) => {
  const tomorrowsDate = dayjs().add(1, 'day').format("dddd MMM D, YYYY");
  res.status(200).json({"Tomorrow is": tomorrowsDate})
})

app.get("/api/day-of-week/:year/:month/:day", (req, res) => {
  const dayLookup = `${req.params.year}-${req.params.month}-${req.params.day}`;
  const dayOfWeek = dayjs(dayLookup).format("dddd");
  res.status(200).json({"Day of the week ": dayOfWeek})
})

app.get("/api/current-time", (req, res) => {
  const currentTime = dayjs().format("HH:mm:ss");
  res.status(200).json({"The time is": currentTime})
})

// Need 12-hr time, not currently working
app.get("/api/current-time?format=12", (req, res) => {
  const timeFormat = "12";
  res.send({"Format is": timeFormat})
})

app.get("/api/timestamp", (req, res) => {
  const timeStamp = dayjs().unix();
  res.status(200).json({"Timestamp": timeStamp})
})

app.get("/*", (req, res) => {
  const notFound = "not found";
  res.status(404).json({"error": notFound})
})

app.listen(port, () => {
  {
    console.log(`Server is running on port ${port}`);
  }
});
