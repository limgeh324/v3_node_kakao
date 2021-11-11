const request = require("request");
if (chat.text.startsWith(".핑퐁")) {
        var query = encodeURI(chat.text.substr(4));
        var url = `https://builder.pingpong.us/api/builder/pingpong/chat/demo?query=${query}`;
        request(url, function (error, response, html) {
          var res = JSON.parse(html);
          res.response.replies.forEach(function (x) {
            if (x.type == "text") {
              chat.replyText(x.reply.toString());
            }
          });
        });
      }
