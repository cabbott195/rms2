var Ir = require('../models/ir');

exports.index = function(req, res){
    res.send('index');
}

exports.createIr_GET = function(req, res){
    res.send('createIr_GET');
}

exports.createIr_POST = function(req, res){
    res.send('createIr_POST');
}

exports.deleteIr_GET = function(req, res){
    res.send('deleteIr_GET');
}

exports.deleteIr_POST = function(req, res){
    res.send('deleteIr_POST');
}

exports.updateIr_GET = function(req, res){
    res.send('updateIr_GET');
}

exports.updateIr_POST = function(req, res){
    res.send('updateIr_POST');
}