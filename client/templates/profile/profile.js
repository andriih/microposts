Template.profile.events({
	"submit .edit-profile":function(event){
		var file = $('#profileImage').get(0).files[0];
		if(file){
			fsFile = new FS.Filter(file);

			profileImages.insert(fsFile,function(err, result){
				if(err){
					throw new Meteor.Error(err);
				}else{

					var imageLoc = 'C:\\Users\\Andrii\\Desktop\\microposts\\microposts\\public\\img'+result._id;

					UserImages.insert({
						userId : Meteor.userId(),
						username: Meteor.user().username,
						image: imageLOc
					});

					Router.go('/');
				}
			});
		}
		console.log(file);
		return false;
	}
});
