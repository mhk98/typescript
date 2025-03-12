const age:number = 22 ;

// if(age >= 18) {
//     console.log("Yes")
// } else {
//     console.log("No")
// }


const idAdult = age >= 18 ? "Yes" : "No";


//Nullish coalescing operator
//Null and Undefined

console.log(idAdult)

const isAuthenticatedUser = ""
const userName = isAuthenticatedUser ?? 'Guest';
const userName2 = isAuthenticatedUser ? isAuthenticatedUser : 'Guest';

console.log(userName)
console.log(userName2)


type Manush = {
    name: string;
    age: number;
    address : {
        city: "No City";
        road: "No Road";
        home?: "" 
    }
}


const manush1: Manush = {
    name: "Manush",
    age:100,
    address: {
        city: "No City",
        road: 'No Road'
    }
}


const home = manush1?.address?.home ?? "No Home";

console.log(home)