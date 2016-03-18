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
      $(".printDate").append("<div class = 'project'><li> Created At: " + moment(response[i].created_at).format("MMMM Do YYYY, h:mm:ss a") + "</li></div>"  );
    }
    }).fail(function(error){
      console.log(error.responseJSON.message);
    });
};

exports.profileSearch = function (userName) {
  $(".printProfile").text(" ");
  $("#search").show();

  $.get('https://api.github.com/users/'+userName+'?access_token=' + apiKey).then(function(response){
    console.log(response);
    console.log(response.followers);


    $(".printProfile").append("<img class = 'round' src = '"+ response.avatar_url + "'><li> Email: " + response.email + "</li><li> Name: " + response.name + "</li><li> Followers: " + response.followers + "</li><li> Following: " + response.following + "</li>")

      // $(".printName").append("<div class = 'project'><a href = '"+response[i].html_url+"'><li class = 'red'> Name: " + response[i].name + "</li></a>");
      // $(".printDescription").append("<div class = 'project'><li> Description " + response[i].description + "</li></div>"  );
      // $(".printDate").append("<div class = 'project'><li> Created At: " + moment(response[i].created_at).format("MMMM Do YYYY, h:mm:ss a") + "</li></div>"  );

    }).fail(function(error){
      console.log(error.responseJSON.message);
    });
};
