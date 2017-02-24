// var items = .first().attr('href');
hrefs = []

var viewtext = '';
$('h3.r a').each(function(i, elem){
  var val = $(elem).attr('href')
  viewtext = viewtext + '<div style="font-size:3px">' + val + '</div>'
});
log(viewtext)
chrome.runtime.sendMessage( 
      {"result": viewtext },
      function(response){
        log("message sent" + response);
      });

// log(hrefs[0]['url'])

function log(str){
  console.log(JSON.stringify(str))
}
