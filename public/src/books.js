const {findAccountById} = require("./accounts");



const findAuthorById = (authors, id) => {
  let found = authors.find((auth) => auth.id === id); 
  return found
};


function findBookById(books, id) {
  let foundBook = books.find((book) => book.id === id);
  return foundBook;
}


function partitionBooksByBorrowedStatus(books) {
  let booksReturned = books.filter((book) =>
   book.borrows.every((borrow) => borrow.returned === true)
  );
  let booksBorrowed = books.filter((book) =>
   book.borrows.some((borrow) => borrow.returned === false)
  );
  let finalArray = [[...booksBorrowed], [...booksReturned]];
  return finalArray;
 }


function getBorrowersForBook(book, accounts) {
  let borrowedList = book.borrows.map((borrow) => {
    let id = borrow.id
    let account = findAccountById(accounts, id);
      return { ...borrow, ...account };
  });                                    
  return borrowedList.slice(0, 10);
};






module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
