var User = Backbone.Model.extend({

  defaults: {
    username: "No username provided | Anonymous",
    publicKey: "No Public Key Provided",
    privateKey: "No Private Key Provided",
    socketId:"no id provided",
    session:false
  },

  initCommSession:function(){

    console.log("Socket request made with : ",this.attributes);
    socket.emit("requestSession",this.attributes);
  },


  initialize: function() {
    console.log("NEW USER ISNNSDASD",this)

  },
  
});