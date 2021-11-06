// File Name: comp229-f2021-midTerm-300955234-2
// Author Name: Ameen 
// Student ID: 300955234
// Web App Name: Managing Books 

// create a reference to the model
const book = require('../models/book');
let Book = require('../models/book');

// Gets all books from the Database and renders the page to list all books.
module.exports.bookList = function (req, res, next) {
    Book.find((err, bookList) => {
        // console.log(bookList);
        if (err) {
            return console.error(err);
        }
        else {
            res.render('book/list', {
                title: 'Book List',
                books: bookList
            })
        }
    });
}

// Gets a book by id and renders the details page.
module.exports.details = (req, res, next) => {

    let id = req.params.id;

    Book.findById(id, (err, bookToShow) => {
        if (err) {
            console.log(err);
            res.end(err);
        }
        else {
            //show the edit view
            res.render('book/details', {
                title: 'Book Details',
                book: bookToShow
            })
        }
    });
}


//1 display add page
// Renders the Add form using the add_edit.ejs template
module.exports.displayAddPage = (req, res, next) => {

    res.render('book/add_edit', {
        title: "Book List",
        action: "/book/add",
        book: {}
    })
}

//2 process add page
// Processes the data submitted from the Add form to create a new book
module.exports.processAddPage = (req, res, next) => {

    book.create({
        Title: req.body.Title,
        Description: req.body.Description,
        Price: req.body.Price,
        Author: req.body.Author,
        Genre: req.body.Genre

    }, (err, bookToShow) => {
        if (err) {
            console.log(err);
            res.end(err);
        }
        else {
            //show the edit view
            res.redirect('/book/list')
        }
    }
    )
}

//3 display edit page
// Gets a book by id and renders the Edit form using the add_edit.ejs template
module.exports.displayEditPage = (req, res, next) => {
    let id = req.params.id;

    book.findById(id, (err, bookToShow) => {
        if (err) {
            console.log(err);
            res.end(err);
        }
        else {
            res.render('book/add_edit', {
                title: "Book List",
                action: "/book/edit/" + id,
                book: bookToShow
            })
        }
    }
    )
}

//4 process edit page
// Processes the data submitted from the Edit form to update a book
module.exports.processEditPage = (req, res, next) => {

    //update function 
    book.update({
        _id: req.params.id
    }, {
        Title: req.body.Title,
        Description: req.body.Description,
        Price: req.body.Price,
        Author: req.body.Author,
        Genre: req.body.Genre

    }, (err, bookToShow) => {
        if (err) {
            console.log(err);
            res.end(err);
        }
        else {
            //show the edit view
            res.redirect('/book/list')
        }
    }
    )
}

//5 perform delete
// Deletes a book based on its id.
module.exports.performDelete = (req, res, next) => {

    //delete function
    book.deleteOne({
        _id: req.params.id
    }, (err, bookToShow) => {
        if (err) {
            console.log(err);
            res.end(err);
        }
        else {
            //show the edit view
            res.redirect('/book/list')
        }
    }
    )
}