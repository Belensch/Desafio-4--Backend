const express = require("express")

const path = require("path")
const app = express()

const routes = require("./routes/index")

const PORT = 8080

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, "/public")))
app.use("/api/productos", routes)

app.listen(PORT, (error) => {
    error ? console.log(`Error corriendo el servidor ${error}`) : console.log(`Server corriendo en el puerto : ${PORT}`);
})