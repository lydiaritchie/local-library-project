function findAuthorById(authors, id) {
  return authors.find((author) => author.id === id);
}

function findBookById(books, id) {
  return books.find((book) => book.id === id);
}

//returns an array with two arrays inside
//one array is all the book currently checkedout
//the second array are all the books that have been returned
function partitionBooksByBorrowedStatus(books) {
  let checkedout = [];
  let returned = [];
  books.forEach((book) => {
    book.borrows.some(borrow => !borrow.returned) ? checkedout.push(book) : returned.push(book);
  });
  return [checkedout, returned];

}

function getBorrowersForBook(book, accounts) {
  let borrowers = [];
  console.log("in the function");
  book.borrows.forEach((borrow) => {
    if (borrowers.length === 10) return;
    let currentAccount = accounts.find((account) => account.id == borrow.id);
    borrowers.push({...currentAccount, returned: borrow.returned});
  });
  return borrowers;
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
