// Function to validate book ID
const validateBookId = (req, res, next) => {
    const bookId = Number(req.params.id);
    if (isNaN(bookId)) {
      return res.status(400).json({ error: 'Invalid ID format' });
    }
    req.bookId = bookId;
    next();
  };
  
  module.exports = validateBookId;
  