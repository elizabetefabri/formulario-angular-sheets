const fs = require('fs');
const path = require('path');
const jsonServer = require('json-server');
const auth = require('json-server-auth');
const middlewares = jsonServer.defaults();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dataRoutes = require('./src/routes/dataRoutes');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const router = jsonServer.router(path.join(__dirname, 'db.json'));

const port = process.env.PORT || 8080;

// Define rules for json-server-auth
const rules = auth.rewriter({
  "/users": 660,
  "/login": 660,
  "/register": 660
});

// Bind the router db to the app
app.db = router.db;

// Apply middlewares
app.use(middlewares);
app.use(cors());
app.use(bodyParser.json());

// Apply auth and routes rules
app.use(rules);
app.use(auth);
app.use(router);

// Add Google Sheets data routes
app.use('/api', dataRoutes);

app.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});
