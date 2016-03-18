var github = require('./../js/github.js').gitHubSearch;
var githubUser = require('./../js/github.js').profileSearch;


$(document).ready(function() {
    $("#profileSearch").submit(function(event) {
        event.preventDefault();
        var username = $("#profileUserName").val();
        githubUser(username);
        $("#search").show();

    });

    $("#search").submit(function(event) {
        event.preventDefault();
        var username = $("#profileUserName").val();
        console.log(username);
        github(username);
    });
});
