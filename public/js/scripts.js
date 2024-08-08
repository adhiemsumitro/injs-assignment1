function routeToBook() {
    const bookId = document.getElementById('bookIdInput').value;
    if (bookId) {
      window.location.href = `/books/${bookId}`;
    } else {
      alert('Please enter a valid Book ID');
    }
  }
  