import { Router } from "express";

const route = Router();

route.get('/', (req, res) => {
    const user = {
        nombre: "Daniel",
        edad: 30
    }
    res.render('index', user)
})

route.get('/perfil', (req, res) => {
    const user = {
        nombre: "Daniel",
        edad: 30
    }
    res.render('perfil', user)
})

route.get('/products', (req, res) => {
    const products = [{
        file: '/public/img/arroz.png',
        nombre: "arroz",
        precio: 1500
    }]
    res.render('products', products)
})


export default route;