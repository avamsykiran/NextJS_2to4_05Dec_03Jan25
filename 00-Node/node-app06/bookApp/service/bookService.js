import mysql from 'mysql2';

/*
create database booksDB;
use booksDB;
create table Books(
    bookId int primary key,
    title varchar(50) not null,
    price double not null
);
*/

const connectionConfig = {
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "booksDB"
};

var connection = mysql.createConnection(connectionConfig);

export const getAllBooks = (callBack) => {
    connection.connect((err) => {
        if (err) {
            throw err;
        }
        const qry = "SELECT * FROM Books";
        connection.query(qry, callBack);
    });
}

export const getBookById = (bookId, callBack) => {
    connection.connect((err) => {
        if (err) {
            throw err;
        }
        const qry = "SELECT * FROM Books WHERE bookId=" + bookId;
        connection.query(qry, callBack);
    });
}

export const insertBook = (book, callBack) => {
    connection.connect((err) => {
        if (err) {
            throw err;
        }
        const qry = `INSERT INTO Books VALUES(${book.bookId},'${book.title}',${book.price})`;
        connection.query(qry, callBack);
    });
}

export const modifyBook = (book, callBack) => {
    connection.connect((err) => {
        if (err) {
            throw err;
        }
        const qry =
            `UPDATE Books 
             SET title='${book.title}',price=${book.price}
             WHERE bookId=${book.bookId}`;
        connection.query(qry, callBack);
    });
}

export const deleteBook = (bookId, callBack) => {
    connection.connect((err) => {
        if (err) {
            throw err;
        }
        const qry = `DELETE FROM Books WHERE bookId=${bookId}`;
        connection.query(qry, callBack);
    });
}