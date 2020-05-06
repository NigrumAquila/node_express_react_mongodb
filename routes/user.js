const express = require('express')
const controller = require('../controllers/user')
const router = express.Router()

router.get('/', controller.getAll)
router.post('/', controller.create)
router.delete('/', controller.delete)
router.patch('/', controller.update)

// router.delete('/:id', controller.delete)
// router.patch('/:id', controller.update)


module.exports = router