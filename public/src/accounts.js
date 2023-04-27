
const findAccountById = (accounts, id) => {
  let findId = accounts.find((account) => account.id === id); 
  return findId
};


function sortAccountsByLastName(accounts) {
  const sortedAccounts = accounts.sort((accountA, accountB) => 
  makeLowerCase(accountA.name.last) > makeLowerCase(accountB.name.last) ? 1 : -1);
  //accountA.name.last.toLowerCase() > accountB.name.last ? 1 : -1); 
  return sortedAccounts;
} 


function makeLowerCase(accountName) {
  return accountName.toLowerCase()
}


function getTotalNumberOfBorrows({id}, books) {
  return books.reduce((total, book) => {   
    book.borrows.forEach((borrow) => {
      if (id === borrow.id) {
        total += 1;
      } 
    });
    return total;
  }, 0);
}


function getBooksPossessedByAccount({id}, books, authors) {
  let result = [];
  books.forEach((item) => {
    let borrowed = item.borrows[0];
    if (borrowed.id === id && !borrowed.returned) {
      item.author = authors.find((auth) => auth.id === item.authorId);
      result.push(item)
    };
  });   
  return result;
}
   

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
