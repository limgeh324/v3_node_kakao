const translate = require("@iamtraction/google-translate"); // 모듈 필요
if (chat.text.startsWith(".번역") && chat.Type == 26) {
        var a = Text.split(" ");
        translate(chat.rawAttachment.src_message, { to: a[1] }) //.번역 ko
          .then((res) => {
            chat.replyText("RESULT: "+res.text);
          })
          .catch((err) => {
            chat.replyText("ERROR: "err);
          });
      }
