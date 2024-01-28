// Write your solution in this file!
var customerName='bob';

function upperCaseCustomerName(){
   var upperCased=customerName.toUpperCase();
   return upperCased;
}

upperCaseCustomerName();

console.log(customerName);
var bestCustomer;

function setBestCustomer(){
     bestCustomer='not bob';
    return bestCustomer;
}



function overwriteBestCustomer(){
     bestCustomer='maybe bob';
    return bestCustomer;
}

const leastFavoriteCustomer='bob';

function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer='Kim';
    return leastFavoriteCustomer;
}