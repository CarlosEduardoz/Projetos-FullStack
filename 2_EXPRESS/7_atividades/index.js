const express = require('express');
const app = express();
const port = 5000;

app.use(express.static(__dirname + '/public'));

app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res) => {
  res.sendFile(__dirname + '/templates/home.html');
});


app.get('/cadastro/:id', (req, res) => {
  const userId = req.params.id;
  res.sendFile(__dirname + '/templates/cadastro.html');
});

app.post('/processar', (req, res) => {
  const { nome, email } = req.body;

  res.send(`Nome: ${nome} , Email: ${email}`);
  
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});