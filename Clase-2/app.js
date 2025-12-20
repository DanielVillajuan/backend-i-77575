const persona = {
    nombre: "Lucas",
    apellido: "Fernandez",
    edad: 50,
    domicilio: "av siempre viva 123",
    estado_civil: "Soltero"
}

// ["lucas","Fernandez", 50, "Av siempre viva 123"]

const values = Object.values(persona)

console.log(values)

const keys = Object.keys(persona)

console.log(keys)


// [].reduce((el, variable)=>{}, 0) // 

const productos = [
    {
        descripcion: "Arroz",
        precio: 1500,
        stock: 5000,
        vencimiento: "13/12/2026",
        categoria: "Almacen"
    },
    {
        descripcion: "Fideos",
        precio: 500,
        stock: 1000,
        vencimiento: "13/02/2026",
        categoria: "Almacen"
    },
    {
        descripcion: "Gaseosa",
        precio: 3500,
        stock: 10000,
        vencimiento: "13/01/2026",
        categoria: "Frio"
    },
    {
        descripcion: "Pelota",
        precio: 4500,
        stock: 100,
        categoria: "Juguete"
    }
]


/*
    {
        Almacen: [{}],
        Juguete: [{}],
        Frio: [{}]
    }
*/

const segmentados = productos.reduce((acum, prod)=>{
    const { categoria } = prod

    if(acum[categoria]) {
        acum[categoria].push(prod)
        return acum;
    } else {
        return {
            ...acum,
            [categoria]: [{...prod}] // crea lo que venga como categoria y le mete un array con el producto
        }
    }

    // prod.categoria

    // siempre debe de retornar un valor, se lo va actualizar a acum
}, {})

console.log(segmentados)


// CALLBACKS 

// const fn = (error, respuesta) => {
//     if(error) {
//         // hacer algo para controlarlo
//     } else {
//         fn2(error, respuesta)
//     }
// }


const dividir = (dividendo, divisor) => {
    return new Promise((resolve, reject) => {
    if (divisor === 0){
        reject("No se puede dividir por cero maquina, intenta con otro numero");
    }else {
        resolve(dividendo/divisor)
    }
})
}


// Estados de la promesa

// Pendiente

// resuelve ok

// se rechaza
console.log("iniciao del programa----")
// dividir(10, 0)
//     .then((resultado)=>{console.log(resultado)})
//     .catch((error)=>{
//         console.log("Error:",error)
//     })


const funcionControlada = async() => {
    try {
        const respuesta = await dividir(10,2)
        console.log(respuesta)
    }catch (err) {
        console.log(err);
    } 
}
funcionControlada()
console.log("FIN del programa----")
