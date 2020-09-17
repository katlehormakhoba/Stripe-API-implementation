import axios from 'axios';
const stripe = Stripe(`pk_test_51HOZR1BUM2e9J3qBTox7wFVmgFHvhb1lFtqOthxhpcKDrGCpVZf2pNUtuHI081RA2NJaasWNGmybIC9Z5dH225Pm00CQhcptCT`);

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