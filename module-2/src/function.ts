//normal function

function add(num1:number, num2:number = 10){
    return num1+num2;
}


// Default value like number = 10 all time use korte hobe 2nd parameter hisebe

add(20,10)
const addArrow = (num1:number, num2:number): number=> num1+num2;

const arr = [1,4,7,8]

const newArray = arr.map((elem:number)=>elem*elem);


const person: {
    name: string,
    balance: number,
    addBalance(money: number):number;
} = {
    name: "Mohsin",
    balance: 5,
    addBalance(money: number) {
        return this.balance + money;
        // console.log(`My balance is ${this.balance + money}`)
    }
}


//spread operator

const myFriends = ["Sakib", "Akib", "Rakib"]
const newFriends = ["Abul", "Kabul", "Tabul"]

myFriends.push(...newFriends)


//Rest operator
const greetFriends = (
    ...friends:string[]
):void => friends.forEach((friend)=>console.log(friend))


greetFriends("Kashem", "Hasem", "Gasem", "English Bhai")


const myBestFriend = {
    fullName: "Abul Bashar",
    age: 24
}

const {fullName} = myBestFriend;

console.log(fullName)