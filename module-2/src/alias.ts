type CrushType = {
    name: string;
    age?: number;
    profession: string;
    address: string;  
}
const crush1: CrushType = {
    name: "Nur",
    age: 22,
    profession: "Web Developer",
    address: "Mirpur"
};


const crush2: CrushType = {
    name: "Nur Nahar",
    age: 22,
    profession: "Web Developer",
    address: "Mirpur"
}


type CrushMarriedType = boolean

const isCrushMarriedType:CrushMarriedType = true

type CourseNameType = string

const courseName:CourseNameType = "Next Level Web Development"


type OperationType = (x:number, y:number) => number

const calculate = (
    number1: number,
    number2: number,
    operation: OperationType
) => {
return operation(number1, number2)
}

console.log(calculate(10,20, (x,y)=> x+y)
)