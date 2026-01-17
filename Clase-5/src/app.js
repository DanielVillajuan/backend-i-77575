import express from 'express'
import handlebars from 'express-handlebars'

import UsersRoute from './routes/usuarios.route.js'
import ProductsRoute from './routes/productos.route.js'
import ViewsRoute from './routes/vistas.route.js'
import __dirname from './utils.js'

const app = express()

app.engine('handlebars', handlebars.engine()) // configuracion por defecto del motor de plantilla

app.set('views', __dirname + '/views')
app.set('view engine', 'handlebars')

// antes de ejecutra y cargar todo el codigo que sigue, cargame esta ruta y ejecutala
app.use(express.json())
app.use('/static', express.static(__dirname + '/public'))

console.log('__dirname -> ', __dirname) // ruta absoluta

app.use('/api/users/', UsersRoute) 
app.use('/api/products/', ProductsRoute) 
app.use('/', ViewsRoute)

app.listen(8080, () => {
    console.log("Servidor ON")
})