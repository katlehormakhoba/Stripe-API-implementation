import '@babel/polyfill';
import { makePayment } from './stripe';

const checkoutBtn = document.getElementById('checkout-button');


if (checkoutBtn)
    checkoutBtn.addEventListener('click', el => {

        makePayment();
    });