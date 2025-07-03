const { onCall, HttpsError } = require("firebase-functions/https");
const admin  = require("firebase-admin");

admin.initializeApp();

/*
==================================================================================================
											TwoAxis Lab 1.

Context: You are building an application form. The user submits their name, age, why they need 
this job, and what skills do they have. The input looks like this:
{
	"name": "...",
	"age": "...",
	"skills": "...",
	"need": "..."
}

Requirement: Write a function called "applyPosition" that takes the user input and puts it in
a firestore document inside the "applications" collection.

==================================================================================================


*/