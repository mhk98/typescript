const searchName = (value: string | null) => {
if(value ===  null) {
console.log("There is nothing to search")
} else {
    console.log("Searching...")
}
}

searchName("Kabir")


// km^-1  --> ms^-1

const getMyCarSpeed = (speed: unknown) => {
if(typeof speed === "number") {
const convertedSpeed = (speed * 1000) / 3600;
console.log(`My speed is ${convertedSpeed}`)
}

if(typeof speed === "string") {
    const [value, unit] = speed.split(" ") // ['10', 'km^-1']
    const convertedSpeed = (parseFloat(value) * 1000) /3600;
    console.log(`My speed is ${convertedSpeed}`)

} else {
    console.log("There is wrong type")
}
}

getMyCarSpeed(10)
getMyCarSpeed("15 kmh^-1")
getMyCarSpeed(true)


function  throwError(message: string): never {
    throw new Error(message)
}

throwError("Error hoyeche")