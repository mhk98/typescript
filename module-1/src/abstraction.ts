//using interface

// interface IVehicle {
//     startEngine(): void;
//     stopEngine(): void;
//     move(): void;
// }

// class Vehicle implements IVehicle {

//     constructor (
//         public name: string,
//         public brand: string, 
//         public model: number
//     ){
        
//     }
//     startEngine(): void {
//         console.log('I am starting Engine...')
//     }

//     stopEngine(): void {
//         console.log('I am testing Engine...')
//     }
//     move(): void {
//         console.log('I am testing Engine...')
//     }

//     test() {
//         console.log('I am for testing purpose')
//     }
// }


// const vehicle1 = new Vehicle ('Car', 'Toyota', 3000)



//using abstract class
abstract class Vehicle {
    constructor (
        name: string,
        brand: string,
        model: number
    ) {}

 abstract   startEngine(): void

 abstract   stopEngine(): void 

    move(): void {
        console.log('I am stopping engine')
    }

    test() {
        console.log('I am for testing purpose')
    }
}



class Car extends Vehicle {
    startEngine(): void{
        console.log('I am starting engine...')
    }

    stopEngine(): void {
        console.log('I am stop engine..')
    }
}