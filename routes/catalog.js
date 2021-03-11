var express = require('express');
var router = express.Router();

// Require controller modules.
var ir_controller = require('../controllers/irController');
// var updatedIrs_controller = require('../controllers/updatedirsController');
//var viewIrs_controller = require('../controllers/viewirController');

/// IR ROUTES ///

// GET RMS home page.
router.get('/', ir_controller.index);

// GET request for creating a IR. NOTE This must come before routes that display IR (uses id).
router.get('/ir/create', ir_controller.ir_GET);

// POST request for creating IR.
router.post('/ir/create', ir_controller.ir_POST);

// // // GET request to delete IR.
// router.get('/ir/:id/delete', ir_controller.deleteIr_GET);

// // // POST request to delete IR.
// router.post('/ir/:id/delete', ir_controller.deleteIr_POST);

// // // GET request to view IR.
// router.get('/catalog/view', viewIrs_controller.viewIr_GET);

// // // POST request to view IR.
// router.post('/catalog/view', viewIrs_controller.viewIr_POST);

// // // GET request to update IR.
// router.get('/catalog/updated', updatedIrs_controller.updatedIrs_GET);

// // // POST request to update IR.
// router.post('/catalog/updated', updatedIrs_controller.updatedIrs_POST);

module.exports = router;