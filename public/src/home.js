const getTotalBooksCount = books => books.length;
// function getTotalBooksCount(books) {
//   return books.reduce(total => total + 1, 0);
// }

// function getTotalAccountsCount(accounts) {
//   return accounts.length;
// }

//arrow function
const getTotalAccountsCount = accounts => accounts.length;

//to the count for books that are borrowed i need filters.
// booksCheckedOut is my new variable to declare filter function
//filter() loop through books to get 1 book
// then filter through borrowed book.
// when looping through borrowed book if the record returned is FALSE
//they did NOT return the book then get the length of borrowed book which is greater than 0. if its 0 they didn't borrow a book
// return
function getBooksBorrowedCount(books) {
  let booksCheckedOut = books.filter((book) => book.borrows.filter((record) => record.returned === false).length > 0);
  return booksCheckedOut.length;
}




function getMostCommonGenres(books) {
  let newObj = {};
  const bookList = [];
    books.forEach(( book) => {
    let total = 0;  
    //console.log("GENRE--->", book.genre);
      for (let b of books) {   
    //console.log(b.genre);
          if (b.genre === book.genre) {
          total ++;
          }
    }
    newObj[book.genre] = total; //adding unique key values to one new object (the genre and count)
 })
    for (let genre in newObj) {
      bookList.push({name: genre, count:newObj[genre]});
         //console.log(genre, newObj[genre]);
    }
//   console.log(newObj);
//   console.log("booklist---->", bookList);
 return bookList.sort((aBook, bBook) => (aBook.count < bBook.count ? 1 : -1)).slice(0, 5);
  //chaining only works if previous method is an array.
  //sort and slice gives NEW arrays
}






//get most popular books has 1 parameter books which is an array of book OBJECTS
//returns an array containing 5 objects or less that represents the most popular books in library
//popularity is represented by the number of times a book has been borrowed.
//each object in the returned array has 2 KEYS name and count
//if there is a tie the array should only contain no more than 5 objects.
// use map to make duplicate copy 
// return object with the name : book.title and count: is book BORROWS.length
//then sort and slice to get 5 objects or less
function getMostPopularBooks(books) {
  return books.map((book) => {
    return {name: book.title, count: book.borrows.length}
  })
  .sort((aBook, bBook) => (aBook.count < bBook.count ? 1 : -1))
  .slice( 0, 5);
} //lalalalal
//hello world
//bye world


//getMostPopularAuthors function has 2 parameters books and authors
//returns an array containing 5 objects or FEWER that represents
//the MOST popular authors whose books have been checked out the most.
//popularity is represented by finding all of the books written by the author and then ADDING UP the number of times those books have been borrowed.
//each object in returned array has 2 keys NAME and COUNT
//even if there is a tie the array should contain no more than 5 objects.
//need forEACH to loop through authors and books
//need .sort for popular authors and slice to get no more than 5 objects back.
function getMostPopularAuthors(books, authors) {
  let result = [];
  authors.forEach((author) => {
    let oneAuthor = {
      name: `${author.name.first} ${author.name.last}`,
      count: 0
    };
    
    books.forEach((book) => {
      if (book.authorId === author.id) {
        oneAuthor.count += book.borrows.length;
      }
    });
    result.push(oneAuthor);
  });
  return result.sort((aAuth, bAuth) => bAuth.count - aAuth.count).slice(0, 5);
}



module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
