$(document).ready(function () {
  $("#msg-success").hide();
  const APIKEY = "602bcd635ad3610fb5bb60f0";
  //add signup listener
  $("#btn-signup").on("click", function (e) {
    e.preventDefault();

    //@TODO check whether username exist

    //if all ok
    let username = $("#txt-username").val();
    let password = $("#txt-password").val();
    let email = $("#txt-email").val();

    signup(username, password, email);

  });

  //add login listener
  $("#btn-login").on("click", function (e) {
    e.preventDefault();

    let username = $("#login-username").val();
    let password = $("#login-password").val();

    login(username, password);
  }); //end clicker


  function signup(username, password, email) {
    var jsondata = { "username": username, "password": password, "email": email };
    var settings = {

      "url": "https://integratedprojectid-785e.restdb.io/rest/account?x-apikey=602bcd635ad3610fb5bb60f0",
      "method": "POST",
      "timeout": 0,
      "headers": {
        "content-type": "application/json",
        "x-apikey": "602bcd635ad3610fb5bb60f0"
      },
      "data": JSON.stringify(jsondata),
    };

    $.ajax(settings).done(function (response) {
      console.log(response);
    });
  }//end signup

  function login(username, password) {
    var jsondata = { "username": username, "password": password};
    var settings = {
      "url": "https://integratedprojectid-785e.restdb.io/rest/account?x-apikey=602bcd635ad3610fb5bb60f0",
      "method": "GET",
      "timeout": 0,
      "headers": {
        "content-type": "application/json",
        "x-apikey": "602bcd635ad3610fb5bb60f0"
      },
      "data": JSON.parse(jsondata),
    };

    $.ajax(settings).done(function (response) {
      console.log(response);

      //[cher] meaning theres a response and not empty
      if (response.length) {
        console.log(`User found`);

        $("#msg-success").fadeIn("slow").delay(2000).fadeOut();
        //@TODO redirect user 
        //window.location.href = "https://www.np.edu.sg";

      }
      else {
        console.log(`User not found`);
      }

    });
  }//end login

  function checkUsername(username) {

  }

});

