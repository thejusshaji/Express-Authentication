let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

//create a reference to the db schema which is the model
let business = require('../models/business');
//we want to display the businessList
/*
module.exports.displayBusinessList = (req, res, next) => {
 business.find((err, businessList) => {
        if (err) {
            return console.error(err);
        }
        else {
            //console.log(BusinessList);
            res.render('businesslist', {
                title: 'Business', BusinessList: businessList,
        displayName:req.user?req.user.displayName:''});
        }
    });
}
*/

module.exports.displayBusinessList = async(req,res,next) =>{try {
    //Retrieving the data from the database and sorting in ascending order
    let businessList = await business.find({}).sort({name:1}).exec();
    res.render('business/list', 
            {title: 'Business Contact', 
            BusinessList: businessList, 
           displayName: req.user ? req.user.displayName : ''});  
} catch (error) {
    console.log(error.message);
}
}

module.exports.displayAddPage = (req, res, next) => {
    res.render('business/add',{title:'Add business',
    displayName:req.user?req.user.displayName:''})
}

module.exports.processAddPage = (req, res, next) => {
    let newBusiness = business({
        "name": req.body.name,
        "mobile": req.body.number,
        "email":req.body.email
    });/*
    business.create(newBusiness, (err, business) => {
        if (err) {
            console.log(err);
            res.end(err);
        }
        else {
            res.redirect('/businessList');
        }
*/
        newBusiness.save().then(()=>{
            res.redirect('/businessList');
        }).catch((err)=>{
            console.log(err);
        })};
    

module.exports.displayEditPage = (req, res, next) => {
    let id = req.params.id;
    business.findById(id, (err, businessToEdit) => {
        if (err) {
            console.log(err);
            res.end(err);
        }
        else {
            res.render('business/edit', {
                title: 'Edit business', business: businessToEdit,
           displayName:req.user?req.user.displayName:''});
        }
    });
}
module.exports.processEditPage = (req, res, next) => {
    let id = req.params.id
    let updatedBusiness = business({
        "_id": id,
        "name": req.body.name,
        "age": req.body.author,
        "business": req.body.published,
        "cost": req.body.price,
        "email":req.body.email
    });
 business.updateOne({ _id: id }, updatedBusiness, (err) => {
        if (err) {
            console.log(err);
            res.end(err);
        }
        else {
            res.redirect('/businessList');
        }
    });
}
module.exports.performDelete = (req, res, next) => {
    let id = req.params.id;
    business.deleteOne({_id:id}, (err) => {
        if (err) {
            console.log(err);
            res.end(err);
        }
        else {
            res.redirect('/businessList');
        }
    });
}
