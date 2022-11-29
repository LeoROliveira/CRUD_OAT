import mongoose from "mongoose";

mongoose.connect("mongodb+srv://leandro:123@leandro.g8cvlhb.mongodb.net/leandro-node");

let db = mongoose.connection;

export default db;