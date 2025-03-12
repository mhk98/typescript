class Animal {
//   public  name: string;
//   public  species: string;
//   public  sound: string;


    constructor(public name: string, public species: string, public sound: string) {
        // this.name =  name;
        // this.species =  species;
        // this.sound = sound;
    }


    makesound() {
        console.log(`The ${this.name} says ${this.sound}`)
    }
}

const dog = new Animal("German Shepard", "dog", "Ghew ghew")
const cat = new Animal("Catty", "cat", "Meau meau")

dog.makesound()
cat.makesound()