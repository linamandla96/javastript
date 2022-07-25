



function splitBills(amount,numOfPeople){
 const amountToPay = amount/numOfPeople;
 return amountToPay.toFixed();
}
console.log(splitBills(800,4));