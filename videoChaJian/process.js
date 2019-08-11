/*
* @Author: lenovo
* @Date:   2019-03-23 16:45:44
* @Last Modified by:   lenovo
* @Last Modified time: 2019-03-25 23:55:10
*/
(function(window){
	function Progress(bar,ball,current){
		return new Progress.prototype.init(bar,ball,current);
	}
	Progress.prototype = {
		constructor: Progress,
		init: function(bar,ball,current){
			this.bar = bar
			this.ball = ball
			this.current = current
		},
		isMove: false,
		progressClick:function(callBack){
			var $this = this

			this.bar.click(function(){
				var normalLeft = $(this).offset().left

				var eventLeft = event.pageX;
				
				$this.current.css("width",eventLeft-normalLeft)
				$this.ball.css("left",eventLeft-normalLeft)
				//计算进度条比例
				var value = (eventLeft-normalLeft)/$(this).width()
				callBack(value)
			})
		},
		progressMove:function(callBack){
			var $this = this
			
			var barwidth = this.bar.width()
			var normalLeft = $this.bar.offset().left
			this.bar.mousedown(function(){
				$this.isMove = true;
	
				$(document).mousemove(function(){
					var eventLeft = event.pageX;
					
					var offset = eventLeft-normalLeft
					if(offset>=0 && offset<= barwidth){
						$this.current.css("width",eventLeft-normalLeft)
						$this.ball.css("left",eventLeft-normalLeft)
					}
						
					var value = (eventLeft-normalLeft)/$this.bar.width()
					callBack(value)
				});
				$(document).mouseup(function(){
					$(document).mousemove = null
					$(document).mouseup = null
					$this.isMove = false
			})
			return false;

			});
		
		},
		setProgress:function(value){
			if(this.isMove){
				return;
			} 
			if(value<0 || value>100) return;
			this.current.css({
				width: value
			});
			this.ball.css({
				left: value
			})
		}
	}
	Progress.prototype.init.prototype = Progress.prototype;
	window.Progress = Progress;
})(window)