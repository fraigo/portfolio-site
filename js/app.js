

console.log("Loaded");


function showPopup(url){
  windowHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
  windowWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  
  var a=window.open(url,'_blank',"width="+(windowWidth-40)+",height="+(windowHeight-50));
  a.moveTo((40)/2,(40)/2);
  console.log([a,windowWidth,windowHeight]);
}


var app = new Vue({
    el: '#app',
    data: data
  })


setTimeout(function(){

  console.log("Loaded:"+document.location.toString());
  if (document.location.hash=="#success"){
    $("#msg").modal("show");
  }

},5000);