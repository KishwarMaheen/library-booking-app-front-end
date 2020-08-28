$(document).ready(function(){
  $.ajax({
    url: "http://localhost:8080/bookings/" + localStorage['username'],
    method: "get",
    dataType: "json"
  }).done(function(response){
      $.map(response, function(booking, i){
        $('#bookingsList').append("<tr><td>" + booking.books.name +"</td><td>"
        + booking.bookingDate + "</td><td>" + booking.returnDate + "</td><td>" +
         booking.fine + "</td></tr>");
      });
  });
});
