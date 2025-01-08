import fs from 'fs';

const DATA_FILE = "./bookApp/data/books.json";

const readData = () => {
    return JSON.parse(fs.readFileSync(DATA_FILE));
}

const saveData = (data) => {
    fs.writeFileSync(DATA_FILE, JSON.stringify(data));
}

export const getAllBooks = () => {
    return readData();
}

export const getBookById = (bookId) => {
    let books = readData();
    return books.find(b => b.bookId == bookId);
}

export const insertBook = (book) => {
    let books = readData();
    books.push(book);
    saveData(books);
}

export const modifyBook = (book) => {
    let isModified = false;

    let books = readData();

    let index = books.findIndex(b => b.bookId == book.bookId);

    if (index > -1) {
        books[index] = book;
        saveData(books);
        isModified = true;
    }

    return isModified;
}

export const deleteBook = (bookId) =>{
    let isDeleted = false;

    let books = readData();
    let index = books.findIndex(b => b.bookId == bookId);

    if (index > -1) {
        books.splice(index, 1);
        saveData(books);
        isDeleted=true;
    } 

    return isDeleted;
}