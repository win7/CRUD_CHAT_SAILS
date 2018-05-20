/**
 * ChatController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  room: function (req, res) {
    console.log("Room");
    return res.view("chat/chat_room", {
      title: "Welcome " + req.me.fullName
    });
  },
  sendmessage: function(req, res) {
    if (req.isSocket) {
      console.log("Send message " + JSON.stringify(req.allParams()));
      
      // Option 1
      var socket = req.socket;
      var io = sails.io;
      io.sockets.emit("receive_message", {name: req.me.fullName, message: req.param("message")});

      // Option 2
      /* User.findOne({
        where: {id: req.session.userId}
      })
      .then(function (_user) {
        if (_user) {
          var socket = req.socket;
          var io = sails.io;
          io.sockets.emit("receive_message", {name: _user.fullName, message: req.param("message")});
        } else {
          return res.json([]);
        }
      })
      .catch(function (err) {
        return res.serverError(err);
      }); */
    } else{
      return res.badRequest();
    }
  },

};

