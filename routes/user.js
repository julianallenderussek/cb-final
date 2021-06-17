const express = require('express')
const router = express.Router()
const { createGuide, getGuides, cancelGuide  } = require('../controllers/guides')
const { getQuote } = require('../controllers/quotes')

router.route('/createguide').post(createGuide)
router.route('/guides/:currentUser').get(getGuides)
router.route('/getquote').post(getQuote)
router.route('/cancelguide').put(cancelGuide)

module.exports = router;