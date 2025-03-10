import mongoose from "mongoose";

let url = process.env.URI_MONGO;
console.log(url);


mongoose.connect(url)
    .then(() => console.log("Conexión a la base de datos establecida"))
    .catch(err => console.log(err));