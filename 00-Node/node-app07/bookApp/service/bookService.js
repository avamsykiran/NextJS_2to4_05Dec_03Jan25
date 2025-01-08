import mongodb from 'mongodb';

var mongoClient = mongodb.MongoClient;

const dbUrl = "mongodb://localhost:27017/";
const dbName = "booksDB";
const colName = "books";

export const getAllBooks = (callBack) => {
    mongoClient.connect(dbUrl, (err, db) => {
        if (err) {
            throw err;
        } else {
            db.db(dbName).collection(colName)
                .find({}).toArray((err, result) => {
                    callBack(err, result);
                    db.close();
                });
        }
    });
}

export const getBookById = (bookId, callBack) => {
    mongoClient.connect(dbUrl, (err, db) => {
        if (err) {
            throw err;
        } else {
            db.db(dbName).collection(colName)
                .findOne({},{ bookId: bookId }, (err, result) => {
                    callBack(err, result);                    
                    db.close();
                });
        }
    });
}

export const insertBook = (book, callBack) => {
    mongoClient.connect(dbUrl, (err, db) => {
        if (err) {
            throw err;
        } else {
            db.db(dbName).collection(colName)
                .insertOne(book, (err, result) => {
                    callBack(err, result);
                    db.close();
                });
        }
    });
}

export const modifyBook = (book, callBack) => {
    mongoClient.connect(dbUrl, (err, db) => {
        if (err) {
            throw err;
        } else {
            db.db(dbName).collection(colName)
                .updateOne({ bookId: book.bookId }, {$set:book}, (err, result) => {
                    callBack(err, result);
                    db.close();
                });
        }
    });
}

export const deleteBook = (bookId, callBack) => {
    mongoClient.connect(dbUrl, (err, db) => {
        if (err) {
            throw err;
        } else { 
            db.db(dbName).collection(colName)
                .deleteOne({},{ bookId: bookId }, (err, result) => {
                    callBack(err, result);
                    db.close();
                });
        }
    });
}