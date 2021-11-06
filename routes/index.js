// File Name: comp229-f2021-midTerm-300955234-2
// Author Name: Ameen 
// Student ID: 300955234
// Web App Name: Managing Books 

var express = require('express');
var router = express.Router();
let controlerIndex = require('../controllers/index');

/* GET home page. */
router.get('/', controlerIndex.home);

module.exports = router;
