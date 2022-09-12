const { template } = require('@babel/core')

function totalPages(arrayItems, rowsPerPage) {
  let getTotalPages;
  let getTotalRows;
  if (rowsPerPage === null || rowsPerPage === undefined || rowsPerPage === 0) {
    getTotalPages = 1;
    return getTotalPages;
  } else if (arrayItems === null || arrayItems === undefined) {
    getTotalPages = undefined;
    return getTotalPages;
  } else {
    for (let i of arrayItems) {
      getTotalRows = i;
    }
    getTotalPages = getTotalRows/rowsPerPage;
    return Math.ceil(getTotalPages);
  }
}
module.exports = totalPages
// console.log(testTotalPages([1, 2, 3, 4, 5, 6], 2))