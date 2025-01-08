import * as bs from "../service/bookService.js";

export const defaultGetHandler = (req, res) => {
    res.status(200);
    res.send(bs.getAllBooks());
}

export const getByIdHandler = (req, res) => {
    let bookId = req.params.id;

    let book = bs.getBookById(bookId);

    if (book) {
        res.status(200);
        res.send(book);
    } else {
        res.status(404);
        res.send();
    }
}

export const createBookHandler = (req, res) => {

    let book = {
        bookId: req.body.bookId,
        title: req.body.title,
        price: req.body.price
    };

    bs.insertBook(book);
    res.status(201);
    res.send(book);
    
}

export const modifyBookHandler = (req, res) => {

    let book = {
        bookId: req.body.bookId,
        title: req.body.title,
        price: req.body.price
    };

    let isModified = bs.modifyBook(book);

    if(isModified){
        res.status(202);
        res.send(book);
    }else{
        res.status(500);
        res.send();
    }
}

export const deleteByIdHandler = (req, res) => {
    let bookId = req.params.id;

    let isDeleted = bs.deleteBook(bookId);
  
    if (isDeleted) {
        res.status(204);
    } else {
        res.status(404);
    }

    res.send();
}