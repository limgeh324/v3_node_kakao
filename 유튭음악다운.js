const ytSearch = require("yt-search");
const ytdl = require("ytdl-core");
if (chat.text.startsWith(".yt")) { //.yt 영상제목
        ytSearch(Text.substr(4), function (err, r) {
          if (err) chat.replyText(String(err));

          const videos = r.videos;
          const playlists = r.playlists;
          const accounts = r.accounts;

          const firstResult = videos[0];
          var title = firstResult.title.toString();
          var id = firstResult.videoId.toString();
          var image = firstResult.thumbnail.toString();
          var time = firstResult.timestamp.toString();
          var url = firstResult.url.toString();
          var channel = firstResult.author.name.toString();
          var view = firstResult.views.toString();
          ytdl.getInfo(id).then((info) => {
            let audioAttach = {
              d: info.videoDetails.lengthSeconds,
            };
            client.chatManager.sendRaw(chat.channel, 23, "Search", {
              L: url,
              Q: title,
              V: "image",
              R: [
                {
                  D: title,
                  L: url,
                  I: image,
                  W: 1280,
                  H: 720,
                },
              ],
            });
            chat.replyText(
              "[ ! ] 제목: ",
              title,
              "\n",
              "[ ! ] 조회수: ",
              view,
              "\n",
              "[ ! ] 채널명: ",
              channel,
              "\n",
              "[ ! ] 영상길이: ",
              time
            );
            if (audioAttach.d > 1800) { //30분 초과
              chat.replyText("[ ! ] 파일 크기가 너무 커 다운로드를 중단합니다");
            } else {
              ytdl(id).pipe(fs.createWriteStream("./audio2.m4a"));
            }
            let json = JSON.stringify(info, null, 2)
              .replace(
                /(ip(?:=|%3D|\/))((?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|[0-9a-f]{1,4}(?:(?::|%3A)[0-9a-f]{1,4}){7})/gi,
                "$10.0.0.0"
              );
            fs.writeFile(filepath, json, (err2) => {
              if (err2) throw err2;
            });
          });
        });
      }
      if (chat.text == ".ysend") {
        chat.replyText("[ ! ] 전송 중..");
        try {
          chat.channel.sendMedia({
            type: node_kakao_1.ChatType.Audio,
            name: "audio",
            data: fs.readFileSync("./audio2.m4a"),
            ext: "m4a",
          });
        } catch {
          chat.replyText("[ ! ] 저장된 영상이 없습니다");
        }
      }
