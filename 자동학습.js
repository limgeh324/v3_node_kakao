let turn = false;
let chatLog = JSON.parse(
      require("fs").readFileSync("./database.json", "utf8") //database.json 만들고 {} 입력
    );
    if (chat.text == ".on" && !turn) { //자동학습 시작
      chat.replyText("자동학습을 시작합니다");
      turn = true;
    }
    if (chat.text == ".off" && turn) { //자동학습 종료
      chat.replyText("자동학습을 종료합니다");
      turn = false;
    }
    if (turn) {
      if (chat.type == node_kakao_1.ChatType.Reply) { //챗타입 답장일때 답장과 질문을 chatLog에 넣음
        if (chat.text.length > 0) {
          if (!chatLog[chat.RawAttachment.src_message])
            chatLog[chat.RawAttachment.src_message] = [];
          chatLog[chat.RawAttachment.src_message].push(chat.text);
          console.log("학습 완료");
          console.log(chat.RawAttachment.src_message + " - " + chat.text);
        }
      }
    }
    require("fs").writeFileSync("./database.json", JSON.stringify(chatLog)); //chatLog database.json에 적용
  })
