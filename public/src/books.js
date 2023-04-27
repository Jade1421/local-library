const {findAccountById} = require("./accounts");



//find author by id
// let found = 
//find() loop through authors to find auth new variable
//author ID ==== mathed id inside author object.
//return found



// function findAuthorById(authors, id) {
//   let found = authors.find((auth) => auth.id === id);
//   return found;
// }





//arrow function. 

const findAuthorById = (authors, id) => {
  let found = authors.find((auth) => auth.id === id); 
  return found
};


//find book by id
// let foundBook =
// use find() to loop through books 
// book id === book object id
//return foundBook
function findBookById(books, id) {
  let foundBook = books.find((book) => book.id === id);
  return foundBook;
}


//function partition books by borrowed status
//books is the parameter
// booksReturned = 
// booksBorrowed =
// books returned use filter() to loop through books and the books that are borrowed use every()
// see if borrowed books returned is true
//then for booksBorrowed - use filter() with some() books that are NOT returned
// final array combines booksBorrowed and booksReturned
//return finalArray
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

// function is getBorrowersForBook in parameters need book and accounts
// looking for account id 
//use map() to loop through borrows which is the key in books object
//and find() to loop over the accounts object array
// match account ID and borrowed book ID
//return the array of borrow and account with spread operator for WHOLE array of object
//use slice method on borrowed list to return a portion of the array up to index value 10.
function getBorrowersForBook(book, accounts) {
  let borrowedList = book.borrows.map((borrow) => {
    let id = borrow.id
    let account = findAccountById(accounts, id);
      return { ...borrow, ...account };
  });                                    
  return borrowedList.slice(0, 10);
};



// function getBorrowersForBook(book, accounts) {
//   let borrowedList = book.borrows.map((borrow) => {
//     let account = accounts.find((account) => account.id === borrow.id);
//     return { ...borrow, ...account };
//    }) 
//   return borrowedList.slice(0, 10);
//  }





module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};