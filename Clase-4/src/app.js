import express from 'express'

const app = express()



app.get('/', (req, res) => {
    res.send("Home")
})

app.get('/saludo', (req, res)=> {
    
    res.send({mensaje:"Hola como estas te saludo desde el endpoint /saludo"})
})

app.get('/despedirse', (req, res)=> {
    
    res.send("Adios")
})

const BBDD_USUARIOS = [
    {id: 1, nombre: "David", edad: 18},
    {id: 2, nombre: "MArcelo", edad: 20},
    {id: 3, nombre: "Andres", edad: 31}
]

app.get('/usuarios/:id', (req, res) => {
    const id = req.params.id
    const queryParams = req.query
    console.log(queryParams)

    const usuarioEncontrado = BBDD_USUARIOS.find((usuario)=> {
        return usuario.id === parseInt(id)
    })

    if(!usuarioEncontrado) { return res.status(404).send("No existe el usuario")}
    const limit = req.query.limit
    // limito el array de productos a el valor de limit
    // [1000 elementos]
    // 10 primeros
    // slice(0,10)
    // const arrayLimitado = slice(0,limit)
    res.send("El usuario consultado tiene como nombre: " + usuarioEncontrado.nombre)
})

app.get('/usuarios/:id/perfil', (req, res) => {
    const id = req.params.id
    const usuarioEncontrado = BBDD_USUARIOS.find((usuario)=> {
        return usuario.id === parseInt(id)
    })

    if(!usuarioEncontrado) { return res.status(404).send("No existe el usuario")}
  
    res.send("Perfil del usuario: " + usuarioEncontrado.nombre)
})

app.post('/api/products/', (req, res) => {
    const body = req.body
    // en body voy a tener todo lo que me manden por body.
    res.send("Perfil del usuario: " + usuarioEncontrado.nombre)
})

app.put('/api/products/:pid', (req, res) => {
    const pid = req.params
    const body = req.body

    // pid busco el producto, lo recupero y le piso los valores con lo que tenga en body
    // una vez pisado, guardo de nuevo el produto dentro del archivo
 
    res.send()
})

app.delete('/api/product/:pid', (req, res) => {
    const pid = req.params
    // filtro por todos los elementos que no sean el pid
    
})

app.get('/api/products')

app.listen(8080, () => {
    console.log("Servidor ON")
})