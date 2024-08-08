const express = require('express');
const path = require('path');
const booksRouter = require('./routes/books');

const app = express();
const port = 3000;

// Mengatur view engine ke EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware untuk parsing JSON
app.use(express.json());

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Menggunakan router booksRouter
app.use(booksRouter);  // rute pada tingkat root




app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
