$(function(){

		//div的高度和宽度等于屏幕的高度和宽度
          $("#contact").height($(window).height());
          $("#contact").width($(window).width());
          $("#home").height($(window).height());
          $("#home").width($(window).width());
          $("#xinxi").height($(window).height());
          $("#xinxi").width($(window).width());
          $("#skills").height($(window).height());
          $("#skills").width($(window).width());   

         //音乐
        function view(){
            return {
            W:document.documentElement.clientWidth,
            H:document.documentElement.clientHeight
            }
        }
        var oHome=$('#home');
        var oCoverContent1 = $('.coverContent1',oHome)[0];
        oCoverContent1.style.width = view().W + 800 + 'px';  //COVER 流动背景


		//技能
        circlelize('indicatorHTML','#33CC33',95);
        circlelize('indicatorCSS','#33CC33',95);
		circlelize('indicatorJavaScript','#33CC33',80);
		circlelize('indicatorjQuery','#33CC33',80);
		circlelize('indicatorBootstrap','#87CEEB',75);
		circlelize('indicatorCSS3','#87CEEB',90);
		circlelize('indicatorAjax','#87CEEB',90);
		circlelize('indicatorJava','#87CEEB',75);

		
		//证书
		draw('canvas');

		//---------------------------------------------
		//圆形百分比
		function circlelize(id,color,value){   
			$('#'+id).radialIndicator({
			barColor: color,
			barWidth: 7,
			//initValue: 40,
			roundCorner : false,
			percentage: true,
			radius:65
			});
			$('#'+id).data('radialIndicator').animate(value);
		} 

		//画认证
		function draw(id){

			//画圆圈
			var drawArcBorder = function (context,x,y,r){
				context.beginPath(); 
				context.arc(x,y,r,0,Math.PI*2,true); 
				context.closePath();  
				context.stroke();    
			};

			//画圆
			var drawArc = function (context,x,y,r){
				context.beginPath(); 
				context.arc(x,y,r,0,Math.PI*2,true); 
				context.closePath();  
				context.fill();  
			};

			var drawLine = function (context,x,y){
				context.moveTo(400,300);  
	            		context.lineTo(x,y); 
	            		context.stroke();
			};
		
			var canvas = $("#"+id)[0];
			var context = canvas.getContext('2d');    
			
			//--边框--
			context.strokeStyle = "#B2DFEE";          
			context.lineWidth = 2;     

			drawArcBorder(context,280,170,50);

			drawArcBorder(context,530,80,70);

			drawArcBorder(context,80,300,78);   

			drawArcBorder(context,570,520,65);  

			drawArcBorder(context,520,290,50);

			drawArcBorder(context,260,425,50);
			
			
			//--圆圈背景--
			context.fillStyle = "#F5F5DC";
			
			drawArc(context,280,170,50);
			drawArc(context,530,80,70);
			drawArc(context,80,300,78);
			drawArc(context,570,520,65);			
			drawArc(context,520,290,50);
			drawArc(context,260,425,50);
			
			//--文字--
			context.fillStyle = "#f60";              
			
			context.font = "normal 20px '微软雅黑'";
			context.fillText('CET-6',252,177);
			context.font = "normal 15px '微软雅黑'";
			context.fillText('计算机二级C优秀',473,85);
			context.font = "normal 20px '微软雅黑'";  
			context.fillText('一等奖学金',35,315);
			context.font = "normal 20px '微软雅黑'";
			context.fillText('二等奖学金',520,525);
			context.font = "normal 16px '微软雅黑'";
			context.fillText('优秀论文',490,300);
			context.font = "normal 13px '微软雅黑'";
			context.fillText('张应友奖学金',220,425);
			
			//--中心--
			drawArc(context,400,300,15);
		
			//--连线--
			context.strokeStyle= "#C8C8F0";
			context.lineWidth = 2;
			
			drawLine(context,300,215);
            drawLine(context,500,145);
        	drawLine(context,155,315);			
			drawLine(context,300,393);			
			drawLine(context,545,460);
			drawLine(context,470,299);
		}


});
