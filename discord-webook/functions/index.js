const { onCall, HttpsError, onRequest } = require("firebase-functions/https");
const admin  = require("firebase-admin");
const { default: axios } = require("axios");

admin.initializeApp();

/*
==================================================================================================
											TwoAxis Lab 5.


Requirement: Write a cloud function endpoint that you can send a message to that sends a message
to Discord Webhook.
==================================================================================================


*/
