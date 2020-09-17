

exports.getCheckout = (req, res, next) => {

    res.status(200).render('checkout');
}

exports.getSuccess = (req, res, next) => {

    res.status(200).render('success');
}