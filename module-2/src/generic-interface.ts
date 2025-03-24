//Generic Interface

interface CrushInterface<T, U=null> {
    name: string,
    husband: T;
    child?: U
}


const crush1: CrushInterface<boolean> = { name: "Nur", husband:true}
const crush2: CrushInterface<string> = {name:"Nur", husband:"Mohsin"}

interface HusbandInterface {
    name:string,
    salary:number
}

const crush3: CrushInterface<HusbandInterface> = {
    name:"Nur",

    husband: {
        name:"Mohsin",
        salary:35000
    }
}

interface personInterface {
    name: string,
    age: number
}

const crush4: CrushInterface<personInterface, personInterface> = {

    name:"Nur",
    husband: {
        name:'Mohsin',
        age:30
    },
    child: {
        name:'MohsXin',
        age:10
    }
}

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
