const stripe = require('stripe')(`${process.env.STRIPE_SECRETE_KEY}`);

exports.getCheckoutSession = async (req, res, next) => {

    const summary = `At 6.7 inches, the 2020 iPhone 12 Pro will be Apple's 
    largest iPhone to date, topping the 6.5-inch iPhone 11 Pro Max. The two
     6.1-inch models will be similar in size to the existing iPhone 11`;

    const imageCover = `https://pixy.org/src2/576/5763847.jpg`;
    //1) Creating checkout session
    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        success_url: `${req.protocol}://${req.get('host')}/success`,
        cancel_url: `${req.protocol}://${req.get('host')}/checkout`,
        customer_email: 'customer@example.com',
        // client_reference_id: ,
        line_items: [{
            name: `iphone 12 pro`,
            description: summary,
            images: [imageCover],
            amount: 2135 * 100,
            currency: 'usd',
            quantity: 1
        }]
    })

    //3) response
    res.status(200).json({
        status: 'success',
        session
    })
}