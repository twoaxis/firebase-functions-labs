const { onCall, HttpsError } = require("firebase-functions/https");
const admin  = require("firebase-admin");

admin.initializeApp();

/*
==================================================================================================
											TwoAxis Lab 3.


Requirement: Write a function called "displayAllUsers" that checks if the user is authenticated and
is admin then returning an array of all users.
==================================================================================================


*/
