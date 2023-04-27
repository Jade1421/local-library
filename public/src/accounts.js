
//findAccountById has two parameters accounts and id
//loop through account lists and if account.id === id return 
//use find method to find the matching id.

// function findAccountById(accounts, id) {
//   let findId = accounts.find((account) => account.id === id);
//   return findId;
// }

//arrow function
const findAccountById = (accounts, id) => {
  let findId = accounts.find((account) => account.id === id); 
  return findId
};

// long way to write it:
// function findAccountById(accounts, id) {
//   let foundId = "";
//     for (let i = 0; i < accounts.length; i++) {
//       const account = accounts[i];
//       if (account.id === id) foundId = account;
//     }
//     return foundId;



//use sort()
//function sortAccountsByLast name has one parameter-accounts
//accountA and accountB are the variables for sort function to make a comparison. name can be whatever.
// if condition accountA > greater than accountB if TRUE then add 1 which means if accountA > AccountB = accountA will be sorter after accountB. 1+ goes towards end of sorted array. -1 goes to beginning
//use sort() but also need to turn strings to lower case to sort
//return accounts
function sortAccountsByLastName(accounts) {
  const sortedAccounts = accounts.sort((accountA, accountB) => 
  makeLowerCase(accountA.name.last) > makeLowerCase(accountB.name.last) ? 1 : -1);
  //accountA.name.last.toLowerCase() > accountB.name.last ? 1 : -1); 
  return sortedAccounts;
} 


//helper function
function makeLowerCase(accountName) {
  return accountName.toLowerCase()
}

// function makeLowerCase(Accounts) {
//   accounts.forEach((accountNames) 
// }


//get the total number of books borrowed
//parameters are account id {id} and books
// to get total need a value of 0 in new variable totalBorrows
//loop through books and then loop through borrowed books
// if condition - if the account ID === list of books that are borrowed iD
//increment by 1 in total borrows.

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



//long way to write
// function getTotalNumberOfBorrows(account, books) {
//   let totalBorrows = 0;
//   for (let i = 0; i < books.length; i++) {
//     for ( let j = 0; j < books[i].borrows.length; j++) {
//       if (account.id === books[i].borrows[j].id) {
//         totalBorrows += 1;
//       }
//     }
//   } return totalBorrows;
// }



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