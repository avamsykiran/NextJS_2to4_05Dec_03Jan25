const PORT = 7878;

import express from "express";
import bp from "body-parser"; 
import cors from "cors"
import * as bc from "./booksApp/controller/booksController.js";

var app = express();

app.use(bp.urlencoded({extended:false}));
app.use(bp.json());
app.use(cors());

//Routing or Url Mapping
//------------------------------------
app.get("/books",bc.defaultGetHandler);
app.get("/books/:id",bc.getByIdHandler);
app.post("/books",bc.createBookHandler);
app.put("/books",bc.modifyBookHandler);
app.delete("/books/:id",bc.deleteByIdHandler);

app.listen(PORT,()=>{
    console.log(`Server launched on port#${PORT}`);
});