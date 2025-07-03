const { onCall, HttpsError } = require("firebase-functions/https");
const admin  = require("firebase-admin");

admin.initializeApp();

/*
==================================================================================================
											TwoAxis Lab 2. 


Context: You are building an online store, the user submits the items and you should save in the
database. The input looks like this:
{
	"items": [
		{ name: 'Apples', quantity: 3, price: 1.5 },
		{ name: 'Bread', quantity: 2, price: 2.99 },
		{ name: 'Milk', quantity: 1, price: 3.25 },
		{ name: 'Eggs', quantity: 2, price: 2.75 }
	]
}

Requirement: Write a function called "createOrder" that takes the user's items and puts it in
a firestore document inside the "orders" collection alongside the total of the entire order.
==================================================================================================


*/