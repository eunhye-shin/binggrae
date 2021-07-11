$(function(){
  var menu=".gnbD .gnb li";
		 
	$(menu).mouseover(function(){
			$(this).css("background:","none",);
	});
	$(menu).mouseout(function(){
			$(this).css("background","none");
	});

});
$(function(){
  var menu="a:link";
		 
	$(menu).mouseover(function(){
			$(this).css("text-decoraion:","none",);
	});
	$(menu).mouseout(function(){
			$(this).css("text-decoraion","none");
	});

});
