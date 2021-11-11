const qanda = require("./Qanda_Api/qanda.js"); //https://github.com/NoBrain0917/Qanda_API
if (chat.text == ".콴다" && chat.Type == 26 && isAdmin(userId)) { //대상 사진 위에 답장
        var chlog = "";
        client.ChatManager.getChatListFrom(
          chat.channel.id,
          chat.attachmentList[0].SourceLogId
        ).then((r) => {
          if (r.result) {
            r.result.forEach((v, i) => {
              chlog +=
                "임지혁잘생김" +
                JSON.stringify(v.rawAttachment, null, 3) +
                "limgeh" +
                node_kakao_1.ChatType[v.Type] +
                "kkkk";
            });
            var k = chlog.split("임지혁잘생김")[1].split("limgeh")[0];
            if (JSON.parse(k).url) {
              qanda.search(JSON.parse(k).url).then((a) =>
                client.chatManager.sendRaw(chat.channel, 23, "Search", {
                  L: "Q&A / Q and A / qanda / 콴다",
                  Q: "Q&A / Q and A / qanda / 콴다",
                  V: "list",
                  R: [
                    {
                      D: "문제",
                      L: a[0].question,
                      I: a[0].question,
                      T: "Question",
                      W: 10000,
                      H: 10000,
                    },
                    {
                      D: "해답",
                      L: a[0].answer[0],
                      I: a[0].answer[0],
                      T: "Answer",
                      W: 10000,
                      H: 10000,
                    },
                  ],
                })
              );
            } else {
              chat.replyText("[ ! ] 사진이 아닙니다");
            }
          }
        });
      }
 if (chat.text.startsWith(".계산")) { //.계산 6x+5=0
        var a = Text.split(" ")[1];
        qanda
          .calculation(a)
          .then((x) =>
            chat.replyText(
              `[ ! ] ${x.title}${allsee_1}\n\n답: ${
                x.solution
              }\n\n- 풀이과정\n\n${x.steps.join("\n\n")}`
            )
          )
          .catch((error) => chat.replyText(error.toString()));
      }
