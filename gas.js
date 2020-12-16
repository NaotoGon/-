var channel_access_token = "zG0BxGbX3LVFoThGoDA46z5YDJIl/5ZHUJlE1+N4RmTgMWvCrbRkO5sROC3PPJ52yvCHTj778+r2rh5ZLOMjUWOopgo5Q3bbv8m/oYJXXsgZ96O7PdYRmLJEn2kj3kYWLyZcU+bcDSVzr4+ztCQipwdB04t89/1O/w1cDnyilFU="
// ボットにメッセージ送信/フォロー/アンフォローした時の処理
function doPost(e) {
  var events = JSON.parse(e.postData.contents).events;
  events.forEach(function(event) {
    if(event.type == "message") {
      reply(event);
    } else if(event.type == "follow") {
      follow(event);
    } else if(event.type == "unfollow") {
      unFollow(event);
    }
 });
}

// 入力されたメッセージをおうむ返し
function reply(e) {
  var message = {
    "replyToken" : e.replyToken,
    "messages" : [
      {
        "type" : "text",
        "text" : ((e.message.type=="text") ? e.message.text : "Text以外は返せません・・・")
      }
    ]
  };
  var replyData = {
    "method" : "post",
    "headers" : {
      "Content-Type" : "application/json",
      "Authorization" : "Bearer " + channel_access_token
    },
    "payload" : JSON.stringify(message)
  };
  UrlFetchApp.fetch("https://api.line.me/v2/bot/message/reply", replyData);
}

/* フォローされた時の処理 */
function follow(e) {
  
}

/* アンフォローされた時の処理 */
function unFollow(e){
  
}