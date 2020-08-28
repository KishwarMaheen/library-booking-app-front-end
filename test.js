$(document).ready(function() {
  $('#signUpForm').submit(function(e) {
    e.preventDefault();
    let username = $('#username').val();
    let password = $('#password').val();
    let email = $('#email').val();
    let phoneNumber = $('#phone').val();
    //const url = $(this).attr('action');
    // $.post("http://localhost:8080/users", {
    //   username: username,
    //   password: password,
    //   email: email,
    //   phoneNumber: phoneNumber
    // }).done(function(data) {
    //   console.log("Testing");
    //   $('#redirectlogin').append('<button id="go">Go To Login Page</button>');
    //   $('#go').click(function (){
    //     window.location.replace("test.html");
    //   });
    // });
    request = $.ajax({
      url: "http://localhost:8080/users",
      type: "post",
      data: {
        username: username,
        password: password,
        email: email,
        phoneNumber: phoneNumber
      }
    });
    request.done(function(response, textStatus, jqXHR){
      if(response){
        console.log("Testing");
        $('#redirectlogin').html('<p>Sign up successful!</p><button id="go">Go To Login Page</button>');
        $('#go').click(function (){
          window.location.replace("signin.html");
        });
      }else{
        $('#redirectlogin').html("Error. Please try again!");
      }
    });
  });
});
