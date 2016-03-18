var apiKey  = require('./../.env').apiKey;

exports.gitHubSearch = function (userName) {

  $.get('https://api.github.com/users/'+userName+'/repos?access_token=' + apiKey).then(function(response){
    console.log(response.length);
    for(var i = 0; i < response.length; i  ++) {
      $(".printOut").append("<div class = 'project'><li class = 'red'> Name: " + response[i].name + "</li>" + );

      $(".printOut").append("<li class = 'last'> Description " + response[i].description + "</li>");

      $(".printOut .last").append("</div>");
    }

  }).fail(function(error){
    // console.log(error.responseJSON.message);
  });


};
