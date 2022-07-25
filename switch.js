// check user type is Admin,Customer ,enterprise

const userType = "admin";

switch(userType){
    case "root":
        console.log("Root user logged in");
        break;
        case "super-admin":
        console.log("Super-admin user logged in");
        break;
        case "admin":
        console.log("Admin user logged in");
        break;
        case "":
        console.log("Root user logged in");
        break;
        case "customer":
        console.log("Customer user logged in");
        break;
        case "enterprise":
        console.log("enterprise user logged in");
        break;

        default:
            console.log("No user logged in")
}
console.log("done")

// Greeting using switch statement

const time = "morning";
switch(time){
    case "morning":
        console.log("Good Morning!");
        break;
        case "afternoon":
        console.log("Good Afternoon!");
        break;
        case "night":
        console.log("Good Night!");
        break;
        default:
        console.log("Hello");
        

}
console.log("Done");
// if(userType ==="admin"){
// console.log("admin user logged in");
// }
// else if(userType ==="customer"){
//     console.log("customer user logged in");
// }
// else{
//     console.log("enterprise user logged in");
// }