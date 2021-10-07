const express = require('express');
const DocController = require('../controllers/DocController');
const router = express.Router();

router.post('/create', DocController.create);
router.get('/getTypes', DocController.getTypeList);
router.get('/getContent', DocController.getContent);

module.exports = router;