// Example model

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var RegistrationSchema = new Schema({
  nama: String,
  surel: String,
  sandi: String
});
mongoose.model('Pendaftaran', RegistrationSchema);
