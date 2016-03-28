Router.configure({
	layoutTemplate: 'layout'
});

Router.map(function(){
	
	this.route('posts',{
		path: '/posts',
		template: 'posts'
	});

	this.route('about');
});