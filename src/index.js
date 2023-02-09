const express= require('express')
const app= express()
const path= require('path')

const port=5000

app.listen(port, () =>{
    console.log(`Server running on port ${port}`)
})

app.get('/', (req, res) =>{
    res.sendFile(path.join(__dirname,'views/inicio.html'))
})

app.get('/productos', (req, res) =>{
    res.sendFile(path.join(__dirname,'views/productos.html'))
})

app.get('/primerproducto', (req, res) =>{
    res.sendFile(path.join(__dirname,'views/primerproducto.html'))
})