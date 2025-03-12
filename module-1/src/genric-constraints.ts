// type MandatoryTypes = {name:string, age:number, salary:number}
// interface MandatoryInterface {name:string, age:number, salary:number}


// const addMeInMyCrushMind = <T extends MandatoryInterface> (myInfo:T) => {
//     const crush = "Nur";
//     const newData = {...myInfo, crush};
//     return newData;
//     }
    
//     type MyInfoType = {
//         name:string,
//         age:number,
//         salary:number
//     }

//     const myInfo:MyInfoType = {
//         name:"Mohsin",
//         age:100,
//         salary:350000
//     }
    
//     const result7 = addMeInMyCrushMind(myInfo)
    

    type PersonType = {
        name: string;
        age: number;
        address: string
    };

    type newType = "name" | "age" | "salary"; // manual union type

    type newTypeUsingKeyOf = keyof PersonType;

    // const a: newType = "age"
    // const b: newTypeUsingKeyOf = "address"


    function getProperty<X, Y extends keyof X>(obj:X, key:Y){

        obj[key]
    }


    // ({name:"Mr. X", age:100})  

    // const a={
    //     name: "Mr. X", age:100
    // }

    // a["age"]


    const property = getProperty({name: "Mr. X", age:100}, "age")
