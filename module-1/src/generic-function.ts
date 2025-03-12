//Arrow Function

const creatArray = (param: string): string[] => {

    return [param]
}


const createArray1 = <T>(param: T): T[] => {

    return [param]
}

const createArray2 = <X, Y>(param1: X, param2: Y): [X, Y] => {

    return [param1, param2]
}
function createArray3  <X, Y>(param1: X, param2: Y): [X, Y] {

    return [param1, param2]
}

type Name = {
    name:string
}
const result1 = creatArray("Bangladesh")
const result2 = createArray1<string>("Bangladesh")
const result3 = createArray1<boolean>(true)
const result4 = createArray1<Name>({name:"Bangladesh"})


const result5 = createArray2<boolean, string>(false, "USA")
const result6 = createArray2<boolean, Array<string>>(false, ["USA"])


// const addMeInMyCrushMind = <T> (myInfo:T) => {
// const crush = "Nur";
// const newData = {...myInfo, crush};
// return newData;
// }


// const myInfo = {
//     name:"Mohsin",
//     age:100,
//     salary:350000
// }

// const result7 = addMeInMyCrushMind(myInfo)
// result7