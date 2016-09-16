// # Place all the behaviors and hooks related to the matching controller here.
// # All this logic will automatically be available in application.js.
// # You can use CoffeeScript in this file: http://coffeescript.org/

$("document").ready(function() {

  $("#create_new_sighting").on(
    "click",
    function() {
      // Data to be submitted
      var new_sighting = {
        "sighting": {
          "date": $("#date").val(),
          "time": $("#time").val(),
          "lat_long": $("#latLong").val(),
          "region": $("#sighting_region").val(),
          "animal_id": $("#animalId").val()
        }
      }

      alert("Sending message: " + JSON.stringify(new_sighting));

      $.ajax({
        dataType: 'json',
        url: '/sightings',
        method: 'POST',
        data: new_sighting,
        success: function(data) {
          alert("Received message: " + JSON.stringify(data));
          add_to_sighting_list(data);
        },
        error: function(jqXHR, textStatus, errorThrown) {
          alert("Add new sighting failed: " + errorThrown);
        }
      });
  });// end create animal

  function add_to_sighting_list(data) {
    $("#sighting_list").append(
      '<li><td>' +  data.date + ' | </td><td>' +
      data.time + ' | </td><td>'+
      data.lat_long + ' | </td><td>' + data.region +
      '</td></li>');
  };

  $("#calendar").fullCalendar({
     header: {
       left: "prev,next today",
       center: "title",
       right: "month,agendaWeek,agendaDay"
     },
     defaultView: "month",
     height: 900,
     slotMinutes: 15,
     events: "/sightings/get_events",
     timeFormat: "LT",
     dragOpacity: "0.5",
     eventBackgroundColor: "#8f9779",
     eventBorderColor: "#8f9779"

  });

}); // end document ready

// '<a href=' + "/animals/" + data.id + "/show" + '>' + 'Show</a></td><td>' +
// '<a href=' + "/animals/" + data.id + "/edit" + '>' + 'Edit' + '</a></td><td>' +
// '<a data-confirm="Are you sure?" rel="nofollow" data-method="delete" href="animals/' + data.id + '">' + 'Destroy</a>
