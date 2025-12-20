import fs from 'fs'

// fs.writeFileSync('./test.txt','Nuevo contenido')
// fs.unlinkSync('./test.txt')

// const existe = fs.existsSync('./test.txt')

// if(existe) {
//     const contenido = fs.readFileSync('./test.txt','utf-8')
//     console.log('contenido actual ->', contenido)

//     fs.appendFileSync('./test.txt', 'esto es nuevo de lo nuevo mas nuevo con fs')
//     const contenidoActualizado = fs.readFileSync('./test.txt','utf-8')
//     console.log('contenido actualizado -> ', contenidoActualizado)
// }

// fs.writeFile('./test2.txt','Contenido creado con el callback', (error) => {
//     if(error) {
//         return console.log('Error al momento de escribir el archivo')
//     }

//     fs.readFile('./test2.txt', 'utf-8', (error, resultado) => {
//         if(error) {
//         return console.log('Error al momento de leer el archivo')
//         }

//         console.log(resultado)
//         fs.appendFile('./test2.txt', 'Mas contenido', (error) => {
//             if(error) {
//                 return console.log('Error al momento de actualizar el archivo')
//             }
//             fs.readFile('./test2.txt','utf-8', (error, resultado) => {
//                 if(error) {
//                     return console.log('Error al momento de leer nuevamente el archivo')
//                 }
//                 console.log(resultado)
//             })
//         })
//     })
// })

// async function manejoDeArchivos(){
//     try {
//         const path = './testPromesa.txt'
//         await fs.promises.writeFile(path,'Informacion con promesas')

//         const contenido = await fs.promises.readFile(path, 'utf-8')
//         console.log(contenido)
        
//         await fs.promises.appendFile(path,'mas contenido con promsesas')

//         const contenido2 = await fs.promises.readFile(path, 'utf-8')
//         console.log(contenido2)
//     } catch (e) {
//         console.log('Error -', e)
//     }
// }

// manejoDeArchivos()

/*
    Crear un usuario y consultar los usuarios guardados.

    El Manager debe vivir en una clase en un archivo externo llamado UsersManager.js (Como el realizado en la clase pasada).
    El método “Crear usuario” debe recibir un objeto con los campos:
    Nombre
    Apellido
    Edad
    Curso
    El método debe guardar un usuario en un archivo “Usuarios.json”, deben guardarlos dentro de un arreglo, ya que se trabajarán con múltiples usuarios

    El método “ConsultarUsuarios” debe poder leer un archivo Usuarios.json y devolver el arreglo correspondiente a esos usuarios
*/

class UsersManager {
    static #path = './usuarios.json'
    static async CrearUsuarios(nombre, apellido, edad, curso){
        const existe = fs.existsSync(this.#path);

        if(!existe) {
            const dataVacia = { payload: [] } 
            await fs.promises.writeFile(this.#path, JSON.stringify(dataVacia))
        }

        // el archivo existe o existe
        const resultado = await fs.promises.readFile(this.#path, 'utf-8')
        const data = JSON.parse(resultado)
        // { payload: [] }

        const nuevoUsuario = {
            nombre,
            apellido,
            edad,
            curso
        }
        data.payload.push(nuevoUsuario);

        await fs.promises.writeFile(this.#path, JSON.stringify(data))

    }

    static async ConsultarUsuarios() {
        const resultado = await fs.promises.readFile(this.#path, 'utf-8')
        const data = JSON.parse(resultado)
        return data.payload
    }
}

//UsersManager.CrearUsuarios('Daniel','Ramirez', 30, 'BACKEND II')
try{
    const data = await UsersManager.ConsultarUsuarios()
    console.log(data)
} catch (err) {
    console.log(err)
}