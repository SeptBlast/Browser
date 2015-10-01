var fs = require('fs');

var $ = require('jQuery');

var bookmarks = require('./bookmarks');

var renderBookmarks = function(){
	$('#bookmarks').html('');
	
	bookmarks.forEach(function(bookmark){
		$('#bookmarks').append('<li class="bookmark">'+ bookmark +'</li>');
	});
};

renderBookmarks();

$('#views').css("height",""+(window.screen.height-250)+"px");

$('#bookmark').click(function(){
	var url = $('#urlinput').val();
	bookmarks.push(url);
	fs.writeFile('./bookmarks.json', JSON.stringify(bookmarks), renderBookmarks);	
});

/*
$('.bookmark').click(function(){
	$('#urlinput').val($(this).text());
	$('#visit').click();
});
*/

$('#visit').click(function(){
	var url = $('#urlinput').val();	
		
	$('.tab.active').text(url);
	$('.view.active').attr('src', url);
	console.log(url);
});
$('#newtab').click(function(){
	var url = $('#urlinput').val();
	
	$('.tab', '.view').removeClass('active');
	
	$('#tabbar').append('<li class="tab active">'+ url +'</li>');
	$('#views').append('<webview class="view active" src="">'+ url +'</webview>');
});

$('webview>*').click(function(){
	$('#views>webview').removeClass('active');
	$(this).addClass('active');
	console.log($this)
});

$('body').on('click', '.tab', function(){
	$('.tab, .view').removeClass('active');
	
	var index = $(this).index();
	$('.tab').eq(index).addClass('active');
	$('.view').eq(index).addClass('active');
});
