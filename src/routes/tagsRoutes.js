const express = require('express');
const router = express.Router();
const tagsController = require('../controllers/tagsController');

router.get('/', tagsController.getTags);
router.post('/', tagsController.createTag);
router.put('/:id', tagsController.updateTag);
router.delete('/:id', tagsController.deleteTag);

module.exports = router;
