if (chat.text == ".물갈이") {
        chat.replyText("[ ! ] 옾프가 아닌 사람들을 물갈이합니다 (로딩중)");
        var arr = [];
        for (var key of chat.Channel.getUserInfoList()) {
          if (key.memberStruct.linkId == undefined) { //프로필타입으로 구해도 무방
            arr.push(key.memberStruct.nickname);
          }
        }
        chat.replyText(
          "[ RESULT ] 인원: " + arr.length + allsee_1 + "\n" + arr.join("\n") //멘션이나 강퇴로 응용 가능
        );
      }
