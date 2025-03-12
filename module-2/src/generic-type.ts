type GenericType<T> = Array<T>

const rollNumber2:GenericType<number> = [4, 5, 7, 9];
const rollNumber3:GenericType<string> = ["4", "5", "7", "9"];
const rollNumber4:GenericType<boolean> = [true, false];


type NameRollType = {
    name:string,
    roll:number
}
const userNameAndRollNumbers:GenericType<NameRollType> = [
    {
        name:'Mr. X',
        roll:1
    },
    {
        name:'Mr. Y',
        roll:1
    },
]

type GenericTuple<X,Y> = [X,Y]

const relation:GenericTuple<string, string> = ["Mohsin", "Nur"]


// type RelationWithSalaryType = {
//     name:string,
//     salary: number
// }

interface IRelationWithSalary{
    name:string,
    salary: number
}
const relatonWithSalary:GenericTuple<IRelationWithSalary,string>= [
    {
        name:"Mohsin",
        salary:50000
    },
    "Nur"
]
