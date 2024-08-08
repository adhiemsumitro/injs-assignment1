document.addEventListener('DOMContentLoaded', function () {
    const bookLinks = document.querySelectorAll('.book-link');
  
    bookLinks.forEach(link => {
      link.addEventListener('click', function (event) {
        event.preventDefault();
        const bookId = this.getAttribute('data-id');
        fetchBookDetails(bookId);
      });
    });
  });
  
  function fetchBookDetails(bookId) {
    fetch(`/books/${bookId}`)
      .then(response => response.json())
      .then(data => {
        showBookModal(data);
      })
      .catch(error => {
        console.error('Error fetching book details:', error);
        alert('Failed to fetch book details.');
      });
  }
  
  function showBookModal(book) {
    document.getElementById('bookId').textContent = book.id;
    document.getElementById('bookTitle').textContent = book.title;
    document.getElementById('bookAuthor').textContent = book.author;
    document.getElementById('bookYear').textContent = book.year_written;
    document.getElementById('bookEdition').textContent = book.edition;
    document.getElementById('bookPrice').textContent = book.price;
  
    var bookModal = new bootstrap.Modal(document.getElementById('bookModal'));
    bookModal.show();
  }
  