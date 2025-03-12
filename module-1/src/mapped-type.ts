const areaOfNumbers = [1,2,3] 
const arrayOfStrings = areaOfNumbers.map((number)=> number.toString())

console.log(arrayOfStrings)


type Area <T> = {
    [key in keyof T] : T[key]; //
}

const area1 : Area<{height:number, width:string}> = {width:"Mohsin", height:12 }



type AreaNumber = {
    height: number;
    width: number
}

type A = AreaNumber["height"] // look up types
type B = keyof AreaNumber; // "width" | "height"