var Ir = require('../models/ir');

exports.index = function(req, res){
    res.render('index', {title: 'RMS App'});
};

exports.ir_GET = function(req, res){
    res.render('ir', {title: 'Create Report'});
};

exports.ir_POST = function(req, res){
    res.send('ir');
};

exports.viewIr_GET = function(req, res){
    res.send('viewIr');
};

exports.viewIr_POST = function(req, res){
    res.send('viewIr');
};

exports.updatedIrs_GET = function(req, res){
    res.send('updatedIrs');
};

exports.updatedIrs_POST = function(req, res){
    res.send('updatedIrs');
};