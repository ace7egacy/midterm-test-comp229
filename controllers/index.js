// File Name: comp229-f2021-midTerm-300955234-2
// Author Name: Ameen 
// Student ID: 300955234
// Web App Name: Managing Books 

exports.home = function(req, res, next) {
    res.render('index', { title: 'Home' });
};
