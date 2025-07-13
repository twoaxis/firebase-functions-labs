const { onCall, HttpsError } = require("firebase-functions/https");
const admin  = require("firebase-admin");

admin.initializeApp();

/*
==================================================================================================
											TwoAxis Lab 4.


Requirement: Write a function called "addNewUser" that checks if the user is authenticated and
is admin then add a new user using email and password.
==================================================================================================


*/
