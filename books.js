$(document).ready(function(){
  $.ajax({
    url: "http://localhost:8080/books",
    method: "get",
    dataType: "json"
  }).done(function(response){
    console.log(response);
    $.map(response, function(book, i){
      console.log(book.name);
      console.log(book.author);
      console.log(book.numberInStock);
      $('#bookList').append("<tr><td>" + book.name +"</td><td>"
    + book.author + "</td><td>" + book.numberInStock +
    "</td><td><form id='book" + book.id + "'><input type='submit' value='Book'></form></td></tr>");
    $('#book' + book.id).css('border', '0px');
      $('#book' + book.id).submit(function(e){
        e.preventDefault();
        console.log(book.id);
        $.ajax({
          url: "http://localhost:8080/bookings/" + localStorage['username'] + "/" + book.id,
          method: "post"
        }).done(function(response){
          if(response){
            $('#result').html("<p>Booked!</p>");
          }else{
            $('#result').html("<p>Error!</p>");
          }
        });
      });
    });
  });
});
