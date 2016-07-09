var list_dir_filtered = require('./06-module');

list_dir_filtered(process.argv[2],process.argv[3],function(err,data) {
   data.forEach(function(file) {
      console.log(file);
   });
});