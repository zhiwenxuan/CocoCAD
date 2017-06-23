$(document).ready(function(){
  $(document).on('click','#displayBlocks',function(){
	   $("#displayBlocks").css("border-bottom","0");
	   $("#displayBlocks").css("color","#bb5b06");
       $("#displayCode").css("border-bottom","1px solid lightgrey");
       $("#displayCode").css("color","#333");
  });
  $(document).on('click','#displayCode',function(){
	   $("#displayCode").css("border-bottom","0");
	   $("#displayCode").css("color","#bb5b06");
       $("#displayBlocks").css("border-bottom","1px solid lightgrey");
       $("#displayBlocks").css("color","#333");
  });
 
});