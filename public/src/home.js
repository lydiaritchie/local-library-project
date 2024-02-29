//returns a the number of books in the books array
function getTotalBooksCount(books) {
    return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

//iterate over the the borrows array and check if its true or false
function getBooksBorrowedCount(books) {
  return books.reduce((total, book) => {
      return total + book.borrows.filter(borrow => !borrow.returned).length;
  }, 0);
}

//helper function to sort the arrays by a 'count' property
function sortArrayByObjCount (array) {
  return array.sort((Obj1, Obj2) => Obj1.count < Obj2.count ? 1 : -1);
}

//genreObj is the object that represents each genre in the commonGenres array
function getMostCommonGenres(books) {
  let commonGenres = [];
  books.forEach((book) => {
    let currentGenre = book.genre;
    let genreObj = commonGenres.find((aCommonGenre) => currentGenre === aCommonGenre.name);
    genreObj == undefined ? commonGenres.push({name: currentGenre, count: 1}) : genreObj.count++;
  });
  commonGenres = sortArrayByObjCount(commonGenres);
  return commonGenres.slice(0, 5);
}

//bookObj is the object that represents each book in the popularBooks array
function getMostPopularBooks(books) {
  let popularBooks = books.map((book) => {
      return { name: book.title, count: book.borrows.length};
  });
  popularBooks = sortArrayByObjCount(popularBooks);
  return popularBooks.slice(0, 5);
}

//authorObj is the object that represents each author in the popularAuthors array
function getMostPopularAuthors(books, authors) {
  let popularAuthors = [];
  books.forEach((book) => {
    const currentAuthorObject = authors.find((author) => author.id == book.authorId);
    const currentAuthorName = `${currentAuthorObject.name.first} ${currentAuthorObject.name.last}`;
    let authorObj = popularAuthors.find((aPopularAuthor) => currentAuthorName === aPopularAuthor.name);
    authorObj == undefined ? popularAuthors.push({name: currentAuthorName, count: book.borrows.length}) : authorObj.count += book.borrows.length;
    //last line a little long but easier than if's and else's
  });
  popularAuthors = sortArrayByObjCount(popularAuthors);
  return popularAuthors.slice(0, 5);
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
