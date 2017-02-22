var dataset;
chrome.runtime.onMessage.addListener(
  function(request,sender,sendResponse){
    // データの受け取り
    dataset = request.hrefs
    // コールバック関数
    sendResponse("finish")
  }
);

var getCounter = function(){
    return dataset
};