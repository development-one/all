/*
* @Author: lenovo
* @Date:   2019-03-24 16:20:30
* @Last Modified by:   lenovo
* @Last Modified time: 2019-03-24 19:36:23
*/
(function(window){
	function Voice(voiceBar,voiceBall,voiceCurrent){
		return new Voice.prototype.init(voiceBar,voiceBall,voiceCurrent);
	}
	Voice.prototype = {
		constructor: Voice,
		init: function(voiceBar,voiceBall,voiceCurrent){
			this.voiceBar = voiceBar
			this.voiceBall = voiceBall
			this.voiceCurrent = voiceCurrent
		},
		isMove: false,
		VoiceClick:function(callBack){
			var $this = this
				
			var barwidth = this.voiceBar.width()			
			this.voiceBar.click(function(){
				var normalLeft = $(this).offset().left

				var eventLeft = event.pageX;
				
				var offset = eventLeft-normalLeft
				if(offset>=0 && offset<=barwidth){
					$this.voiceCurrent.css("width",eventLeft-normalLeft)
					$this.voiceBall.css("left",eventLeft-normalLeft)	
				}else{
					return;
				}
				//计算进度条比例
				var value = (eventLeft-normalLeft)/$(this).width()
				callBack(value)
			})
		},
		VoiceMove:function(callBack){
			var $this = this

			var barwidth = this.voiceBar.width()
			var normalLeft = $this.voiceBar.offset().left
			this.voiceBar.mousedown(function(){
				$this.isMove = true;
	
				$(document).mousemove(function(){
					var eventLeft = event.pageX;
					
					var offset = eventLeft-normalLeft
					if(offset>=0 && offset<=barwidth){
						$this.voiceCurrent.css("width",eventLeft-normalLeft)
						$this.voiceBall.css("left",eventLeft-normalLeft)
					}
							
					var value = (eventLeft-normalLeft)/$this.voiceBar.width()
					callBack(value)
				});

			});
			$(document).mouseup(function(){
				$(document).off("mousemove")
				$this.isMove = false
				
			})
		},
		setVoice:function(value){
			if(this.isMove){
				return;
			} 
			if(value<0 || value>100) return;
			this.voiceCurrent.css({
				width: value
			});
			this.voiceBall.css({
				left: value
			})
		}
	}
	Voice.prototype.init.prototype = Voice.prototype;
	window.Voice = Voice;
})(window)