// phase-1-scope-lab.js

// 1. declare customerName to be bob in global scope
global.customerName = 'bob';

// 2. upperCaseCustomerName()
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

// 3. setBestCustomer()
function setBestCustomer() {
  global.bestCustomer = customerName;
}

// 4. overwriteBestCustomer()
function overwriteBestCustomer() {
  global.bestCustomer = 'not bob';
}

// 5. changeLeastFavoriteCustomer()
function changeLeastFavoriteCustomer() {
  global.leastFavoriteCustomer = 'someone else';
}

// Export the functions
module.exports.upperCaseCustomerName = upperCaseCustomerName;
module.exports.setBestCustomer = setBestCustomer;
module.exports.overwriteBestCustomer = overwriteBestCustomer;
module.exports.changeLeastFavoriteCustomer = changeLeastFavoriteCustomer;
