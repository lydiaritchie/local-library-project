//returns the account object that has the matching id
function findAccountById(accounts, id) {
    return accounts.find((account) => account.id === id);
}

//returns the sorted array of last names alphabetically
function sortAccountsByLastName(accounts) {
    return accounts.sort((account1, account2) => {
      const lastName1 = account1.name.last;
      const lastName2 = account2.name.last;
      return lastName1.toLowerCase() > lastName2.toLowerCase() ? 1 : -1;
    });
}

//returns a _number_ that represents the number of times the account's ID appears in any book's 
//go through the books array, for each book find the account ID, then add 1 for each book found
function getTotalNumberOfBorrows(account, books) {
  const accountId = account.id;
  let total = 0;
  return books.reduce((total, book) => {
    return total + (book.borrows.some((borrow) => borrow.id === accountId) ? 1 : 0);
  }, 0);
  return total;
}

//returns an array of book objects that represents all books currently
function getBooksPossessedByAccount(account, books, authors) {
  let booksPossessed = [];
  books.forEach((book) => {
    let isAMatch;
    isAMatch = book.borrows.some((borrow) => borrow.id === account.id && !borrow.returned);
    //console.log(`does the book match with an account id: ${isAMatch}`);
    let bookAuthor = authors.find((author) => author.id == book.authorId);
    if(isAMatch) {
      booksPossessed.push({...book, author: bookAuthor});
    };
  });
  return booksPossessed;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
