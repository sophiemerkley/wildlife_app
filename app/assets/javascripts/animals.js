// # Place all the behaviors and hooks related to the matching controller here.
// # All this logic will automatically be available in application.js.
// # You can use CoffeeScript in this file: http://coffeescript.org/

$("document").ready(function() {

  $("#create_new_animal").on(
    "click",
    function() {
      // Data to be submitted
      var new_animal = {
        "animal": {
          "common_name": $("#commonName").val(),
          "latin_name": $("#latinName").val(),
          "kingdom": $("#kingdom").val()
        }
      }

      alert("Sending message: " + JSON.stringify(new_animal));

      $.ajax({
        dataType: 'json',
        url: '/animals',
        method: 'POST',
        data: new_animal,
        success: function(data) {
          alert("Received message: " + JSON.stringify(data));
          add_to_animal_list(data);
        },
        error: function(jqXHR, textStatus, errorThrown) {
          alert("Add new animal failed: " + errorThrown);
        }
      });
  });// end crate animal

  function add_to_animal_list(data) {
    $("#animal_list").append(
      '<tr><td>' +  data.common_name + '</td><td>' +
      data.latin_name + '</td><td>'+
      data.kingdom + '</td><td>' +
      '<a href=' + "/animals/" + data.id + "/show" + '>' + 'Show</a></td><td>' +
      '<a href=' + "/animals/" + data.id + "/edit" + '>' + 'Edit' + '</a></td><td>' +
      '<a data-confirm="Are you sure?" rel="nofollow" data-method="delete" href="animals/' + data.id + '">' + 'Destroy</a></td></tr>');
  };

  //
  // <td><%= link_to 'Edit', edit_animal_path(animal) %></td>
  // <td><%= link_to 'Destroy', animal, method: :delete, data: { confirm: 'Are you sure?' } %></td>

}); // end document ready
