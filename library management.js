class Book {
  constructor(title, author, ISBN) {
    this.title = title;
    this.author = author;
    this.ISBN = ISBN;
    this.isIssued = false;
  }

  issueBook() {
    if (!this.isIssued) {
      this.isIssued = true;
      return true;
    }
    return false;
  }

  returnBook() {
    this.isIssued = false;
  }
}

const books = [
  new Book('To Kill a Mockingbird', 'Harper Lee', '9780061120084'),
  new Book('1984', 'George Orwell', '9780451524935'),
  new Book('The Great Gatsby', 'F. Scott Fitzgerald', '9780743273565'),
  new Book('The Catcher in the Rye', 'J.D. Salinger', '9780316769488'),
];

// Display available books (not issued)
function displayAvailableBooks() {
  return books.filter(book => !book.isIssued);
}

// Issue book by ISBN
function issueBookByISBN(isbn) {
  const book = books.find(b => b.ISBN === isbn);
  if (book && !book.isIssued) {
    book.issueBook();
    return `Book issued: ${book.title}`;
  }
  return 'Book not available or already issued';
}
