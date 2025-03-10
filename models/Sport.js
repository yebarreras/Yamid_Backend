import {Schema,model} from "mongoose"

let collection = "sports"
let schema = new Schema ({
    name: {type: String, required: true},
    description: {type: String, required: true},
    image: {type: String, required: true},
    players: {type: Number, required: true},
},{
    timestamps: true
})

let Sport = model(collection,schema)
export default Sport