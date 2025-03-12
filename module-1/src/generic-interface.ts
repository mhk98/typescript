// const rollNumbers1: Array<number> = [44, 12, 4]
// const rollNumbers2: Array<string> = ["44", "12", "4"]
// const rollNumbers3: Array<boolean> = [true, false]

// const userNameAndRollNumbers4: Array<{name: string; roll: number}> = [
//     {
//         name: "Mr. X",
//         roll:1
//     },
//     {
//         name: "Mr. Y",
//         roll:2
//     },
// ]


// Generic Interface

interface CrushInterface <T, U = null> {
name: string,
husband:T,
wife?:U
}


const crush1: CrushInterface<boolean, string> = {
    name:"Nur",
    husband:true,
    wife:"Chokina"
}
const crush2: CrushInterface<string> = {
    name:"Nur",
    husband:"Mohsin Kabir"
}


interface PersonalInterface {
    name:string,
    age:number
}
const crush4: CrushInterface<PersonalInterface, PersonalInterface> = {
    name:"Nur",
husband: {
    name:"Mohsin Kabir",
    age:30

},
wife: {
    name:"Nur",
    age:23
}
}

interface HusbandInterface{
    name:string,
    salary:number
}
const crush3: CrushInterface<HusbandInterface> = {
    name:"Nur",
husband:{
    name:"Mohsin Kabir",
    salary: 35000

}
}


type GenericTuple <X, Y> = [X, Y]

type RelationWithSalaryType = {
    name:string,
    salary:number
}

interface RelationWithSalaryInterface {
    name: string,
    salary: number
}


const relation: GenericTuple<string, string> = ["Mohsin", "Nur"]
const relationWithSalary: GenericTuple<RelationWithSalaryInterface,string> = [{
    name:'Mohsin',
    salary:100000,
},
"Nur"
]


const relationWithSalary2: GenericTuple<RelationWithSalaryInterface,string> = [{
    name:'Mohsin',
    salary:100000,
},
"Nur"
]

type GenericArray<T> = Array<T>

const rollNumbers1: GenericArray<number> = [44, 12, 4]
const rollNumbers2: GenericArray<string> = ["44", "12", "4"]
const rollNumbers3: GenericArray<boolean> = [true, false]

type nameRollType = {name: string; roll: number}
const userNameAndRollNumbers4: GenericArray<nameRollType> = [
    {
        name: "Mr. X",
        roll:1
    },
    {
        name: "Mr. Y",
        roll:2
    },
]