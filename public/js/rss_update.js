$('#rssdata')
		.ready(
				function() {
					var pipe_url = 'http://pipes.yahoo.com/pipes/pipe.run?_id=aedbf3bc8ceeda32ebc49a51a40be9d5&_render=json&_callback=?';
					$.getJSON(pipe_url, function(data) {
						$(data.value.items).each(
								function(index, item) {
									var item_html = '<li><a id="rss' + index
											+ '" href="' + item.link + '">'
											+ item.title + '</a> &mdash; '
											+ item['y:published'].month_name
											+ ', ' + item['y:published'].day
											+ ', ' + item['y:published'].year
											+ '</li>';
									$('#rssdata ul.rss-items')
											.append(item_html);
//									$('#rss' + index).popover({
//										trigger : 'hover',
//										html : true,
//										content : item.description,
//										title : item.title
//									});
								});

						$('#rssdata div.loading').fadeOut();
						$('#rssdata ul.rss-items').slideDown();
					});
				});
