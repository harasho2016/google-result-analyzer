// var items = .first().attr('href');
hrefs = []

title = $("title").text()
description = $("meta[name=description]").attr("content")
h1Title = $("h1").text()

viewTitle = '<div style="font-size:3px">' + title + '</div>'
viewDescription = '<div style="font-size:3px">' + description + '</div>'
viewH1Title = '<div style="font-size:3px">' + h1Title + '</div>'

viewtext = viewTitle + viewDescription + viewH1Title
chrome.runtime.sendMessage( 
      {"result": viewtext },
      function(response){
        log("message sent");
      });

// log(hrefs[0]['url'])

function log(str){
  console.log(JSON.stringify(str))
}
