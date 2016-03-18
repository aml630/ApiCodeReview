var apiKey  = require('./../.env').apiKey;

exports.gitHubSearch = function (userName) {
  $(".printPic").html(" ");
  $(".printName").html(" ")
  $(".printDescription").html(" ")


  $.get('https://api.github.com/users/'+userName+'/repos?access_token=' + apiKey).then(function(response){
    console.log(response);
    $(".printPic").append("<img class = 'round' src = '"+ response[0].owner.avatar_url + "'>")
    for(var i = 0; i < response.length; i  ++) {
      $(".printName").append("<div class = 'project'><a href = '"+response[i].html_url+"'><li class = 'red'> Name: " + response[i].name + "</li></a>");
      $(".printDescription").append("<div class = 'project'><li> Description " + response[i].description + "</li></div>"  );
      $(".printDate").append("<div class = 'project'><li> Date " + response[i].created_at + "</li></div>"  );

    }

  }).fail(function(error){
    // console.log(error.responseJSON.message);
  });


};
