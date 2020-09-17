const router = require('express').Router();
const viewContoller = require('../controllers/viewContoller')


router.route('/checkout')
    .get(viewContoller.getCheckout);
router.route('/success')
    .get(viewContoller.getSuccess);

module.exports = router;