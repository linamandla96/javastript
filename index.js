console.log("hello world");
var username = "Jodie";
var age = 21;
var isAldult = true;
 const firstName = "Lina"
 const surname ="Jay"

console.log(username);
let price = 20;
const summerDiscount= 5;
const  winterDiscount= 10;
let summerSales = false;
if(summerSales){
  price = price - summerDiscount;

}
else{
    price = price - winterDiscount;
}
console.log("final price:" ,price);



// *Checking user age
const age = 24;
if(age>=18){
    console.log("user is a minor")
}
else{
    console.log("user is an Adult");
}


// check user type is Admin,Customer ,enterprise

const userType = "admin";
if(userType ==="admin"){
console.log("admin user logged in");
}
else if(userType ==="customer"){
    console.log("customer user logged in");
}
else{
    console.log("enterprise user logged in");
}