// http://qiita.com/inouet/items/26b93c5f5f4b65c05e00
var clipboard = new Clipboard('.btn');

var dataset = chrome.extension.getBackgroundPage();
$('#contents').html(dataset.getCounter());

// var updateList = function(){
//   $('#contents').text(")");
// }
