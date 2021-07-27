const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")("sk_test_51JHSHFDR7pXVfLP8lHbKEhCAUffhdPoVlhjWpvZCCuGP6dtxXIiG0wYQmmZYR8iN9KigAAt1yZtA42R8h3tqfHPs00uUwg7Nzm");

// API

//App config
const app = express();
//middlewares
app.use(cors({ origin: true }));
app.use(express.json());
// API routes
app.get('/', (request, response) => response.status(200).send("hello world"))
app.post("/payment/create", async (request, response) => {
    const total = request.query.total;
    console.log("payment result received for this amount", total);
    const paymentIntent = await stripe.paymentIntents.create({
        amount: total
        currency: "usd"
    });
    //ok created
    response.status(201).send({
        client: paymentIntent.client_secret
    })

})

//Listen cmds
exports.api = functions.https.onRequest(app);
//http://localhost:5001/amzone-clone-b8f5f/us-central1/api


