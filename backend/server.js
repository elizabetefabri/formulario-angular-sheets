const express = require('express');
const cors = require('cors');
const jsonServer = require('json-server');
const auth = require('json-server-auth');
const path = require('path');

const app = express();
const router = jsonServer.router(path.join(__dirname, 'db.json'));

// Middleware para CORS
const corsOptions = {
  origin: 'http://localhost:4200', // substitua pelo URL do seu front-end
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  exposedHeaders: ['Authorization']
};

app.use(cors(corsOptions));
app.use(express.json());

const port = process.env.PORT || 8080;

// Regras de autenticação
const rules = auth.rewriter({
  "/users": 660,
  "/login": 660,
  "/register": 660
});

app.db = router.db;
app.use(rules);
app.use(auth);
app.use(router);

app.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});
