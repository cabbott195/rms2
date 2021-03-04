var express = require('express');
var router = express.Router();

// Require controller modules.
var ir_controller = require('../controllers/irController');

/// IR ROUTES ///

// GET RMS home page.
router.get('/', ir_controller.index);

// GET request for creating a IR. NOTE This must come before routes that display Book (uses id).
router.get('/ir/create', ir_controller.createIr_GET);

// POST request for creating IR.
 router.post('/ir/create', ir_controller.createIr_POST);

// // GET request to delete IR.
router.get('/ir/:id/delete', ir_controller.deleteIr_GET);

// // POST request to delete IR.
router.post('/ir/:id/delete', ir_controller.deleteIr_POST);

// // GET request to update IR.
router.get('/ir/:id/update', ir_controller.updateIr_GET);

// // POST request to update IR.
router.post('/ir/:id/update', ir_controller.updateIr_POST);

module.exports = router;