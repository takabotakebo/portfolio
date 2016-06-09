
$(function () {
				$().ready(function(){
                    $(".g1,.g2,.g3,.g4,.g5,.g6,.g7,.g8,.g9,.g10,#info,#kodomoinfo,#parainfo,#ycsinfo,#relinfo,#techinfo,#movinfo").hide();
                    
				});
		

                
//ページ内スクロール
    $(".scrollbtn").click(function () {
        var i = $(".scrollbtn").index(this)
        var p = $(".content").eq(i).offset().top;
        $('html,body').animate({ scrollTop: p }, 'slow');
        return false;
    });
 
//トップへ戻る
$("#backtop").click(function () {
        $('html,body').animate({ scrollTop: 0 }, 'fast');
        return false;
    });    
    
    
$("#backtop2").click(function () {
        $('html,body').animate({ scrollTop: 0 }, 'fast');
        return false;
    });   
    


$("#kodomo").click(function () {
        $("#info,#kodomoinfo").fadeIn();
    });  
    
$("#para").click(function () {
        $("#info,#parainfo").fadeIn();
    });  
    
    
$("#ycs").click(function () {
        $("#info,#ycsinfo").fadeIn();
    });  
        
$("#rel").click(function () {
        $("#info,#relinfo").fadeIn();
    }); 
    
$("#tech").click(function () {
        $("#info,#techinfo").fadeIn();
    }); 

        
$("#mov").click(function () {
        $("#info,#movinfo").fadeIn();
    }); 
    
$("#info").click(function () {
        $("#info,#kodomoinfo,#parainfo,#ycsinfo,#relinfo,#techinfo,#movinfo").fadeOut();
    });  

                
//mousehoverのオンオフ
$("#top1").hover(function(){$(".g1").fadeIn();},
                 function(){$(".g1").fadeOut();});
        
                
$("#top2").hover(function(){$(".g2").fadeIn();},
                 function(){$(".g2").fadeOut();});
        
$("#top3").hover(function(){$(".g3").fadeIn();},
                 function(){$(".g3").fadeOut();});
        

$("#top4").hover(function(){$(".g4").fadeIn();},
                 function(){$(".g4").fadeOut();});
   
$("#kodomo").hover(function(){$(".g5").fadeIn();},
                 function(){$(".g5").fadeOut();});
                
$("#para").hover(function(){$(".g6").fadeIn();},
                 function(){$(".g6").fadeOut();});
        

$("#ycs").hover(function(){$(".g7").fadeIn();},
                 function(){$(".g7").fadeOut();});
   
$("#rel").hover(function(){$(".g8").fadeIn();},
                 function(){$(".g8").fadeOut();});

$("#tech").hover(function(){$(".g9").fadeIn();},
                 function(){$(".g9").fadeOut();});
   
$("#mov").hover(function(){$(".g10").fadeIn();},
                 function(){$(".g10").fadeOut();});
                

			});