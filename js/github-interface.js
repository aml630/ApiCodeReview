var github = require('./../js/github.js').gitHubSearch;


$(document).ready(function(){
  $("#search").submit(function (event) {
    event.preventDefault();
    var username = $("#username").val();
    github(username);
  });
});
