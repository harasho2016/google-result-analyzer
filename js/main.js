// http://qiita.com/inouet/items/26b93c5f5f4b65c05e00
var clipboard = new Clipboard('.btn');

var dataset = chrome.extension.getBackgroundPage();
datalist = dataset.getCounter()

var domtext = '';
$.each(datalist, function(index, val){
  domtext = domtext + '<div style="font-size:3px">' + val + '</div>'
});

$('#contents').html(domtext);

// var updateList = function(){
//   $('#contents').text(")");
// }
