const express = require('express');
const path = require('path');
const router = express.Router();
const books = require('../data/books.json');
const validateBookId = require('../middleware/validateBookId');

// Route untuk mendapatkan semua buku dalam format JSON
router.get('/books', (req, res) => {
  try {
    res.json(books);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Route untuk mendapatkan satu buku berdasarkan ID dalam format JSON
router.get('/books/:id', validateBookId, (req, res) => {
  try {
    const bookId = req.bookId;
    const satuBuku = books.find(b => b.id === bookId);
    if (satuBuku) {
      res.json(satuBuku);
    } else {
      res.status(404).json({ error: 'Buku tidak ditemukan' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Route untuk menampilkan buku dengan EJS
router.get('/ejs/books', (req, res) => {
  try {
    res.render('books', { books });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Route untuk halaman landing page
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

// Route to handle all other undefined routes
router.all('*', (req, res) => {
  res.status(404);
  res.render('404', { url: req.url }); // Pass the url variable to the view
});

module.exports = router;
