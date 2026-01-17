import { Router } from "express";

const route = Router();

route.get('/', (req, res) => {
    res.send("Hola esto es la home de la ruta api/users/")
})

route.get('/:uid', (req, res) => {
    const { uid } = req.params
    res.send("Hola esto la rut /:uid")
})

export default route;