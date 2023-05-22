import app from "./app.js";
import { PORT } from "./config.js";

// ESCUCHER EN EL PUERTO
app.listen(PORT)

console.log('running on port ', PORT)