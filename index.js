const express = require('express');
const app = express();

app.listen(5000, () => {
  console.log('server on');
});

app.get('/', (req,res) => {
  res.send('외톨이야 외톨이야 따리디리 따랍뚜');
});