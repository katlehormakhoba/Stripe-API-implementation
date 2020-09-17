# Stripe Demo Online Payment Implementation


## Getting Started

 If you want to run/test application and you're new to GitHub simply just download the complete package, by hitingt the green button saying "Clone or download", choose the "Download ZIP" option, and you're good to go.

### Prerequisites

What you will need to install/run the application and how to install 

* [NodeJs](https://nodejs.org/en/) - A JavaScript runtime environment\
* [Express](https://expressjs.com/) - A NodeJs framework\
* [Stripe Account](https://stripe.com/) - Online payment processing for internet businesses



## Setup and run
to setup this project, run the following commands on your terminal
```bash
1. navigate to the project directory `cd Stripejs`

2. Get your test API key from your stripe account "Secrete and Publishable keys"
2.1 Navigate to .env file
2.2 On "STRIPE_SECRETE_KEY" variable equate it to your stripe secrete key

3 Navigate to folder public/js , and open stripe file
3.1 On the second line "const stripe = Stripe('...')" variable equate the ('...') to your stripe publishable key

4. Open your terminal. NB you should be under project directory `Stripejs`
4.1 install neccesary packages, modules `npm i`

5. to run the project `npm start`

6. using you browser navigate to this default url of `http://localhost:3000/checkout` to start testing
```

## Authors

* **Katleho R. Makhoba** - *Up & comming Software Developer* - [Katleho R. Makhoba](http://katlehormakhoba.com)


## License


## Acknowledgments

* Hat tipped off to anyone whose code was used
* Inspiration
* etc