var apiKey = require('./../.env').apiKey;

exports.gitHubSearch = function(userName) {
    $(".printPic").html(" ");
    $(".printName").html(" ");
    $(".printDescription").html(" ");
    $(".printDate").html(" ");
    $.get('https://api.github.com/users/' + userName + '/repos?access_token=' + apiKey).then(function(response) {
        // console.log(response);
        $(".printPic").append("<img class = 'round' src = '" + response[0].owner.avatar_url + "'>");
        for (var i = 0; i < 5; i++) {
            $(".printName").append("<div class = 'card-panel teal lighten-5 project'><a href = '" + response[i].html_url + "'><li> Name: " + response[i].name + "</li></a>");
            $(".printDescription").append("<div class = 'card-panel  teal lighten-5 project'><li> Description " + response[i].description + "</li></div>");
            $(".printDate").append("<div class = 'card-panel teal lighten-5 project'><li> Created At: " + moment(response[i].created_at).format("MMMM Do YYYY, h:mm:ss a") + "</li></div>");
        }
    }).fail(function(error) {
        console.log(error.responseJSON.message);
    });
};
exports.paginationSearch = function(userName, num) {
    $(".printPic").html(" ");
    $(".printName").html(" ");
    $(".printDescription").html(" ");
    $(".printDate").html(" ");
    var thisVar = num;
    console.log("log thisvar?: " + num);
    var printout = 5*thisVar;
    $.get('https://api.github.com/users/' + userName + '/repos?access_token=' + apiKey).then(function(response) {
        console.log(response);
        $(".printPic").append("<img class = 'round' src = '" + response[0].owner.avatar_url + "'>");
        for (var i = printout-5; i < printout; i++) {
            $(".printName").append("<div class = 'card-panel teal lighten-5 project'><a href = '" + response[i].html_url + "'><li> Name: " + response[i].name + "</li></a>");
            $(".printDescription").append("<div class = 'card-panel  teal lighten-5 project'><li> Description " + response[i].description + "</li></div>");
            $(".printDate").append("<div class = 'card-panel teal lighten-5 project'><li> Created At: " + moment(response[i].created_at).format("MMMM Do YYYY, h:mm:ss a") + "</li></div>");
        }
    }).fail(function(error) {
        console.log(error.responseJSON.message);
    });
};

exports.profileSearch = function(userName) {
    if (apiKey === undefined) {
        console.log("its undefined");
    } else {
        $(".printProfile").text(" ");
        $("#search").show();
        $.get('https://api.github.com/users/' + userName + '?access_token=' + apiKey).then(function(response) {
            $(".printProfile").append("<div class='card blue-grey darken-1'><img class = 'z-depth-3 round' src = '" + response.avatar_url + "'><li> Email: " + response.email + "</li><li> Name: " + response.name + "</li><li> Followers: " + response.followers + "</li><li> Following: " + response.following + "</li></div>");
        }).fail(function(error) {
            console.log(error.responseJSON.message);
        });
    }

};
