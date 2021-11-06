// File Name: comp229-f2021-midTerm-300955234-2
// Author Name: Ameen 
// Student ID: 300955234
// Web App Name: Managing Books 

let mongoose = require('mongoose');

// Create a model class
let bookModel = mongoose.Schema(
    {
        Title: String,
        Description: String,
        Price: Number,
        Author: String,
        Genre: String
    },
    {
        collection: "books"
    }
);

module.exports = mongoose.model('Book', bookModel);