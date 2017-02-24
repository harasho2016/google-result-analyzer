var dataset;
chrome.runtime.onMessage.addListener(
  function(request,sender,sendResponse){
    // データの受け取り
    dataset = request.result
    // コールバック関数
    sendResponse(dataset)
  }
);

var getCounter = function(){
    return dataset
};