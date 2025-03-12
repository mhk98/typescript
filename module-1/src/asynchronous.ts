//Mocking
const makePromise = () => {
 return  new Promise <string>((resolve, reject) => {
      
        const data:string = "Data is fetch";
    if(data) {
        resolve(data)
    } else {
        reject("Failed to fetch data")
    }
    })
}
const makePromiseBoolean = () => {
 return  new Promise <boolean>((resolve, reject) => {
      
        const data:boolean = false;
    if(data) {
        resolve(data)
    } else {
        reject("Failed to fetch data")
    }
    })
}


const getPromiseData = async(): Promise<string> => {
    const data = await makePromise();
    return data;
}
const getPromiseDataBoolean = async(): Promise<boolean> => {
    const data = await makePromiseBoolean();
    return data;
}

interface ITodo {
    userId: number;
    id: number;
    title: string;
    completed: boolean
}

const getTodo = async():Promise<ITodo> => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1")
    return await response.json()
} 


const getTodoData = async():Promise<void> => {
const result = await getTodo();
console.log(result)
}


getTodoData()


