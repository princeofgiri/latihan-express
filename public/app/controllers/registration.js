var mongoose = require("mongoose"),
Pendaftaran = mongoose.model("Pendaftaran");

exports.index = function(req, res){
  res.render('registration/index');
};

exports.startRegistration = function(req, res) {
  var vars = {};

  if (req.body) {
     vars = {
        nama: req.body.nama,
        surel: req.body.surel,
        sandi: req.body.sandi,
        dataEntered: true
     }

     var data = new Pendaftaran({
        nama: req.body.nama,
        surel: req.body.surel,
        sandi: req.body.sandi
     });

     data.save(function(err, result, rows) {
        res.render('registration/index', vars);
        return;
     })
  }
  res.render('registration/index', vars);
};

exports.list = function(req, res) {
  vars = {};

  var querySingleData = function() {
     var singleQuery = Pendaftaran.findOne({
       _id: req.query.id
     });
     singleQuery.select("_id nama surel"); 
     singleQuery.exec(function(err, result) {
        vars.singleData = {
            _id: result._id,
            nama: result.nama,
            surel: result.surel
        };
        res.render("registration/list", vars);
     });
   }

  var queryAllData = function() {
    var query = Pendaftaran.find({});
    query.select("_id nama surel");
    query.exec(function(err, result) {
       vars.items = result;

       if (req.query && req.query.id) {
         querySingleData();    
       } else {
         res.render("registration/list", vars);
       }
    });
  }

  if (req.body) {
     Pendaftaran.update(
       {_id: req.body.id},
       { nama: req.body.nama,
         surel: req.body.surel }
     , function(err, result) {
     queryAllData();
     console.log(req.body);   
     });
  } else {
     queryAllData();
  }
};
