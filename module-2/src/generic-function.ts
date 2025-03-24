//Arrow Function
const createArray = (param:string): string[] => {
    return [param];
}


const createArray1 = <X,Y>(param1: X, param2:Y): [X,Y] => {
    return [param1, param2]
}
function createArray2  <X,Y>(param1: X, param2:Y): [X,Y] {
    return [param1, param2]
}

const result1 = createArray1<string, string>("Bangladesh", "I love you");
const result2 = createArray1<boolean, Array<string>>(true,['USA'])

type Name = {
    name: string
}

const result3 = createArray1<Name, boolean>({
    name:"Bangladesh"
},
true
)


//Spread Operator

const addMeInMyCrushMind = <T>(myInfo:T) => {
const crush = "Kate Winslet";
const newData = {...myInfo, crush}
return newData
}

const myInfo = {
    name: "Persian",
    age:100,
    salary: 10000
}

const result5 = addMeInMyCrushMind(myInfo)
result5.