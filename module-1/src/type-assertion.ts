let emni : any;

emni = "Next level web development";

(emni as string).length


function kgToGram (param: string | number): string | number | undefined {
    if(typeof param === "string") {
        const value = parseFloat(param) * 1000;
        return `The convert result is: ${value} gram`
    }

    if(typeof param === "number") {
const value = param*1000
return `The convert result is: ${value}`
    }
}


const resultToBeNumber = kgToGram(1000) as number

console.log(resultToBeNumber)