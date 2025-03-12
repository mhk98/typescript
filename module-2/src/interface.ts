type User = {
    name: string,
    age: number
}

type extendedUser = User & {
    role: string
}

interface IUser {
    name: string,
    age: number
}

interface IExtendedUser extends IUser {
    role: string
}

const userWithTypeAlias: User = {
    name: "Type Alias",
    age:100
}


const userWithInterface: IUser = {
    name: "Interface",
    age: 200
}


const user1: extendedUser = {
    name: "Mohsin",
    age:100,
    role: "admin"
}
const user2: IExtendedUser = {
    name: "Mohsin",
    age:100,
    role: "admin"
}



type rollNumber = number

//Object, Function, Array ----> all are kind of object
//We use interface for class and object. For other we use type alias

type addNumbersType = (num1:number, num2:number)=>number

// interface IAddNumbers{
//     (num1:number, num2:number):number
// }

const addNumbers:addNumbersType =(num1, num2) => num1+num2

type rollNumber1Type = number[]

// interface IRollNumberType {
//     [index:number]: number
// }

const rollNumber1:rollNumber1Type = [1,3,4,7]