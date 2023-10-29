// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors()); 
app.use(bodyParser.json());

let formData = [];

app.post('/api/saveData', (req, res) => {
  const data = req.body;
  formData.push(data);
  res.json({ message: 'Dados salvos com sucesso. Número de formulários preenchidos: ' + formData.length });
});

app.get('/api/getData', (req, res) => {
  res.json(formData);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
