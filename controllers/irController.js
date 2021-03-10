var Ir = require('../models/ir');

exports.index = function(req, res){
    res.render('index', {title: 'RMS App'});
}

exports.ir_GET = function(req, res){
    res.render('ir_GET', {title: 'Create Report'});
}

exports.ir_POST = function(req, res){
    res.send('ir_POST');
}

exports.viewIr_GET = function(req, res){
    res.send('viewIr_GET');
}

exports.viewIr_POST = function(req, res){
    res.send('viewIr_POST');
}

exports.updatedIrs_GET = function(req, res){
    res.send('updatedIrs_GET');
}

exports.updatedIrs_POST = function(req, res){
    res.send('updatedIrs_POST');
}