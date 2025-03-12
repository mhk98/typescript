// //keyof guard

// type Alphaneumeric = string | number;

// function add(param1:string|number, param2:string|number){
// if(typeof param1 === "number" && typeof param2 === "number"){
//     return param1 + param2;
// } else {
//     return param1.toString() + param2.toString();
// }
// }


// add('1', '2')
// add(1,2)


// //in guard

// type NormalUserType = {
//     name: string
// }

// type AdminUserType = {
//     name: string;
//     role: "admin";
// }

// function getUser(user: NormalUserType | AdminUserType): string {
// if('role' in user){
//     return `I am an admin and my role is ${user.role}`
// } else {
//     return 'I am a normal user'
// }
// }

// const normalUser1: NormalUserType = {name: "Mr. Kallu"}
// const adminUser1: AdminUserType = {name:"Mr. Ballu", role:"admin"}

// console.log(getUser(normalUser1))
// console.log(getUser(adminUser1))



// class Animal{
//     name: string;
//     species: string

//     constructor(name:string, species:string) {
//         this.name =  name;
//         this.species = species;
//     }

//     makesound(){
//         console.log('I am making sound')
//     }
// }

// class Dog extends Animal {
//     constructor(name:string, species:string){
//         super(name, species)
//     }

//     makebark(){
//         console.log('I am barking')
//     }
// }


// class Cat extends Animal(name:string, species:string){

//     constructor(name:string, species:string){
//      super(name,species)

//     }
//      makemeau(){
//         console.log('I am meau meau')
//      }
// }


// function isDog(animal: Animal): animal is Dog{
//     return animal instanceof Dog
// };
// function isCat(animal: Animal): animal is Cat{
//     return animal instanceof Cat
// };

// function getAnimal(animal: Animal) {
//     if(isDog(animal)){
//         animal.makebark()
//     } else if(isCat(animal)){
//         animal.makemeau()
//     } else {
//         animal.makesound()
//     }
// }

// const dog1 = new Dog ("Mr. Dog", "Barking")
// const cat1 = new Cat ("Mr. Cat", "Meau")
