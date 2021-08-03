const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('sk_test_51JHSHFDR7pXVfLP8lHbKEhCAUffhdPoVlhjWpvZCCuGP6dtxXIiG0wYQmmZYR8iN9KigAAt1yZtA42R8h3tqfHPs00uUwg7Nzm');
const { request, response } = require("express");

// API

//App config

const app = express();

//Middleware

app.use(cors({ origin: true }));
app.use(express.json());

// API routes

app.get('/', (request, response) => response.status(200).send('hello world'));

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;

    console.log('received', total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: 'usd'
    });

    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})

//Listen cmd

exports.api = functions.https.onRequest(app);