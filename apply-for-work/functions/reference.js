const { onCall } = require("firebase-functions/https");

exports.helloWorld = onCall(function(request) {
	/* Read data */
	// request.data

	/* Access to firestore db */
	// admin.firestore()

	/* Add to collection */
	// admin.firestore().collection("test").add({});


	/* Return data: */
	// return "success";

	// return {
	// 	message: "success"
	// }
});