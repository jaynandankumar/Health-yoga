import mongoose from "mongoose";

const bookSchema=mongoose.Schema({

    name:"string",
    price :"Number",
    category:"string",
    Image :"string",
    title:"string",
});
const Book = mongoose.model("Book",bookSchema);

export default Book;