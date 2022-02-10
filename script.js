// with draw x amoumt of money
// update balance 
// .50 transaction fee 

var atm = function(amount) {
  balance = 1000
  if (amount > 0) {
    return amount + balance + 0.50
  } else {
    return "Please add more money"
  }
};

console.log(atm(100))