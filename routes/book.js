// File Name: comp229-f2021-midTerm-300955234-2
// Author Name: Ameen 
// Student ID: 300955234
// Web App Name: Managing Books 

var express = require('express');
var router = express.Router();

let bookController = require('../controllers/book');

// Router for lists books function
router.get('/list', bookController.bookList);

// Router for book details function
router.get('/details/:id', bookController.details);

// Routers for edit functions
router.get('/edit/:id', bookController.displayEditPage);
router.post('/edit/:id', bookController.processEditPage);

// Router for Delete function
router.get('/delete/:id', bookController.performDelete);

// Routers for Add functions
router.get('/add', bookController.displayAddPage);
router.post('/add', bookController.processAddPage);


module.exports = router;