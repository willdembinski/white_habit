

  // // listener, whenever the server emits 'updatechat', this updates the chat body
  // socket.on('updatechat', function (username, data) {
  //   $('#conversation').append('<b>'+username + ':</b> ' + data + '<br>');
  // });

  // // listener, whenever the server emits 'updaterooms', this updates the room the client is in
  // socket.on('updaterooms', function(rooms, current_room) {
  //   $('#rooms').empty();
  //   $.each(rooms, function(key, value) {
  //     if(value == current_room){
  //       $('#rooms').append('<div>' + value + '</div>');
  //     }
  //     else {
  //       $('#rooms').append('<div><a href="#" onclick="switchRoom(\''+value+'\')">' + value + '</a></div>');
  //     }
  //   });
  // });

  // socket.on('receieveCertificate',function(certificate){
  //   console.log(certificate);

  //   var cert = new Certificate(certificate);
  //   new CertificateView({model:cert});
  // });


  // function submitKeyForSigning(pubKey){
  //   console.log("Submitting pub key for singing...")
  //   socket.emit('signMyKey',pubKey);
  // }

  // function switchRoom(room){
  //   socket.emit('switchRoom', room);
  // }

  // on load of page
  $(function(){

    $("#genCertificate").click(function(){
      console.log("Gen button clicked...");
      var pubKey = $('#pubKeyDisplay').val();
      submitKeyForSigning(pubKey);
    })
    // when the client clicks SEND
    $('#datasend').click( function() {
      var message = $('#data').val();
      $('#data').val('');
      // tell server to execute 'sendchat' and send along one parameter
      socket.emit('sendchat', message);
    });

    // when the client hits ENTER on their keyboard
    $('#data').keypress(function(e) {
      if(e.which == 13) {
        $(this).blur();
        $('#datasend').focus().click();
      }
    });
  });