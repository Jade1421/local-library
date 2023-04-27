const getTotalBooksCount = books => books.length;
// function getTotalBooksCount(books) {
//   return books.reduce(total => total + 1, 0);
// }

// function getTotalAccountsCount(accounts) {
//   return accounts.length;
// }

//arrow function
const getTotalAccountsCount = accounts => accounts.length;


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
    }
 return bookList.sort((aBook, bBook) => (aBook.count < bBook.count ? 1 : -1)).slice(0, 5);
}




function getMostPopularBooks(books) {
  return books.map((book) => {
    return {name: book.title, count: book.borrows.length}
  })
  .sort((aBook, bBook) => (aBook.count < bBook.count ? 1 : -1))
  .slice( 0, 5);
} 


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
