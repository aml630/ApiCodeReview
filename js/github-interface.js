var github = require('./../js/github.js').gitHubSearch;
var githubUser = require('./../js/github.js').profileSearch;
var pagination = require('./../js/github.js').paginationSearch;



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
        $(".pagination").show();

    });

    $(".pagination li").click(function() {
      var username = $("#profileUserName").val();
      var thisVar = parseInt($(this).text());
      console.log(thisVar)

        pagination(username, thisVar);
    });
});
