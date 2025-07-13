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

exports.sendDiscordMessage = onRequest(async (req, res) => {
	
	await axios.post("https://discord.com/api/webhooks/1394011429568516267/Roi9DovOjTFeNL95_t3pbUmswdmB5sYTTq1Jo0t2YGVwC90kxGgoeE_5sMTEIPc7GeiF", {
		content: req.body.message
	});

	res.send("Done");
});