const express = require('express');

const data = require("./data.json");
const app = express();
app.use(express.json());

app.get("/clients", function (request, response) {
  response.json(data);
});

app.get("/clients/:id", function (request, response) {
  const { id } = request.params;
  const client = data.find(cli => cli.id = id);

  if (!client) return response.status(204).json();

  response.json(client);
});

app.post("/clients", function (request, response) {
  const { name, email } = request.body;

  response.json({ name, email });
});


app.put("/clients", function (request, response) {
  const { id } = req.params;
  const client = data.find(cli => cli.id = id);

  if (!client) return response.status(204).json();

  const { name, email } = req.body;
  client.name = name;
  client.email = email;
});

app.delete("/clients/:id", function (request, response) {
  const { id } = request.params;
  const clientsFiltered = data.filter(client => client.id != id);

  response.json(clientsFiltered);
});


app.listen(3000, function () {
  console.log("Server is running");
});