import { Router } from "express";
import { uploader } from "../utils.js";

const route = Router();

route.get('/', (req, res) => {
    res.send("Hola esto es la home de la ruta api/products/")
})

route.post('/', uploader.single('file') ,(req, res) => {
    const body = req.body
    console.log(req.file)
    res.send("post de api/productus")
})

route.get('/:productId', (req, res) => {
    const { productId } = req.params
    res.send("Hola esto la rut /:productId")
})


export default route;