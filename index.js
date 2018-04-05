const express = require('express');
const app = express();

function doWork(duration) {
  const start = Date.now();
  while(Date.now() - start < duration ) {}
}

app.get('/', (req, res) => {
  // The function below is going to be processed in event loop.
  // This is blocking event loop.
  doWork(5000);
  
  res.send('Hi there');
});

app.listen(3000);