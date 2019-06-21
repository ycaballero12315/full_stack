const express = require('express')

const app = express()

const bodyParse = require('body-parser')

// configuramos la app para que use bodyParser(), esto nos dejara usar la informacion de los POST
app.use(bodyParse.urlencoded({extended:true}))
app.use(bodyParse.json())

const Puerto = process.env.Puerto || 3000  // seteamos el puerto

const router = express.Router() //Creamos el router de express

// app.get('/', (req,res)=>res.send(`Ya estamos dentro ${Puerto}`))

// Seteamos la ruta principal
app.get('/',(req,res)=>res.json({message: 'Hola JSON :)'}))

// Le decimos a la aplicación que utilize las rutas que agregamos
app.use('/api', router)
// app.route('/api').get((req,res)=>res.json({message: 'Otra ruta :)'}))
// .post((req,res)=>res.json({message: 'Ahora esta agregado :)'}))

app.listen(Puerto,()=>console.log('Arrancado, listo'))



