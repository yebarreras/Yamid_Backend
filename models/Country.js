import { Schema, model } from "mongoose";

let collection = "countries"
let schema = new Schema({
    name: { type: String, required: true },
    population: { type: Number, required: true },
    flag: { type: String, required: true }
}, {
    timestamps: true
})

let Country = model(collection, schema)
export default Country