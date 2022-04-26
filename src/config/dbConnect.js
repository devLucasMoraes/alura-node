import mongoose from "mongoose";

mongoose.connect("mongodb+srv://trismegistus:123@alura-node.yl9j0.mongodb.net/alura-node")

let db = mongoose.connection

export default db