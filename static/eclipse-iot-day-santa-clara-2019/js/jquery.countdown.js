/*!
 * jQuery Countdown Plugin v1.0
 * https://github.com/eAdnan007/jquery-countdown
 *
 * Copyright 2014 Mohaimenul Haque Adnan
 * Released under the GPL license
 */
(function($){
	$.fn.countdown = function(options){
		//Variables that we are going to use
		var dwcd_day, dwcd_hour, dwcd_minute, dwcd_second, dwcd_start_time, dwcd_end_time, dwcd_complete = false;
		
		//Set the default settings
		var settings = $.extend({
			start_time		: null,
			end_time		: null,
			show_day		: true,
			show_hour		: true,
			show_minute		: true,
			show_second		: true,
			update_int		: 1,
			progress		: false,
			onComplete		: function(){},
			wrapper 		: function(unit){


				var wrapper = $('<div class="'+unit.toLowerCase()+'_wrapper" />');
				wrapper.append('<span class="counter" />');
				wrapper.append('<span class="title ">'+unit+'</span>');

				return wrapper;
			},
			update_progress	: function(progress, element){
				element.attr('aria-valuenow', Math.floor(progress));//We set a custom attribute, 'area-valuenow' containing the progress
				element.css('width', Math.floor(progress)+'%');//Fill the bar with percentage of progress
				element.text(Math.floor(progress)+'%');//Put text notation of progress inside the progressbar
			}
		}, options);

		//If start time is not set, set it to current time.
		if(settings.start_time == null) dwcd_start_time = new Date();
		else dwcd_start_time = new Date(settings.start_time);

		//If end time is not set(silly), set it to some time tomorrow.
		if(settings.end_time == null) dwcd_end_time = new Date(new Date() + 25 * 60 * 60 * 1000);
		else dwcd_end_time = new Date(settings.end_time);


		//Check each countdown unit if it is set to display and create html element to display them.
		if(settings.show_day)
			dwcd_day = settings.wrapper('Days');
		if(settings.show_hour)
			dwcd_hour = settings.wrapper('Hours');
		if(settings.show_minute)
			dwcd_minute = settings.wrapper('Minutes');
		if(settings.show_second)
			dwcd_second = settings.wrapper('Seconds');


		//Update the countdown timer and progressbar on set interval.
		update();//First time it should run without wait.
		setInterval(update, settings.update_int*1000);


		//We get every countdown element's html inside the main element.
		this.prepend(dwcd_second);
		this.prepend(dwcd_minute);
		this.prepend(dwcd_hour);
		this.prepend(dwcd_day);


		function update(){

			var now		= new Date();
			var left	= dwcd_end_time - now;

			//How much time is left?
			left = Math.floor(left / 1000);
			if(left < 1) left = 0;//We don't want to count negatives!

			//If no time is left it is complete.
			if(!dwcd_complete){
				if(left == 0){
					dwcd_complete = true;
					settings.onComplete();
				}
			}

			//Extract the days and keep remaining hours in the variable 'left'
			var days	= Math.floor(left / (60 * 60 * 24));
			if(settings.show_day){
				dwcd_day.find('.counter').text(days);
				left = left % (60 * 60 * 24);
			}
			
			//Extract the hours and keep remaining minutes in the variable 'left'
			var hours	= Math.floor(left / (60 * 60));
			if(settings.show_hour){
				dwcd_hour.find('.counter').text(hours);
				left = left % (60 * 60);
			}
			
			//Extract the minutes and keep remaining seconds in the variable 'left'
			var minutes	= Math.floor(left / 60);
			if(settings.show_minute){
				dwcd_minute.find('.counter').text(minutes);
				left = left % 60;
			}
			
			//Whatever we have left is seconds.
			var seconds	= Math.floor(left);
			if(settings.show_second){
				dwcd_second.find('.counter').text(seconds);
			}

			//If progressbar is set to display, get in to update it.
			if(settings.progress != false){
				var total_time	= Math.round(dwcd_end_time - dwcd_start_time);//How much time in total
				var spent_time	= Math.round(now - dwcd_start_time);//How much time already spent
				var progress	= spent_time/total_time*100;//Percentage of progress
				if(progress > 100)progress = 100;//Progress should never be more than 100%
				
				settings.update_progress(progress, settings.progress);//Call the progress update function
			}
		}
	}
})(jQuery);