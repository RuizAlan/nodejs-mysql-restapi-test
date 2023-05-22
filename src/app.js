// IMPORTAR EXPRESS E INSTANCIARLO EN UNA CONSTANTE
import express from 'express'

// IMPORTAR LAS RUTAS
import employeesRoutes from "./routes/employees.routes.js";
import indexRoutes from "./routes/index.routes.js";

const app = express()

app.use(express.json())

// RUTEO CON LOS MÉTODOS
app.use('/api', employeesRoutes)
app.use(indexRoutes)

app.use((req, res, next) => {
    res.status(404).json({
        message: 'Endpoint not found'
    })
})

export default app