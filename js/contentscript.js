// var items = .first().attr('href');
hrefs = []


$('h3.r a').each(function(i, elem){
  hrefs.push($(elem).attr('href'))
});

chrome.runtime.sendMessage( 
      {"hrefs": hrefs },
      function(response){
        log("message sent");
      });

// log(hrefs[0]['url'])

function log(str){
  console.log(JSON.stringify(str))
}
