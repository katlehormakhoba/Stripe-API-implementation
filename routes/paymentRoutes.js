const router = require('express').Router();
const paymentController = require('../controllers/paymentContoller')

router.route('/checkout-session').get(paymentController.getCheckoutSession);


module.exports = router;