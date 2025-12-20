


[].filter((el)=>{ return el.name === 'Daniel' })

function customFilter(array, fn){
    const arrayFiltered = []

    for(let i=0;i<array.length; i++) {
        if(fn(array[i])){
            arrayFiltered.push(array[i])
        }
    }

    return arrayFiltered;
}

const newArray = customFilter([2,5,4,6,10,11,35], (el) => {
    return el % 2 !== 0;
})

// console.log(newArray)

// ...



// class Persona {
//  // this -> {}
//     constructor(name){
//         this.name = name;
//     }

//     static hablar(){
//         console.log('Buenas saludo desde la clase PErsona sin instanciar')
//     }

// }


// Persona.hablar();


// class ConnectionsDB {
//     constructor(){
//         // conectando a la base de datos
//         console.log('conectando a la base de datos')
//     }
// }

// new ConnectionsDB()

// new ConnectionsDB()


class ConnectionsDB {
    static #instance = null;
    constructor(){
        // db.connect();
    }
    static getInstance (){
        // como devuelvo el valor si ya existe, sino existe la creo
        if(!this.#instance){
            console.log('No existe la instancia, creando....')
            this.#instance = new ConnectionsDB()
        }

        console.log('Instancia ya existe, devolviendo')
        return this.#instance
    }
}


const cn1 = ConnectionsDB.getInstance(); // no existe creando...
// ConnectionsDB.getInstance(); // ya existe
// ConnectionsDB.getInstance(); // ...
// ConnectionsDB.getInstance(); // ya existe
// ConnectionsDB.getInstance(); // ....

