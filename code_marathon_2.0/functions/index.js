const START_HEADER = "<h4>Общая статистика</h4>";
const END_HEADER = "<h4>Статистика раздела &quot;Курсы&quot;</h4>";

// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
const functions = require('firebase-functions');

// The Firebase Admin SDK to access the Firebase Realtime Database. 
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

exports.register = functions.https.onRequest((request, response) => {
	const dateTime = request.body['gsx$отметкавремени'];
	const email = request.body['gsx$адресэлектроннойпочты'];
	const fullname = request.body['gsx$фамилияиимя'];
	const division = request.body['gsx$желаемыйдивизионучастия'].substr(0, 4);
	const acmpId = request.body['gsx$idпользователянаacmp.ru'];
	const telegramUsername = request.body['gsx$telegramusername'];

	console.log(dateTime, email, fullname, division, acmpId, telegramUsername)

	admin.database().ref(`/users/`).push({
    	dateTime: dateTime,
    	email: email,
    	fullname : fullname,
    	division : division,
    	acmpId : acmpId,
    	telegramUsername : telegramUsername
  	});

	response.status(200).send("");
});
