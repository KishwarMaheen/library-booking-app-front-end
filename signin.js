$(document).ready(function() {
  $('#signInForm').submit(function(e) {
    e.preventDefault();
    let username = $('#username').val();
    let password = $('#password').val();
    localStorage.setItem("username", username);
    request = $.ajax({
      url: "http://localhost:8080/users",
      type: "get",
      data: {
        username: username,
        password: password
      }
    });
    request.done(function(response, textStatus, jqXHR){
      console.log(response);
      if(response==1){
          window.location.replace("get.html");
        }
      else if(response==-1){
        $('#error').html("Username doesn't exist!");
      }
      else{
        $('#error').html("Wrong password!");
      }
    });
  });
});
