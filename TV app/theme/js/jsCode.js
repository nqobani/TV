$(window).load(function (){
	var k=0;
	setInterval(function(){
		if(k==0)
		{
			$("#img1").show(1000);
			$("#img2").hide(1000);
			$("#img3").hide(1000);
			$("#img4").hide(1000);
			k=1;
		}
		else if(k==1)
		{
			$("#img1").hide(1000);
			$("#img2").show(1000);
			$("#img3").hide(1000);
			$("#img4").hide(1000);
			k=2;
		}
		else if(k==2)
		{
			$("#img1").hide(1000);
			$("#img2").hide(1000);
			$("#img3").show(1000);
			$("#img4").hide(1000);
			k=3;
		}
		else if(k==3)
		{
			$("#img1").hide(1000);
			$("#img2").hide(1000);
			$("#img3").hide(1000);
			$("#img4").show(1000);
			k=0;
		};
		
	},5000);

	$(".bestFeature").mouseenter(function (){
		$(this).animate({width:"18%", 'box-shadow':"0px 0px 15px 10px rgba(0,0,0,0.5)"},1000);
	});
	$(".bestFeature").mouseout(function (){
		$(this).animate({width:"20%"},1000);
	});

	$(window).scroll(function(){
		if($(window).scrollTop()>=($('.sliderDiv').height()*0.5))
		{
			$(".onscroll").animate({"margin-left":"1%", "margin-top":"20px"},1000);
		}
	});


		if($(window).scrollTop()>=($('.sliderDiv').height()*0.5))
		{
			$(".onscroll").animate({"margin-left":"1%", "margin-top":"20px"},1000);
		}
});


