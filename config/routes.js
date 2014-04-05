module.exports = function(app){

	//home route
	var home = require('../app/controllers/home');
	app.get('/', home.index);
	
	//route untuk registrasi
	var registration = require('../app/controllers/registration');
	app.get('/registrasi', registration.index);
	app.post('/registrasi', registration.startRegistration);
	app.get('/registrasi/list', registration.list);
	app.post('/registrasi/list', registration.list);
};
