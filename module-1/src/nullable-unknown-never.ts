const searchName = (value: string | null) => {

    if (value === null) {
        console.log('There is nothing to search')
    } else {
        console.log('Searching...')
    }
}

searchName('mazba')

const getMyCarSpeed = (speed: unknown) => {
    
    if (typeof speed === 'number'){
        const convertedSpeed = (speed*1000) / 3600
        console.log(`My car speed is ${convertedSpeed}`)
    }
    
    if (typeof speed === 'string') {
        const [value, unit] = speed.split(" ") // ['18' , 'km^-1']
        const convertedSpeed = (parseFloat(value)*1000) / 3600;
        console.log(`My car speed is ${convertedSpeed}`)
    } 


    
}


getMyCarSpeed(15)
getMyCarSpeed('15 km^-1')


// function throwError (message: string):never {
//     throw new Error(message)
// }

// throwError('Error hoyeche')