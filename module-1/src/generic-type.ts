// // const rollNumbers1: Array<number> = [44, 12, 4]
// // const rollNumbers2: Array<string> = ["44", "12", "4"]
// // const rollNumbers3: Array<boolean> = [true, false]

// // const userNameAndRollNumbers4: Array<{name: string; roll: number}> = [
// //     {
// //         name: "Mr. X",
// //         roll:1
// //     },
// //     {
// //         name: "Mr. Y",
// //         roll:2
// //     },
// // ]


// type GenericTuple <X, Y> = [X, Y]

// type RelationWithSalaryType = {
//     name:string,
//     salary:number
// }

// interface RelationWithSalaryInterface {
//     name: string,
//     salary: number
// }


// const relation: GenericTuple<string, string> = ["Mohsin", "Nur"]
// const relationWithSalary: GenericTuple<RelationWithSalaryInterface,string> = [{
//     name:'Mohsin',
//     salary:100000,
// },
// "Nur"
// ]


// const relationWithSalary2: GenericTuple<RelationWithSalaryInterface,string> = [{
//     name:'Mohsin',
//     salary:100000,
// },
// "Nur"
// ]

// type GenericArray<T> = Array<T>

// const rollNumbers1: GenericArray<number> = [44, 12, 4]
// const rollNumbers2: GenericArray<string> = ["44", "12", "4"]
// const rollNumbers3: GenericArray<boolean> = [true, false]

// type nameRollType = {name: string; roll: number}
// const userNameAndRollNumbers4: GenericArray<nameRollType> = [
//     {
//         name: "Mr. X",
//         roll:1
//     },
//     {
//         name: "Mr. Y",
//         roll:2
//     },
// ]