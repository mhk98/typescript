//normal function
//default parameter
function add(num1:number, num2:number=10):number {
    return num1 + num2
}

add(30)

const addArrow = (num1:number, num2:number):number => num1+num2;

addArrow(4, 4)

const arr = [1, 4, 5, 8 ]
const newArray = arr.map((elem:number) => elem * elem)

// const person: {
//     name:string,
//     balance:number,
//     addBalance(money:number):string;
// } = {
//     name: "Kabir",
//     balance: 5,
//     addBalance(money:number) {
//     return `My new balance is ${this.balance + money}`;
//     }
// }

const person: {
    name:string,
    balance:number,
    addBalance(money:number):void;
} = {
    name: "Kabir",
    balance: 5,
    addBalance(money:number) {
    console.log(`My new balance is ${this.balance + money}`) ;
    }
}


const myFriends = ['chandler', 'joey', 'ross' ]
const newFriends = ['monica', 'rachel', 'pheobe']

myFriends.push(...newFriends)

console.log(myFriends)


const greetFriends = (...friends: string []): void => friends.forEach((friend) => console.log(`Hii ${friend}`)) 


greetFriends('a', 'b', 'c')

//Destructure
const myBestFriend = {
    fullName: 'kabir',
    age:30
}

const {fullName} = myBestFriend;
console.log(fullName)