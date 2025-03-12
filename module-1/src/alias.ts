type EmployeeType = {
    name: string,
    age: number,
    profession: string,
    address: string
}

const employee1 = {
    name: 'Rakib',
    age:28,
    profession: 'Web Developer',
    address: 'Uganda'
}
const employee2 = {
    name: 'Shakib',
    age:28,
    profession: 'Product Manager',
    address: 'Nygeria'
}

type EmployeeMarriedType = boolean

const isEmployeeMarried:EmployeeMarriedType = false;

type OperationType = (x:number, y:number) => number

const calculate = (
    number1: number,
    number2: number,
    operation: OperationType
) => {
return operation(number1, number2)
}

console.log(calculate(10,20, (x,y)=> x*y)
)