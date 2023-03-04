let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let passport = require('passport');
//let Business = require('../models/business');
let businessController = require('../controllers/business');
//helper function for guard purposes
function requireAuth(req, res, next)
{
    //check if the user is logged in
    if (!req.isAuthenticated())
    {
        return res.redirect('/login');
    }
    next();
}

// connect to our business model
//let Book = require('../models/books');
//GET ROUTE for the book list page - READ Operation
router.get('/', requireAuth,businessController.displayBusinessList);

/*GET ROUTE for displaying the Add Page - CREATE Operation*/
router.get('/add', requireAuth,businessController.displayAddPage);

/* POST Route for processing the Add Page - CREATE Operation*/
router.post('/add', requireAuth,businessController.processAddPage);

/* GET Route for displaying the Edit page- Update Operation*/

router.get('/edit/:id', requireAuth,businessController.displayEditPage);

/* POST Route for processing the Edit page - UPDATE operation*/

router.post('/edit/:id',  requireAuth,businessController.processEditPage);

/* GET to perform Deletion - DELETE Operation*/
router.get('/delete/:id', requireAuth, businessController.performDelete);

module.exports = router;
