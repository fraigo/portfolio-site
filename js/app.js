
/***
 * 
 * Portfolio Site - Main app
 * Final Lab 
 * @author Francisco Igor franciscoigor@gmail.com
 * 
 */



function showPopup(url){
  windowHeight = Math.min(screen.height,600);
  windowWidth = Math.min(screen.width,800);
  
  var a=window.open(url,'_blank',"width="+(windowWidth-40)+",height="+(windowHeight-50));
  a.moveTo((40)/2,(40)/2);
  console.log([a,windowWidth,windowHeight]);
}


var app = new Vue({
    el: '#app',
    data: data
  })


setTimeout(function(){

  console.log("Loaded:"+document.location.hash);
  if (document.location.hash=="#success"){
    console.log($("#msg"));
    $("#msg").modal("show");
    
  }

},1000);