$(document).ready(function(){

	var glow=0;
	setInterval(function(){
		if(glow==0)
		{
			$(".showDatepicker").css({"box-shadow": "0px 0px 15px 2px rgba(200,0,0,0.5)"});
			glow=1;
		}
		else
		{
			$(".showDatepicker").css({"box-shadow": "0px 0px 15px 2px rgba(200,200,200,0.9)"});
			glow=0;
		}
		
	},500);

	var url="";
	var randUrlSelecter=Math.floor((Math.random() * 10) + 1);
	if(randUrlSelecter==1)
	{
		url="http://www.omdbapi.com/?s=action&r=json";
	}
	else if(randUrlSelecter==2)
	{
		url="http://www.omdbapi.com/?s=dance&r=json";
	}
	else if(randUrlSelecter==3)
	{
		url="http://www.omdbapi.com/?s=jack&r=json";
	}else if(randUrlSelecter==4)
	{
		url="http://www.omdbapi.com/?s=zulu&r=json";
	}else if(randUrlSelecter==5)
	{
		url="http://www.omdbapi.com/?s=london&r=json";
	}
	else if(randUrlSelecter==6)
	{
		url="http://www.omdbapi.com/?s=soldier&r=json";
	}
	else if(randUrlSelecter==7)
	{
		url="http://www.omdbapi.com/?s=lost&r=json";
	}
	else if(randUrlSelecter==8)
	{
		url="http://www.omdbapi.com/?s=list&r=json";
	}
	else if(randUrlSelecter==9)
	{
		url="http://www.omdbapi.com/?s=last&r=json";
	}
	else
	{
		url="http://www.omdbapi.com/?s=law&r=json";
	}
	$.getJSON(url, function(data, status){
        
        var limiter=0;
        $.each(data["Search"],function(key, value){
        	if(limiter<8)
        	{
				$(".mainContent").append("<div class='moviesAndShows onscroll'><img class='moviesAndShowsImgs' src='"+value["Poster"]+"'><h3>"+value["Title"]+"</h3><img class='showDatepicker' id='"+key+"' style='width:30px; height:30px; border-radius:100px;'src='images/256-256-64273d52c282e3b26d2d0968d08b9d8d.png'/><input class='datepicker' id='datepicker"+key+"' Type='text'><div id='datepicker"+key+"diff'></div> </div>");
    			$(".datepicker").datepicker();
        	}
        	limiter++;
        });
    });

/*$(".walkingMan").animate({'margin-right':"100%", 'width':"3%"},9000, function(){
	$(".walkingMan").attr("src","images/neil__s_depressing_walk_cycle_by_kirstyemma-d5i03lf.gif");
	$(".walkingMan").animate({'margin-right':"00%", 'width':"0%", "height":"0%"},90000);
});*/

var menus=$('.menu').length;
setTimeout(function(){
	$(".menu:nth-child(4)").show(1000);
},500);
setTimeout(function(){
	$(".menu:nth-child(3)").show(1000);
},700);
setTimeout(function(){
	$(".menu:nth-child(2)").show(1000);
},900);
setTimeout(function(){
	$(".menu:nth-child(1)").show(1500);
},1100);
$(document).on("blur",'.datepicker', function(){
	 
     var start = document.getElementById($(this).attr('id')).value;
    	var k=$(this).attr('id');

     setInterval(function()
     {
     	start = document.getElementById(k).value;
       
       var end   = new Date();
       var diff = new Date(start) - end;
       var t = diff/1000;
       var seconds = parseInt( t%60);
       var minutes = parseInt( (t/60) % 60 );
       var hours = parseInt( (t/(60*60)) % 24 );
       var days =parseInt( parseInt( t/60/60/24)%7);
       var weeks=parseInt(parseInt( t/60/60/24)/7);
       if(diff<0)
       {
       	$("#"+k+"diff").html("Date is out of range");
       }
       else
       {
       	$("#"+k+"diff").html("<span class='outerSpan'><span class='innerSpan'>Weeks</span>"+weeks+"</span> <span class='outerSpan'><span class='innerSpan'>Days</span> "+days+"</span> <span class='outerSpan'><span class='innerSpan'>Hours</span> "+hours+"</span><br><span class='outerSpan'><span class='innerSpan'>Minutes</span> "+minutes+"</span> <span class='outerSpan'><span class='innerSpan'>Seconds</span> "+seconds+"</span>");
       }
       

     },1000);
    });

$(document).on("click",'.showDatepicker', function(){
	var m=$(this).attr('id')
	if($("#datepicker"+m).width()<30)
	{
		$("#datepicker"+$(this).attr('id')).slideToggle();
		$("#datepicker"+$(this).attr('id')).animate({width:"200px"},1000);
	}
	else
	{
		$("#datepicker"+$(this).attr('id')).animate({width:"20px"},1000,function(){
			$("#datepicker"+m).slideToggle();
		});
	}
	
});


$(document).on('mouseenter',".outerSpan",function(){
	$(this).animate({'margin-left':"6px"},500,function(){$(this).animate({'margin-right':"4px"},400),function(){$(this).animate({'margin-left':"4px"},200)}});
});

    $("#search").keyup(function(e){
    	if(e.which != 13) {
    	$.getJSON("http://www.omdbapi.com/?s="+$("#search").val()+"", function(data, status){
        $("#searchFilter").html("");
			$.each(data["Search"],function(key, value){
				if(value["Response"]=="false")
				{
					alert("sd");
				}
        		$("#searchFilter").append("<div class='searchResult' style='width:100%;margin:0px; margin-top:1px; min-height:50px;'><img style='width:50px; ' src='"+value["Poster"]+"'/><br/>"+value["Title"]+"<br/>Year: "+value["Year"]+"</div>");
      		});
    	});
    	 
    	 	$("#searchFilter").html("");
    	 }
    });



    $("#btnSearch").click(function(){
    	$.getJSON("http://www.omdbapi.com/?s="+$("#search").val()+"", function(data, status){
        $("#searchFilter").html("");
        $(".displaySearchResults").hide(1000);
        $(".displaySearchResults").html("");
		$.each(data["Search"],function(key, value){
    		$(".displaySearchResults").append("<div class='moviesAndShowsSearch'><img class='moviesAndShowsImgs' src='"+value["Poster"]+"'><h3>"+value["Title"]+"</h3> </div>");
    		
    	 });
		$(".displaySearchResults").show(2000);
    	});
    });
    $("#search").keypress(function(e) {
    if(e.which == 13) {
        $.getJSON("http://www.omdbapi.com/?s="+$("#search").val()+"", function(data, status){
        $("#searchFilter").html("");
        $(".displaySearchResults").hide(1000);
        $(".displaySearchResults").html("");
		$.each(data["Search"],function(key, value){
    		$(".displaySearchResults").append("<div class='moviesAndShowsSearch'><img class='moviesAndShowsImgs' src='"+value["Poster"]+"'><h3>"+value["Title"]+"</h3>Type: "+value["Type"]+"<br />Year: "+value["Year"]+" </div>");
    		
    	 });
		$(".displaySearchResults").show(2000);
    	});
    }
});
	var searchOrClose=0;
    $("#showHideSearchControls").click(function (){
    	$(".searchContainer").slideToggle();
    	$(".displaySearchResults").slideToggle(2000);
    	if(searchOrClose==0)
    	{
    		$("#showHideSearchControls").attr('src','images/close-1540642_960_720.png');
    		searchOrClose=1;
    	}
    	else
    	{
    		$("#showHideSearchControls").attr('src','images/active-search-2-xxl.png');
    		searchOrClose=0;
    	}

    });
});