import axios from 'axios';
const stripe = Stripe(`...`);

export const makePayment = async () => {
  try {
    // 1) Get checkout session from API
    const session = await axios(
      ` http://localhost:3000/api/v1/payment/checkout-session`
    );
    console.log(session);

    // 2) Create checkout form + chanre credit card
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id
    });

    //  stripe.redirectToCheckout({ sessionId: session.data.session.id });
  } catch (err) {
    console.log(err);
    showAlert('error', err);
  }
};